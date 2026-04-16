import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

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
        padding: '60px 0 80px'
      }}>
        {/* Blobs */}
        <div style={{ position: 'absolute', top: '-5%', right: '0', width: 550, height: 550, borderRadius: '50%', background: 'radial-gradient(circle, rgba(148,176,237,0.45) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none', animation: 'pulse-glow 6s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '5%', left: '-5%', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,161,78,0.28) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none', animation: 'pulse-glow 8s ease-in-out infinite 2s' }} />
        <div style={{ position: 'absolute', top: '30%', left: '25%', width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(51,103,202,0.12) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            {/* ── Left: Text ── */}
            <div>
              {/* Title com decorações flutuantes */}
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: 24 }} className="fade-up delay-1">
                {/* Raio — canto superior direito */}
                <span style={{
                  position: 'absolute',
                  top: -18,
                  right: -40,
                  fontSize: 34,
                  filter: 'drop-shadow(0 2px 6px rgba(232,161,78,0.55))',
                  animation: 'float 3s ease-in-out infinite',
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}>⚡</span>

                {/* Estrelas — canto inferior esquerdo */}
                <span style={{
                  position: 'absolute',
                  bottom: 10,
                  left: -44,
                  fontSize: 26,
                  filter: 'drop-shadow(0 2px 6px rgba(232,161,78,0.5))',
                  animation: 'float 4s ease-in-out infinite 1s',
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}>✨</span>

                {/* Emoji óculos — canto inferior direito */}
                <span style={{
                  position: 'absolute',
                  bottom: -24,
                  right: -48,
                  fontSize: 28,
                  filter: 'drop-shadow(0 2px 8px rgba(51,103,202,0.3))',
                  animation: 'float 3.5s ease-in-out infinite 0.5s',
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}>😎</span>

                <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 68px)', fontWeight: 800, lineHeight: 1.08, color: '#3e3a53', margin: 0 }}>
                  Construindo a infraestrutura digital que <br />
                  <span style={{ color: '#3367ca' }}>transforma</span><br />
                  seguidores em clientes.
                </h1>
              </div>

              <p style={{ fontSize: 18, color: '#8a88a0', lineHeight: 1.75, marginBottom: 40, maxWidth: 460 }} className="fade-up delay-2">
                Soluções modulares de estratégia, conteúdo e tecnologia para empresas que buscam escala e profissionalismo.
              </p>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }} className="fade-up delay-3">
                <Link to="/solucoes" className="btn btn-primary">
                  Ver Soluções <ArrowRight />
                </Link>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Falar no WhatsApp
                </a>
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
            Estratégia · Conteúdo · Infraestrutura Web · Automação
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
                Sou Emily Comin, especialista em infraestrutura digital. Combino estratégia de conteúdo, design e tecnologia para transformar negócios em marcas que vendem — online e offline.
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
