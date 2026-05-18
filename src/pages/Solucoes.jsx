import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const WA_NUMBER = '+5551991336280'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Olá! Tenho interesse em conhecer as soluções da Lemin Studio. Gostaria de mais informações!')}`

const ArrowRight = ({ color = 'white' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const categories = [
  {
    id: 'novidade',
    tag: '🚀 Novidade',
    tagClass: 'tag-purple',
    hook: 'Um clube de assinaturas de conteúdo estratégico para quem quer crescer no digital com consistência e inteligência de dados.',
    title: 'Clube de Conteúdo Estratégico',
    services: [
      {
        icon: '✨',
        colorClass: 'icon-box-purple',
        title: 'Clube de IA para Empreendedoras',
        badge: 'Em breve!',
        price: 67.00,
        desc: 'Comunidade mensal para empreendedoras que querem usar IA de forma prática no negócio. Todo mês: novas ferramentas, automações prontas para usar e resolução de desafios reais em grupo.',
        features: ['Novas IAs e automações todo mês', 'Comunidade ativa de empreendedoras', 'Suporte para desafios do seu negócio'],
      }
    ]
  },
  {
    id: 'conteúdo',
    tag: '🧠 Conteúdo',
    tagClass: 'tag-blue',
    hook: 'Se você procura soluções para criação de conteúdo, gestão de redes ou posicionamento digital, está na seção certa.',
    title: 'O Conteúdo',
    subtitle: 'Para quem precisa de direção e inteligência de dados.',
    services: [
      {
        icon: '🎯',
        colorClass: 'icon-box-purple',
        title: 'Consultoria Sistema de Conteúdo',
        price: 797.00,
        desc: 'Saia com um sistema completo de conteúdo estratégico e aprenda a criar seus próprios posts com IA sem ficar genérico. O empurrão estratégico para você assumir o controle da sua narrativa.',
        features: ['Análise de perfil e estratégia', 'Definição de formatos', 'Sistema de conteúdo montado', 'Entregáveis de IA inclusos'],
        learnMoreLink: '/consultoria',
      },
      {
        icon: '📱',
        colorClass: 'icon-box-blue',
        title: 'Ecossistema de Comunicação',
        badge: 'Full Service',
        price: 1500.00,
        desc: 'A solução completa para quem quer delegar a presença digital. Engloba desde o planejamento estratégico, criação de calendário de conteúdos, postagem e análise mensal de resultados.',
        features: ['Planejamento estratégico mensal', 'Design e edição', 'Agendamento de posts', 'Análise mensal de resultados'],
      },
      {
        icon: '📊',
        colorClass: 'icon-box-amber',
        title: 'Assessoria de Comunicação',
        badge: 'Mensal',
        price: 'A partir de R$ 667/mês',
        desc: 'Alguém que olha para os seus números, ajusta a rota e mantém o conteúdo estratégico, para você crescer de forma consistente e não pela sorte.',
        features: ['Análise de métricas com ação (não só relatório)', 'Calendário mensal: ganchos, formatos e CTAs definidos', 'Criação de páginas: 1 página de vendas por mês'],
      },
      {
        icon: '🔌',
        colorClass: 'icon-box-green',
        title: 'Desenvolvimento de Soluções Personalizadas',
        badge: null,
        price: 'Sob consulta',
        desc: 'Desenvolvimento de ferramentas digitais exclusivas para resolver problemas operacionais da sua empresa. Criamos desde portais de clientes e dashboards de métricas até plataformas de agendamento ou sistemas internos de gestão.',
        features: ['Solução de problemas operacionais', 'Ferramentas digitais exclusivas', 'Automação de processos internos'],
      },
    ]
  },
]

const sectionBg = ['transparent', 'rgba(248,249,252,0.8)']

function formatPrice(price) {
  if (typeof price === 'string') return price
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export default function Solucoes() {
  useScrollReveal()

  return (
    <div style={{ paddingTop: '96px' }}>

      {/* HEADER */}
      <section className="page-header" style={{ paddingBottom: '80px' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(148,176,237,0.4) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '0', left: '-5%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,161,78,0.22) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag tag-blue fade-up" style={{ marginBottom: 20 }}>✦ Soluções</div>
          <h1 className="fade-up delay-1">
            A infraestrutura digital<br />que transforma seguidores<br />em ativos de venda.
          </h1>
          <p className="fade-up delay-2" style={{ marginTop: 16, maxWidth: 520 }}>
            Soluções modulares de estratégia, conteúdo e tecnologia para empresas que buscam escala e profissionalismo.
          </p>
        </div>
      </section>

      {/* CATEGORIAS */}
      {categories.map((cat, catIdx) => (
        <section
          key={cat.id}
          className="section"
          style={{ background: sectionBg[catIdx], paddingTop: catIdx === 0 ? 40 : undefined }}
        >
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
              <div>
                <div className={`tag ${cat.tagClass} fade-up`} style={{ marginBottom: 14 }}>{cat.tag}</div>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', marginBottom: 8 }} className="fade-up delay-1">
                  {cat.title}
                </h2>
                {cat.subtitle && (
                  <p style={{ fontSize: 15, color: '#8a88a0', maxWidth: 420 }} className="fade-up delay-2">
                    {cat.subtitle}
                  </p>
                )}
              </div>
              <div className="fade-up delay-2" style={{
                background: 'rgba(51,103,202,0.06)',
                border: '1px solid rgba(51,103,202,0.12)',
                borderRadius: 16,
                padding: '14px 20px',
                fontSize: 13,
                color: '#3367ca',
                fontStyle: 'italic',
                maxWidth: 280,
                lineHeight: 1.6,
                alignSelf: 'center',
              }}>
                "{cat.hook}"
              </div>
            </div>

            <div className="sol-grid">
              {cat.services.map((s, i) => (
                <div
                  key={s.title}
                  className={`card fade-up delay-${i + 1}`}
                  style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}
                >
                  {/* Icon + badge */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                    <div className={`icon-box ${s.colorClass}`} style={{ width: 52, height: 52, borderRadius: 16, fontSize: 22, flexShrink: 0 }}>
                      {s.icon}
                    </div>
                    {s.badge && (
                      <span style={{
                        fontSize: 11, fontWeight: 700,
                        color: '#3367ca', background: '#dce8f9',
                        borderRadius: 8, padding: '4px 10px',
                        whiteSpace: 'nowrap', alignSelf: 'flex-start', marginTop: 2,
                      }}>
                        {s.badge}
                      </span>
                    )}
                  </div>

                  {/* Title + desc */}
                  <div>
                    <h3 style={{ fontSize: 16, marginBottom: 8 }}>{s.title}</h3>
                    <p style={{ fontSize: 13, color: '#8a88a0', lineHeight: 1.65 }}>{s.desc}</p>
                  </div>

                  {/* Features */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, marginTop: 'auto' }}>
                    {s.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#2d2b3f' }}>
                        <span style={{ width: 16, height: 16, borderRadius: '50%', background: '#dce8f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#3367ca', flexShrink: 0 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div style={{
                    marginTop: 8, paddingTop: 14,
                    borderTop: '1px solid rgba(62,58,83,0.07)',
                  }}>
                    <div style={{ fontSize: 10, color: '#8a88a0', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                      A partir de
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: '#3e3a53', lineHeight: 1 }}>
                      {formatPrice(s.price)}
                    </div>
                  </div>

                  {/* Learn more links */}
                  {s.learnMoreLinkExternal && (
                    <Link
                      to={s.learnMoreLinkExternal} target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                        width: '100%', padding: '9px 16px',
                        borderRadius: 12,
                        border: '1.5px solid rgba(51,103,202,0.2)',
                        background: 'rgba(51,103,202,0.04)',
                        color: '#3367ca',
                        fontSize: 13, fontWeight: 700,
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                    >
                      Saiba mais <ArrowRight color="#3367ca" />
                    </Link>
                  )}
                  {s.learnMoreLink && (
                    <Link
                      to={s.learnMoreLink}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                        width: '100%', padding: '9px 16px',
                        borderRadius: 12,
                        border: '1.5px solid rgba(51,103,202,0.2)',
                        background: 'rgba(51,103,202,0.04)',
                        color: '#3367ca',
                        fontSize: 13, fontWeight: 700,
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                    >
                      Saiba mais <ArrowRight color="#3367ca" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA FINAL */}
      <section style={{ padding: '60px 0 120px' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #3e3a53 0%, #4a4670 100%)',
            borderRadius: 36,
            padding: 'clamp(40px, 5vw, 72px) 40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: -50, right: -50, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(148,176,237,0.2) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
            <div className="tag tag-white fade-up" style={{ marginBottom: 20 }}>✦ Vamos construir juntos?</div>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', color: 'white', marginBottom: 16 }} className="fade-up delay-1">
              Monte seu ecossistema digital<br />sob medida
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', maxWidth: 440, margin: '0 auto 40px', lineHeight: 1.7 }} className="fade-up delay-2">
              Cada negócio é único. Entre em contato e vou montar uma proposta personalizada com as soluções certas para o seu momento.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }} className="fade-up delay-3">
              <Link to="/contato" className="btn btn-ghost">
                Solicitar proposta <ArrowRight color="#3e3a53" />
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: '#25D366', color: 'white', boxShadow: '0 4px 20px rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .sol-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .sol-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}
