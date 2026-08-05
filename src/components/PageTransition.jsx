import { createContext, useContext, useState, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const PageTransitionContext = createContext({ openPage: () => {} })

export const usePageTransition = () => useContext(PageTransitionContext)

const EASE = [0.22, 1, 0.36, 1]

/* Provider: expõe openPage(to, x, y). Ao chamar, um círculo com a cor da
   marca abre a partir do ponto clicado e cresce até cobrir a tela; então
   navega e desvanece, revelando a nova página (que entra crescendo). */
export function PageTransitionProvider({ children }) {
  const navigate = useNavigate()
  const reduce = useReducedMotion()
  const [overlay, setOverlay] = useState(null) // { to, x, y, phase }

  const openPage = useCallback(
    (to, x, y) => {
      if (reduce) {
        navigate(to)
        return
      }
      setOverlay({ to, x, y, phase: 'cover' })
    },
    [navigate, reduce]
  )

  // Raio para cobrir o canto mais distante do ponto clicado
  const coverR = overlay
    ? Math.hypot(
        Math.max(overlay.x, window.innerWidth - overlay.x),
        Math.max(overlay.y, window.innerHeight - overlay.y)
      ) + 4
    : 0

  const handleComplete = () => {
    if (!overlay) return
    if (overlay.phase === 'cover') {
      // Tela coberta → troca de página e começa a revelar
      navigate(overlay.to)
      setOverlay((o) => (o ? { ...o, phase: 'reveal' } : o))
    } else {
      setOverlay(null)
    }
  }

  return (
    <PageTransitionContext.Provider value={{ openPage }}>
      {children}

      {overlay && (
        <div
          aria-hidden="true"
          style={{ position: 'fixed', inset: 0, zIndex: 200, pointerEvents: 'all' }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={
              overlay.phase === 'cover'
                ? { scale: 1, opacity: 1 }
                : { scale: 1, opacity: 0 }
            }
            transition={{ duration: overlay.phase === 'cover' ? 0.55 : 0.5, ease: EASE }}
            onAnimationComplete={handleComplete}
            style={{
              position: 'absolute',
              width: coverR * 2,
              height: coverR * 2,
              left: overlay.x - coverR,
              top: overlay.y - coverR,
              borderRadius: '50%',
              background:
                'radial-gradient(120% 120% at 50% 35%, #dce8f9 0%, #ede8f9 45%, #f5f0fd 100%)',
              willChange: 'transform, opacity',
            }}
          />
        </div>
      )}
    </PageTransitionContext.Provider>
  )
}

/* Faz cada página entrar suavemente (a nova "aparece crescendo" junto com
   a cortina que desvanece). Só opacidade — nada de transform aqui, para não
   quebrar elementos position:fixed das páginas. */
export function PageShell({ children }) {
  const { pathname } = useLocation()
  const reduce = useReducedMotion()

  if (reduce) return children

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
