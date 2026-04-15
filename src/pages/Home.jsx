import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const WA_LINK = 'https://wa.me/5500000000000'

const ArrowRight = ({ color = 'white' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const services = [
  {
    icon: '📱',
    colorClass: 'icon-box-blue',
    title: 'Gestão de Redes Sociais',
    desc: 'Planejamento e execução completa do seu conteúdo com consistência e estratégia.',
  },
  {
    icon: '🎨',
    colorClass: 'icon-box-purple',
    title: 'Criação de Conteúdo Visual',
    desc: 'Posts, stories e reels com identidade visual alinhada à sua marca.',
  },
  {
    icon: '🎯',
    colorClass: 'icon-box-amber',
    title: 'Estratégia Digital',
    desc: 'Posicionamento, análise do público e plano de conteúdo personalizado.',
  },
]

export default function Home() {
  useScrollReveal()

  return (
    <div style={{ paddingTop: '96px' }}>

      {/* ──────────── HERO ──────────── */}
      <section style={{
        minHeight: 'calc(100vh - 96px)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 0 80px',
      }}>
        {/* Blobs */}
        <div style={{ position: 'absolute', top: '-5%', right: '0', width: 550, height: 550, borderRadius: '50%', background: 'radial-gradient(circle, rgba(148,176,237,0.45) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none', animation: 'pulse-glow 6s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '5%', left: '-5%', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,161,78,0.28) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none', animation: 'pulse-glow 8s ease-in-out infinite 2s' }} />
        <div style={{ position: 'absolute', top: '30%', left: '25%', width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(51,103,202,0.12) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

            {/* ── Left: Text ── */}
            <div>
              <div className="tag tag-blue fade-up" style={{ marginBottom: 28 }}>
                <span>✦</span> Social Media Estratégico
              </div>

              <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 68px)', fontWeight: 800, lineHeight: 1.08, color: '#3e3a53', marginBottom: 24 }} className="fade-up delay-1">
                O fim da<br />
                <span style={{ color: '#3367ca' }}>inconstância</span><br />
                no seu perfil.
              </h1>

              <p style={{ fontSize: 18, color: '#8a88a0', lineHeight: 1.75, marginBottom: 40, maxWidth: 460 }} className="fade-up delay-2">
                Conteúdo estratégico, visual consistente e presença digital que transforma seguidores em clientes.
              </p>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }} className="fade-up delay-3">
                <Link to="/solucoes" className="btn btn-primary">
                  Ver Soluções <ArrowRight />
                </Link>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Falar no WhatsApp
                </a>
              </div>

              {/* Stats */}
              <div className="fade-up delay-4" style={{ display: 'flex', gap: 40, marginTop: 52, paddingTop: 40, borderTop: '1px solid rgba(62,58,83,0.08)' }}>
                {[
                  { num: '50+',   label: 'Clientes atendidos' },
                  { num: '3 anos', label: 'De experiência' },
                  { num: '100%',  label: 'Dedicação' },
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ fontSize: 28, fontWeight: 800, color: '#3e3a53' }}>{s.num}</div>
                    <div style={{ fontSize: 13, color: '#8a88a0', marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Image ── */}
            <div className="fade-up delay-2" style={{ position: 'relative' }}>
              {/* Sparkles */}
              {[
                { top: 16, right: 32, size: 26, color: '#e8a14e', delay: '0s' },
                { bottom: 80, left: 16, size: 20, color: '#94b0ed', delay: '1.2s' },
                { top: '42%', right: -16, size: 14, color: '#3367ca', delay: '0.6s' },
              ].map((sp, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  top: sp.top, bottom: sp.bottom, left: sp.left, right: sp.right,
                  fontSize: sp.size,
                  color: sp.color,
                  animation: `float 3.5s ease-in-out infinite ${sp.delay}`,
                  zIndex: 2,
                  lineHeight: 1,
                }}>✦</div>
              ))}

              {/* Photo */}
              <div style={{
                borderRadius: 32,
                overflow: 'hidden',
                aspectRatio: '4/5',
                boxShadow: '0 24px 70px rgba(62,58,83,0.18)',
                border: '4px solid rgba(255,255,255,0.85)',
                position: 'relative',
              }}>
                <img
                  src="/images/MariKorman-20260312-Emily-2211.jpg"
                  alt="Emily Comin — Social Media"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>

              {/* Floating badge */}
              <div className="float-badge" style={{ bottom: 28, left: -28, minWidth: 210 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 14, background: 'linear-gradient(135deg, #3367ca, #94b0ed)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                    📈
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#3e3a53' }}>+120% engajamento</div>
                    <div style={{ fontSize: 12, color: '#8a88a0' }}>média dos clientes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── STRIP ──────────── */}
      <section style={{ padding: '20px 0 60px' }}>
        <div className="container">
          <div className="divider" />
          <p style={{
            textAlign: 'center', fontSize: 12, color: '#8a88a0',
            fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            margin: '28px 0',
          }}>
            Conteúdo estratégico · Visual consistente · Crescimento real
          </p>
          <div className="divider" />
        </div>
      </section>

      {/* ──────────── SERVIÇOS PREVIEW ──────────── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="tag tag-amber fade-up" style={{ marginBottom: 16 }}>✦ O que eu faço</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 16 }} className="fade-up delay-1">
              Soluções que fazem<br />seu perfil crescer
            </h2>
            <p style={{ fontSize: 17, color: '#8a88a0', maxWidth: 500, margin: '0 auto' }} className="fade-up delay-2">
              Do planejamento à execução, cuido de tudo para que sua marca brilhe no digital.
            </p>
          </div>

          <div className="grid-3">
            {services.map((s, i) => (
              <div key={s.title} className={`card fade-up delay-${i + 1}`} style={{ textAlign: 'center', padding: '40px 28px' }}>
                <div className={`icon-box ${s.colorClass}`} style={{ margin: '0 auto 20px', width: 64, height: 64, borderRadius: 20, fontSize: 28 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: 17, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: '#8a88a0', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }} className="fade-up">
            <Link to="/solucoes" className="btn btn-outline">
              Ver todas as soluções <ArrowRight color="#3367ca" />
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
                Consistência é a chave do crescimento digital
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, fontSize: 16, marginBottom: 36 }}>
                Sou Emily Comin, especialista em Social Media. Meu trabalho é transformar perfis irregulares em marcas digitais fortes — com conteúdo estratégico e presença que converte.
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
              Pronta para transformar<br />seu perfil?
            </h2>
            <p style={{ fontSize: 17, color: '#8a88a0', maxWidth: 480, margin: '0 auto 44px' }} className="fade-up delay-2">
              Entre em contato e descubra como posso ajudar sua marca a crescer com consistência e estratégia.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }} className="fade-up delay-3">
              <Link to="/contato" className="btn btn-primary">
                Solicitar proposta <ArrowRight />
              </Link>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                WhatsApp direto
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .dark-section-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  )
}
