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
    desc: 'Planejamento, criação e publicação de conteúdo nas suas redes com consistência, estratégia e identidade.',
    features: ['Feed planejado mensalmente', 'Stories e reels', 'Calendário editorial', 'Publicação agendada'],
  },
  {
    icon: '🎨',
    colorClass: 'icon-box-purple',
    title: 'Criação de Conteúdo Visual',
    desc: 'Artes, posts e peças visuais com identidade que reflete sua marca e se destaca no feed.',
    features: ['Design de posts e stories', 'Identidade visual consistente', 'Templates personalizados', 'Reels e vídeos curtos'],
  },
  {
    icon: '✍️',
    colorClass: 'icon-box-amber',
    title: 'Copywriting & Legendas',
    desc: 'Textos que comunicam, engajam e convertem — escritos com a sua voz e alinhados à sua audiência.',
    features: ['Legendas estratégicas', 'Bio otimizada', 'CTAs que convertem', 'Roteiros para vídeos'],
  },
  {
    icon: '🎯',
    colorClass: 'icon-box-blue',
    title: 'Estratégia Digital',
    desc: 'Análise de público, concorrência e posicionamento para definir a melhor rota de crescimento.',
    features: ['Diagnóstico do perfil', 'Análise de concorrentes', 'Plano de conteúdo 90 dias', 'Posicionamento de marca'],
  },
  {
    icon: '💡',
    colorClass: 'icon-box-green',
    title: 'Consultoria de Perfil',
    desc: 'Diagnóstico completo do seu perfil com plano de ação detalhado para crescimento consistente.',
    features: ['Análise detalhada', 'Plano de ação personalizado', 'Sessão de 1h ao vivo', 'Suporte pós-consultoria'],
  },
  {
    icon: '📊',
    colorClass: 'icon-box-purple',
    title: 'Análise & Relatórios',
    desc: 'Acompanhamento de métricas e relatórios mensais com insights claros e otimizações contínuas.',
    features: ['Relatório mensal', 'KPIs personalizados', 'Análise de crescimento', 'Recomendações estratégicas'],
  },
]

const steps = [
  {
    num: '01',
    title: 'Diagnóstico',
    desc: 'Analiso seu perfil, público e concorrência para entender o cenário atual da sua marca.',
  },
  {
    num: '02',
    title: 'Estratégia',
    desc: 'Defino o posicionamento, tom de voz e plano de conteúdo personalizado para seus objetivos.',
  },
  {
    num: '03',
    title: 'Execução',
    desc: 'Crio e publico o conteúdo com consistência, garantindo presença ativa nas redes.',
  },
  {
    num: '04',
    title: 'Resultados',
    desc: 'Acompanho as métricas, otimizo a estratégia e apresento relatórios mensais com evolução.',
  },
]

export default function Solucoes() {
  useScrollReveal()

  return (
    <div style={{ paddingTop: '96px' }}>

      {/* ──────────── HEADER ──────────── */}
      <section className="page-header" style={{ paddingBottom: '80px' }}>
        {/* Blobs */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(148,176,237,0.4) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '0', left: '-5%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,161,78,0.22) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag tag-blue fade-up" style={{ marginBottom: 20 }}>✦ Soluções</div>
          <h1 className="fade-up delay-1">Tudo que sua marca<br />precisa no digital</h1>
          <p className="fade-up delay-2" style={{ marginTop: 16 }}>
            Serviços completos de social media pensados para criar consistência, fortalecer sua identidade e gerar resultados reais.
          </p>
        </div>
      </section>

      {/* ──────────── SERVICES GRID ──────────── */}
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="grid-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`card fade-up delay-${(i % 3) + 1}`}
                style={{ padding: '36px 28px', display: 'flex', flexDirection: 'column', gap: 20 }}
              >
                <div className={`icon-box ${s.colorClass}`} style={{ width: 60, height: 60, borderRadius: 18, fontSize: 26 }}>
                  {s.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: 17, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: '#8a88a0', lineHeight: 1.65 }}>{s.desc}</p>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'auto' }}>
                  {s.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#2d2b3f' }}>
                      <span style={{ width: 18, height: 18, borderRadius: '50%', background: '#dce8f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#3367ca', flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── PROCESSO ──────────── */}
      <section className="section" style={{ background: 'transparent' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="tag tag-amber fade-up" style={{ marginBottom: 16 }}>✦ Como funciona</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)' }} className="fade-up delay-1">
              Meu processo de trabalho
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative' }}>
            {/* Connecting line */}
            <div style={{ position: 'absolute', top: 36, left: '12.5%', right: '12.5%', height: 2, background: 'linear-gradient(90deg, #dce8f9, #3367ca, #dce8f9)', borderRadius: 1, zIndex: 0 }} />

            {steps.map((step, i) => (
              <div key={step.num} className={`fade-up delay-${i + 1}`} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: 72, height: 72,
                  borderRadius: '50%',
                  background: i === 0 || i === 2 ? '#3367ca' : 'white',
                  border: '3px solid #3367ca',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: '0 4px 20px rgba(51,103,202,0.2)',
                }}>
                  <span style={{ fontWeight: 800, fontSize: 16, color: i === 0 || i === 2 ? 'white' : '#3367ca' }}>
                    {step.num}
                  </span>
                </div>
                <h3 style={{ fontSize: 16, marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 13, color: '#8a88a0', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .process-line { display: none !important; }
          }
          @media (max-width: 480px) {
            .process-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ──────────── CTA ──────────── */}
      <section style={{ padding: '0 0 120px' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #3e3a53 0%, #4a4670 100%)',
            borderRadius: 36,
            padding: 'clamp(48px, 6vw, 80px) 40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: -50, right: -50, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(148,176,237,0.2) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

            <div className="tag tag-white fade-up" style={{ marginBottom: 20 }}>✦ Pronta para começar?</div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', color: 'white', marginBottom: 16 }} className="fade-up delay-1">
              Vamos criar uma estratégia<br />personalizada para você
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', maxWidth: 460, margin: '0 auto 44px', lineHeight: 1.7 }} className="fade-up delay-2">
              Entre em contato e conte sobre o seu negócio. Vou montar uma proposta sob medida para os seus objetivos.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }} className="fade-up delay-3">
              <Link to="/contato" className="btn btn-ghost">
                Solicitar proposta <ArrowRight color="#3e3a53" />
              </Link>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#25D366', color: 'white', boxShadow: '0 4px 20px rgba(37,211,102,0.3)' }}>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
