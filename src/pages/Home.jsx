import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useMotionValue, useReducedMotion } from 'motion/react'
import useScrollReveal from '../hooks/useScrollReveal'

const TITLE1 = ['Você', 'está', 'pronto', 'para', 'transformar', 'visualizações', 'em', 'oportunidades?']
const TITLE2 = ['O', 'ecossistema', 'completo', 'da', 'sua', 'comunicação', 'digital.']

const services = [
  { name: 'Assessoria de Comunicação', desc: 'Direção criativa e estratégica para você executar.' },
  { name: 'Desenvolvimento de Sites', desc: 'Eleve sua presença digital com páginas personalizadas.' },
  { name: 'Consultoria Sistema de Conteúdo', desc: 'Tenha seu sistema de criação de conteúdo dentro da sua rotina e nunca mais fique sem criar.' },
  { name: 'Gestão & Estratégia', desc: 'Acompanhamento premium para quem quer apenas aprovar conteúdos.' },
  { name: 'Captação de Imagem, Vídeos e Cobertura de Eventos', desc: 'Não perca nenhum momento, tenha todos eles registrados.' },
]

const SUBTITLE = 'Estratégia, conteúdo e tecnologia trabalhando por você.'

const WA_LINK = 'https://wa.me/+5551991336280'

const ArrowRight = ({ color = 'white' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const categories = [
  {
    icon: '🧠',
    colorClass: 'icon-box-blue',
    title: 'Gestão e Estratégia',
    desc: 'Direção e inteligência de dados para quem precisa de um norte claro no digital.',
  },
  {
    icon: '✍️',
    colorClass: 'icon-box-amber',
    title: 'Produção e Escrita',
    desc: 'Conteúdo, visual e relatórios de alta qualidade que entregam resultado real.',
  },
  {
    icon: '🌐',
    colorClass: 'icon-box-purple',
    title: 'Infraestrutura Web',
    desc: 'Landing pages, site institucional e Google Meu Negócio — ativos que trabalham por você 24h.',
  },
  {
    icon: '⚙️',
    colorClass: 'icon-box-green',
    title: 'Ecossistema e Automação',
    desc: 'Tecnologia para escalar: automações de direct, CRM e hubs de links que não perdem nenhum lead.',
  },
]

/* Subtítulo viajante: UM único elemento fixo que sai do lugar dele no header
   e se desloca na tela até assumir o lugar do título dos serviços.
   Os dois "slots" (header e serviços) só reservam espaço — quem aparece é este. */
function TravelingSubtitle({ heroRef, fromRef, toRef }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const opacity = useMotionValue(0)

  useEffect(() => {
    const clamp = (v) => Math.min(Math.max(v, 0), 1)
    // easeInOutCubic — partida e chegada macias
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
    const lerp = (a, b, t) => a + (b - a) * t

    let raf = 0
    const measure = () => {
      raf = 0
      const hero = heroRef.current
      const from = fromRef.current
      const to = toRef.current
      if (!hero || !from || !to) return
      const heroSticky = hero.querySelector('.hero-sticky')
      const svcSticky = to.closest('.services-sticky')
      const svcSection = to.closest('.services-scroll-section')
      if (!heroSticky || !svcSticky || !svcSection) return

      const sy = window.scrollY
      const heroTop = hero.getBoundingClientRect().top + sy
      const heroTravel = Math.max(1, hero.offsetHeight - window.innerHeight)

      // Posição de cada slot DENTRO do seu container fixo. Como os dois
      // containers ficam presos no topo (top: 0), esses offsets são
      // exatamente onde cada ponto aparece na tela — endpoints estáveis.
      const heroBox = heroSticky.getBoundingClientRect()
      const svcBox = svcSticky.getBoundingClientRect()
      const fromBox = from.getBoundingClientRect()
      const toBox = to.getBoundingClientRect()
      const fromY = fromBox.top - heroBox.top
      const fromX = fromBox.left - heroBox.left
      const toY = toBox.top - svcBox.top
      const toX = toBox.left - svcBox.left

      // Viagem: começa logo após as palavras do hero ficarem coloridas
      // e termina quando a seção de serviços encosta no topo.
      const startAt = heroTop + heroTravel * 0.95
      const endAt = svcSection.getBoundingClientRect().top + sy
      const t = ease(clamp((sy - startAt) / Math.max(1, endAt - startAt)))

      if (t <= 0) {
        // Ainda no header: acompanha o slot de partida
        x.set(heroBox.left + fromX)
        y.set(heroBox.top + fromY)
      } else if (t >= 1) {
        // Já chegou: acompanha o slot de destino (e sai com a seção depois)
        x.set(svcBox.left + toX)
        y.set(svcBox.top + toY)
      } else {
        // Em viagem: deslocamento contínuo entre dois pontos estáveis da tela
        x.set(lerp(fromX, toX, t))
        y.set(lerp(fromY, toY, t))
      }

      // Aparece junto com o subtítulo do header (depois das palavras coloridas)
      opacity.set(clamp((sy - (heroTop + heroTravel * 0.60)) / (heroTravel * 0.14)))
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [heroRef, fromRef, toRef, x, y, opacity])

  return (
    <motion.p className="travel-sub travel-sub-flyer" aria-hidden="true" style={{ x, y, opacity }}>
      {SUBTITLE}
    </motion.p>
  )
}

/* Seção de serviços: recebe o slot onde o subtítulo viajante aterrissa
   e desliza os cards de vidro lateralmente conforme a rolagem vertical. */
function ServicesShowcase({ titleSlotRef, reduce }) {
  const sectionRef = useRef(null)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const [dragRange, setDragRange] = useState(0)

  // Progresso ao longo de toda a seção fixa (alimenta o trilho de cards)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Mede o quanto o trilho precisa deslizar para revelar todos os cards
  useEffect(() => {
    const calc = () => {
      if (trackRef.current && viewportRef.current) {
        setDragRange(Math.max(0, trackRef.current.scrollWidth - viewportRef.current.offsetWidth))
      }
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])

  // Cards: deslizam para a esquerda conforme rola para baixo
  const trackX = useTransform(scrollYProgress, [0.06, 1], [0, -dragRange])

  return (
    <section
      ref={sectionRef}
      className={`services-scroll-section${reduce ? ' is-static' : ''}`}
    >
      <div className="services-sticky">
        <div className="container">
          {/* Slot de chegada — reserva o espaço, o texto visível é o viajante */}
          <h2 ref={titleSlotRef} className={`travel-sub travel-sub-slot${reduce ? ' is-shown' : ''}`}>
            {SUBTITLE}
          </h2>
        </div>

        <div className="service-track-viewport" ref={viewportRef}>
          <motion.div
            ref={trackRef}
            className="service-track"
            style={reduce ? undefined : { x: trackX }}
          >
            {services.map((s, i) => (
              <article key={s.name} className="service-glass-card">
                <span className="service-glass-num">
                  <span className="star" style={{ fontSize: 14, marginRight: 8 }}>✦</span>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </motion.div>
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
  const subSlotRef = useRef(null)
  const titleSlotRef = useRef(null)
  const reduce = useReducedMotion()

  // Fundo (aura roxa) do header sobe enquanto a página desce
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
      // O subtítulo é desenhado pelo <TravelingSubtitle /> (elemento fixo)
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
                {/* Slot de partida — reserva o espaço, o texto visível é o viajante */}
                <p ref={subSlotRef} className={`travel-sub travel-sub-slot${reduce ? ' is-shown' : ''}`}>
                  {SUBTITLE}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Subtítulo que viaja do header até o título dos serviços */}
      {!reduce && (
        <TravelingSubtitle heroRef={heroRef} fromRef={subSlotRef} toRef={titleSlotRef} />
      )}

      {/* ──────────── SERVIÇOS (título vem do header + rolagem lateral) ──────────── */}
      <ServicesShowcase titleSlotRef={titleSlotRef} reduce={reduce} />

      {/* ──────────── SERVIÇOS PREVIEW ──────────── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="tag tag-amber fade-up" style={{ marginBottom: 16 }}>✦ O que eu faço</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 16 }} className="fade-up delay-1">
              Um ecossistema completo<br />para o seu negócio
            </h2>
            <p style={{ fontSize: 17, color: '#8a88a0', maxWidth: 520, margin: '0 auto' }} className="fade-up delay-2">
              Da estratégia à tecnologia, construo a infraestrutura digital que transforma sua presença em resultado.
            </p>
          </div>

          <div className="categories-grid fade-up delay-1">
            {categories.map((s, i) => (
              <div key={s.title} className={`card`} style={{ display: 'flex', alignItems: 'flex-start', gap: 20, padding: '32px 28px' }}>
                <div className={`icon-box ${s.colorClass}`} style={{ flexShrink: 0, width: 56, height: 56, borderRadius: 18, fontSize: 24 }}>
                  {s.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: 17, marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: '#8a88a0', lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }} className="fade-up">
            <Link to="/solucoes" className="btn btn-primary">
              Montar meu ecossistema <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

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
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 250, height: 250, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,161,78,0.12) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

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
            background: 'linear-gradient(135deg, #dce8f9 0%, #eef4fd 50%, #f5f0fd 100%)',
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
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .dark-section-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .categories-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
