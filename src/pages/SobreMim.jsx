import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const WA_LINK = 'https://wa.me/5500000000000'

const ArrowRight = ({ color = 'white' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const values = [
  {
    icon: '✦',
    colorClass: 'icon-box-blue',
    title: 'Consistência',
    desc: 'Acredito que presença constante é mais poderosa do que um post viral isolado. Consistência constrói marcas duradouras.',
  },
  {
    icon: '🎯',
    colorClass: 'icon-box-amber',
    title: 'Estratégia',
    desc: 'Cada post tem um propósito. Nada é aleatório — tudo é pensado para comunicar, engajar e converter.',
  },
  {
    icon: '💛',
    colorClass: 'icon-box-green',
    title: 'Autenticidade',
    desc: 'Marcas autênticas criam conexões reais. Meu trabalho é amplificar a sua essência, não criar uma versão falsa.',
  },
]

const achievements = [
  { num: '50+',  label: 'Clientes atendidos', icon: '👥' },
  { num: '3',    label: 'Anos de experiência', icon: '📅' },
  { num: '100+', label: 'Perfis transformados', icon: '🚀' },
  { num: '∞',   label: 'Comprometimento', icon: '💪' },
]

export default function SobreMim() {
  useScrollReveal()

  return (
    <div style={{ paddingTop: '96px' }}>

      {/* ──────────── HERO ──────────── */}
      <section style={{ padding: '80px 0 100px', position: 'relative', overflow: 'hidden' }}>
        {/* Blobs */}
        <div style={{ position: 'absolute', top: 0, right: '-5%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(148,176,237,0.4) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: '-5%', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,161,78,0.25) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>

            {/* Photo */}
            <div className="fade-up" style={{ position: 'relative' }}>
              {/* Decorative sparkles */}
              <div style={{ position: 'absolute', top: 24, left: -16, fontSize: 22, color: '#e8a14e', animation: 'float 3.5s ease-in-out infinite', zIndex: 2 }}>✦</div>
              <div style={{ position: 'absolute', bottom: 40, right: -12, fontSize: 16, color: '#94b0ed', animation: 'float 3.5s ease-in-out infinite 1s', zIndex: 2 }}>✦</div>

              <div style={{ borderRadius: 32, overflow: 'hidden', aspectRatio: '3/4', boxShadow: '0 24px 70px rgba(62,58,83,0.18)', border: '4px solid rgba(255,255,255,0.85)' }}>
                <img
                  src="/images/MariKorman-20260312-Emily-2227.jpg"
                  alt="Emily Comin"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>

              {/* Floating quote badge */}
              <div className="float-badge" style={{ bottom: 32, right: -24, maxWidth: 220 }}>
                <p style={{ fontSize: 13, fontStyle: 'italic', color: '#3e3a53', lineHeight: 1.5, marginBottom: 8 }}>
                  "O fim da inconstância no seu perfil."
                </p>
                <p style={{ fontSize: 12, fontWeight: 700, color: '#3367ca' }}>— Emily Comin</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="tag tag-blue fade-up" style={{ marginBottom: 24 }}>✦ Sobre mim</div>

              <h1 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }} className="fade-up delay-1">
                Olá, eu sou<br />
                <span style={{ color: '#3367ca' }}>Emily Comin</span>
              </h1>

              <p style={{ fontSize: 17, color: '#8a88a0', lineHeight: 1.8, marginBottom: 20 }} className="fade-up delay-2">
                Sou especialista em Social Media com mais de 3 anos de experiência ajudando marcas e profissionais a construírem presença digital consistente e estratégica.
              </p>

              <p style={{ fontSize: 16, color: '#8a88a0', lineHeight: 1.8, marginBottom: 36 }} className="fade-up delay-3">
                Comecei minha jornada percebendo que muitos negócios tinham um produto incrível, mas perfis irregulares que não convertiam. Minha missão se tornou clara: ser a profissional que transforma essa realidade.
              </p>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }} className="fade-up delay-4">
                <Link to="/contato" className="btn btn-primary">
                  Trabalhar comigo <ArrowRight />
                </Link>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── CONQUISTAS ──────────── */}
      <section style={{ padding: '20px 0 80px' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #dce8f9 0%, #eef4fd 100%)',
            borderRadius: 28,
            padding: '48px 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
          }} className="achievements-grid">
            {achievements.map((a, i) => (
              <div key={a.label} className={`fade-up delay-${i + 1}`} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{a.icon}</div>
                <div style={{ fontSize: 32, fontWeight: 800, color: '#3367ca', lineHeight: 1 }}>{a.num}</div>
                <div style={{ fontSize: 13, color: '#8a88a0', marginTop: 6 }}>{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── MINHA HISTÓRIA ──────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' }} className="story-grid">

            {/* Left: pull quote + second photo */}
            <div className="fade-up">
              <div style={{
                background: 'linear-gradient(135deg, #3e3a53, #4a4670)',
                borderRadius: 28,
                padding: '40px',
                marginBottom: 24,
              }}>
                <div style={{ fontSize: 48, color: 'rgba(148,176,237,0.4)', lineHeight: 1, marginBottom: 16 }}>"</div>
                <p style={{ fontSize: 18, color: 'white', lineHeight: 1.7, fontStyle: 'italic' }}>
                  Cada perfil tem uma história única. Meu papel é ajudá-la a ser contada com clareza, autenticidade e constância.
                </p>
              </div>

              <div style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '16/9', boxShadow: 'var(--shadow-md)' }}>
                <img
                  src="/images/MariKorman-20260312-Emily-2229.jpg"
                  alt="Emily Comin trabalhando"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </div>

            {/* Right: story text */}
            <div className="fade-up delay-2">
              <div className="tag tag-amber" style={{ marginBottom: 20 }}>✦ Minha história</div>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', marginBottom: 24 }}>
                De onde veio<br />a paixão por social media
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[
                  'Cresci acompanhando a transformação das redes sociais e percebendo seu potencial enorme para conectar marcas a pessoas. Fui entender mais sobre comunicação, estratégia e o comportamento do consumidor digital.',
                  'Ao longo dos anos, desenvolvi um método próprio que une planejamento estratégico, identidade visual consistente e copywriting que conversa com o público certo.',
                  'Hoje, meu trabalho vai muito além de "postar conteúdo". É sobre construir uma presença digital autêntica, consistente e que realmente gera resultado para o seu negócio.',
                  'Se você está cansada de perfis irregulares, de não saber o que postar ou de investir em conteúdo sem ver retorno — eu fui criada para resolver exatamente isso.',
                ].map((text, i) => (
                  <p key={i} style={{ fontSize: 16, color: '#8a88a0', lineHeight: 1.8 }}>{text}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── VALORES ──────────── */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="tag tag-blue fade-up" style={{ marginBottom: 16 }}>✦ Meus valores</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)' }} className="fade-up delay-1">
              O que guia meu trabalho
            </h2>
          </div>

          <div className="grid-3">
            {values.map((v, i) => (
              <div key={v.title} className={`card fade-up delay-${i + 1}`} style={{ padding: '36px 28px' }}>
                <div className={`icon-box ${v.colorClass}`} style={{ width: 52, height: 52, borderRadius: 16, fontSize: 22, marginBottom: 20 }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize: 18, marginBottom: 12 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: '#8a88a0', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── CTA ──────────── */}
      <section style={{ padding: '0 0 120px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="tag tag-blue fade-up" style={{ marginBottom: 20 }}>✦ Vamos trabalhar juntas?</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 16 }} className="fade-up delay-1">
            Estou pronta para transformar<br />o seu perfil
          </h2>
          <p style={{ fontSize: 17, color: '#8a88a0', maxWidth: 480, margin: '0 auto 44px', lineHeight: 1.7 }} className="fade-up delay-2">
            Vamos conversar sobre seus objetivos e construir juntas uma estratégia que faz sentido para o seu negócio.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }} className="fade-up delay-3">
            <Link to="/contato" className="btn btn-primary">
              Solicitar proposta <ArrowRight />
            </Link>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid    { grid-template-columns: 1fr !important; gap: 40px !important; }
          .story-grid   { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 680px) {
          .achievements-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
