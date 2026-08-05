import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import useScrollReveal from '../hooks/useScrollReveal'
import { usePageTransition } from '../components/PageTransition'

const TITLE1 = ['Você', 'está', 'pronto', 'para', 'transformar', 'visualizações', 'em', 'oportunidades?']
const TITLE2 = ['O', 'ecossistema', 'completo', 'da', 'sua', 'comunicação', 'digital.']

const services = [
  { name: 'Assessoria de Comunicação', desc: 'Direção criativa e estratégica para você executar.', to: '/assessoria' },
  { name: 'Desenvolvimento de Sites', desc: 'Eleve sua presença digital com páginas personalizadas.', to: '/solucoes' },
  { name: 'Consultoria Sistema de Conteúdo', desc: 'Tenha seu sistema de criação de conteúdo dentro da sua rotina e nunca mais fique sem criar.', to: '/consultoria' },
  { name: 'Gestão & Estratégia', desc: 'Acompanhamento premium para quem quer apenas aprovar conteúdos.', to: '/solucoes' },
  { name: 'Captação de Imagem, Vídeos e Cobertura de Eventos', desc: 'Não perca nenhum momento, tenha todos eles registrados.', to: '/solucoes' },
]

const SUBTITLE = 'Estratégia, conteúdo e tecnologia trabalhando por você.'

const WA_LINK = 'https://wa.me/+5551991336280'

const ArrowRight = ({ color = 'white' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const rowVariants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

/* Seção de serviços: o subtítulo viajante pousa como título e, logo abaixo,
   os serviços aparecem em uma lista vertical que entra em cascata ao rolar.
   Cada linha é um link inteiro (ótimo no mobile) e abre a página com a
   transição de círculo. Mantém as classes que o subtítulo viajante usa. */
function ServicesShowcase({ reduce }) {
  const sectionRef = useRef(null)
  const { openPage } = usePageTransition()

  const Row = reduce ? 'li' : motion.li
  const List = reduce ? 'ul' : motion.ul
  const listMotion = reduce
    ? {}
    : {
        variants: listVariants,
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: true, amount: 0.2 },
      }

  return (
    <section
      ref={sectionRef}
      className={`services-scroll-section${reduce ? ' is-static' : ''}`}
    >
      <div className="services-sticky">
        <div className="container">
          <h2 className="services-heading">{SUBTITLE}</h2>

          <List className="service-list" {...listMotion}>
            {services.map((s, i) => (
              <Row key={s.name} className="service-row-item" variants={reduce ? undefined : rowVariants}>
                <Link
                  to={s.to}
                  className="service-row"
                  onClick={(e) => {
                    e.preventDefault()
                    openPage(s.to, e.clientX, e.clientY)
                  }}
                >
                  <span className="service-row-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="service-row-body">
                    <span className="service-row-title">{s.name}</span>
                    <span className="service-row-desc">{s.desc}</span>
                  </span>
                  <span className="service-row-arrow" aria-hidden="true">
                    <ArrowRight color="var(--blue)" />
                  </span>
                </Link>
              </Row>
            ))}
          </List>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  useScrollReveal()
  const heroRef = useRef(null)
  const title1Ref = useRef(null)
  const title2Ref = useRef(null)
  const reduce = useReducedMotion()

  // Fundo azul do header faz parallax: sobe (mais devagar que a rolagem)
  // enquanto o hero está em cena.
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const auraY = useTransform(heroProgress, [0, 1], ['0px', '-300px'])

  // Troca de título ligada à rolagem (controlador direto, sem lib)
  useEffect(() => {
    const hero = heroRef.current
    const t1 = title1Ref.current
    const t2 = title2Ref.current
    if (!hero || !t1 || !t2) return
    const words = Array.from(t1.children)
    const N = words.length
    const t2words = Array.from(t2.querySelector('.t2-main').children)
    const M = t2words.length
    const clamp = (v) => Math.min(Math.max(v, 0), 1)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      t2.style.opacity = '0'
      return
    }

    const update = () => {
      const travel = hero.offsetHeight - window.innerHeight
      const p = travel > 0 ? clamp(-hero.getBoundingClientRect().top / travel) : 0
      // Título 1: cada palavra sobe e some, escalonado
      words.forEach((el, i) => {
        const t = clamp((p - (i / N) * 0.34) / 0.12)
        el.style.opacity = String(1 - t)
        el.style.transform = `translateY(${-60 * t}px)`
        el.style.filter = t > 0 ? `blur(${6 * t}px)` : 'none'
      })
      // Título 2: começa a entrar enquanto "oportunidades?" ainda está no fade
      t2words.forEach((el, i) => {
        const t = clamp((p - (0.36 + (i / M) * 0.22)) / 0.14)
        el.style.opacity = String(t)
        el.style.transform = `translateY(${28 * (1 - t)}px)`
        el.style.filter = t < 1 ? `blur(${5 * (1 - t)}px)` : 'none'
        // Onda de cor: cada palavra pulsa escuro → roxo → escuro ao rolar
        const peak = 0.70 + (i / M) * 0.24
        const c = clamp(1 - Math.abs(p - peak) / 0.035)
        el.style.color = `rgb(${Math.round(62 + 62 * c)}, ${Math.round(58 + 41 * c)}, ${Math.round(83 + 113 * c)})`
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div>

      {/* Emojis fixos — acompanham a página inteira ao rolar */}
      <div className="floating-decor" aria-hidden="true">
        <span className="fd" style={{ top: '14%', left: '5%', fontSize: 30, animationDelay: '0s' }}>⚡</span>
        <span className="fd" style={{ top: '66%', left: '4%', fontSize: 24, animationDelay: '1.1s' }}>✨</span>
        <span className="fd" style={{ bottom: '10%', right: '7%', fontSize: 30, animationDelay: '0.5s' }}>😎</span>
        <span className="fd star" style={{ top: '22%', right: '6%', fontSize: 30, animationDelay: '0.3s' }}>✦</span>
        <span className="fd star" style={{ bottom: '30%', left: '9%', fontSize: 20, animationDelay: '1.4s' }}>✦</span>
        <span className="fd star" style={{ top: '52%', right: '11%', fontSize: 15, animationDelay: '0.8s' }}>✦</span>
      </div>

      {/* ──────────── HERO (troca de título ao rolar) ──────────── */}
      <motion.section
        ref={heroRef}
        className="aura hero-aura"
        style={{
          position: 'relative',
          height: '175vh',
          // Fundo roxo sobe conforme a rolagem desce (parallax)
          ...(reduce ? null : { '--aura-y': auraY }),
        }}
      >
        <div className="hero-sticky" style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          {/* Glows animados sobre a aura */}
          <div style={{ position: 'absolute', top: '-5%', right: '0', width: 550, height: 550, borderRadius: '50%', background: 'radial-gradient(circle, rgba(148,176,237,0.45) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none', animation: 'pulse-glow 6s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', bottom: '5%', left: '-5%', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,99,196,0.32) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none', animation: 'pulse-glow 8s ease-in-out infinite 2s' }} />
          <div style={{ position: 'absolute', top: '30%', left: '25%', width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(51,103,202,0.12) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

          <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
            <div style={{ display: 'grid', placeItems: 'center', textAlign: 'center' }}>
              {/* Título 1 — palavras somem para cima, uma a uma */}
              <h1 ref={title1Ref} style={{ gridArea: '1 / 1', fontSize: 'clamp(40px, 5.5vw, 68px)', fontWeight: 800, lineHeight: 1.14, color: '#3e3a53', margin: 0, maxWidth: 780 }}>
                {TITLE1.map((w, i) => (
                  <span key={i} style={{ display: 'inline-block', marginRight: '0.28em', color: w === 'transformar' ? '#3367ca' : undefined, willChange: 'transform, opacity, filter' }}>
                    {w}
                  </span>
                ))}
              </h1>
              {/* Título 2 + subtítulo — palavras entram uma a uma ao rolar */}
              <div ref={title2Ref} style={{ gridArea: '1 / 1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, maxWidth: 860 }}>
                <p className="t2-main" style={{ fontSize: 'clamp(40px, 5.5vw, 68px)', fontWeight: 800, lineHeight: 1.14, color: '#3e3a53', margin: 0 }}>
                  {TITLE2.map((w, i) => (
                    <span key={i} style={{ display: 'inline-block', marginRight: '0.28em', opacity: 0, willChange: 'transform, opacity, filter, color' }}>
                      {w}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ──────────── SERVIÇOS ──────────── */}
      <ServicesShowcase reduce={reduce} />

      {/* ──────────── SOBRE TEASER ──────────── */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #3e3a53 0%, #4a4670 100%)',
            borderRadius: 36,
            padding: 'clamp(40px, 6vw, 72px)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 60,
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }} className="dark-section-grid">
            {/* bg blobs */}
            <div style={{ position: 'absolute', top: -60, right: -60, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(148,176,237,0.18) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 250, height: 250, borderRadius: '50%', background: 'radial-gradient(circle, rgba(223,251,120,0.14) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

            {/* Text */}
            <div className="fade-up" style={{ position: 'relative', zIndex: 1 }}>
              <div className="tag tag-white" style={{ marginBottom: 24 }}>✦ Sobre mim</div>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', color: 'white', marginBottom: 20 }}>
                Estratégia, tecnologia e conteúdo no mesmo lugar
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, fontSize: 16, marginBottom: 36 }}>
                Sou Emily Comin, especialista em infraestrutura digital. Minha missão é acabar com a inconstância e o amadorismo no digital, entregando soluções completas que geram resultados reais, cominando estratégia de conteúdo, design e tecnologia.
              </p>
              <Link to="/sobre" className="btn btn-ghost">
                Conhecer minha história <ArrowRight color="#3e3a53" />
              </Link>
            </div>

            {/* Photo */}
            <div className="fade-up delay-2" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '1', border: '3px solid rgba(255,255,255,0.14)' }}>
                <img
                  src="/images/MariKorman-20260312-Emily-2228.jpg"
                  alt="Emily Comin"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── CTA FINAL ──────────── */}
      <section style={{ padding: '0 0 120px' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #dce8f9 0%, #eaf1fd 50%, #f0f4ff 100%)',
            borderRadius: 36,
            padding: 'clamp(48px, 6vw, 88px) 40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: -30, left: -30, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(51,103,202,0.15) 0%, transparent 70%)', filter: 'blur(30px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -30, right: -30, width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle, rgba(148,176,237,0.2) 0%, transparent 70%)', filter: 'blur(30px)', pointerEvents: 'none' }} />

            <div className="tag tag-blue fade-up" style={{ marginBottom: 20 }}>✦ Vamos começar?</div>
            <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', marginBottom: 16 }} className="fade-up delay-1">
              Pronta para construir<br />seu ecossistema digital?
            </h2>
            <p style={{ fontSize: 17, color: '#8a88a0', maxWidth: 480, margin: '0 auto 44px' }} className="fade-up delay-2">
              Entre em contato e descubra como posso ajudar sua marca a crescer com estratégia, conteúdo e tecnologia.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }} className="fade-up delay-3">
              <Link to="/contato" className="btn btn-primary">
                Solicitar proposta <ArrowRight />
              </Link>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Montar meu pacote
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Redesign visual (paleta do manual: azul, periwinkle, roxo, neon) ── */

        /* Acento neon sob o título da seção — detalhe, não fundo */
        .services-heading { position: relative; padding-bottom: 20px; }
        .services-heading::after {
          content: ""; position: absolute; left: 50%; bottom: 0;
          transform: translateX(-50%);
          width: 56px; height: 5px; border-radius: 3px; background: #dffb78;
          box-shadow: 0 2px 12px rgba(223, 251, 120, 0.55);
        }

        /* Número do serviço vira chip periwinkle (cor de suporte da marca) */
        .service-row-num {
          background: var(--blue-pale);
          border-radius: 10px;
          padding: 9px 0;
          text-align: center;
          box-shadow: inset 0 0 0 1px rgba(51, 103, 202, 0.12);
        }

        /* Barra neon que cresce à esquerda no hover — acento pontual */
        .service-row { position: relative; overflow: hidden; }
        .service-row::before {
          content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 4px;
          background: #dffb78; border-radius: 0 3px 3px 0;
          transform: scaleY(0); transform-origin: center;
          transition: transform var(--transition);
        }
        .service-row:hover::before { transform: scaleY(1); }
        .service-row:hover .service-row-num {
          background: #e9f0fc;
          box-shadow: inset 0 0 0 1px rgba(51, 103, 202, 0.28);
        }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .dark-section-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  )
}
