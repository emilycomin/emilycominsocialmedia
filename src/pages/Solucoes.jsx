import { useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const WA_NUMBER = '+5551991336280'

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
        badge: 'Novidade',
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
        icon: '⚡',
        colorClass: 'icon-box-amber',
        title: 'Sprint de Conteúdo',
        badge: null,
        price: 795.00,
        desc: 'Produção de roteiros, legendas e copies focadas em conversão. Entregamos o volume de conteúdo necessário para o seu mês com textos que vendem e conectam.',
        features: ['Diagnóstico Estratégico', '16 conteúdos', 'Copies e roteiros de reels', 'Legendas'],
      },
      {
        icon: '🎯',
        colorClass: 'icon-box-amber',
        title: 'Consultoria de Posicionamento',
        badge: null,
        price: 800.00,
        desc: '2 Encontros estratégicos para definir sua voz no digital. Ideal para profissionais que desejam gerir as próprias redes, mas precisam de um norte claro e orientações de especialistas.',
        features: ['Diagnóstico estratégico', 'Material de apoio', 'Encontros ao vivo com especialista', 'Suporte pós-consultoria'],
      },
      {
        icon: '📱',
        colorClass: 'icon-box-blue',
        title: 'Gerenciamento de Redes Sociais',
        badge: 'Full Service',
        price: 1500.00,
        desc: 'A solução completa para quem quer delegar a presença digital. Engloba desde o planejamento estratégico, criação de calendário de conteúdos, postagem e análise mensal de resultados.',
        features: ['Planejamento estratégico mensal', 'Design e edição', 'Agendamento de posts', 'Análise mensal de resultados'],
      },
    ]
  },
  {
    id: 'automacao',
    tag: '⚙️ Ecossistema com IA e Automação',
    tagClass: 'tag-amber',
    hook: 'Pronto para escalar sem depender do seu tempo? Tecnologia trabalhando por você.',
    title: 'Automação',
    subtitle: 'Tecnologia para ganhar tempo, produtividade e não perder nenhum lead.',
    services: [
      {
        icon: '🤖',
        colorClass: 'icon-box-blue',
        title: 'Automações de Engajamento e Direct',
        badge: null,
        price: 397.00,
        desc: 'Configuração de robôs inteligentes que respondem comentários e enviam links automaticamente por Direct, transformando interesse imediato em leads qualificados.',
        features: ['Resposta automática de comentários', 'Envio de links por Direct', 'Captação de leads 24/7', 'Integração com Instagram'],
      },
      {
        icon: '🔗',
        colorClass: 'icon-box-amber',
        title: 'Reestruturação de Link na Bio',
        badge: null,
        price: 197.00,
        desc: 'Organizamos sua porta de entrada. Criamos um hub de links estratégico que facilita a jornada do cliente até o seu WhatsApp ou página de vendas.',
        features: ['Hub de links estratégico', 'Jornada do cliente otimizada', 'Conexão direta com WhatsApp', 'Design alinhado à marca'],
      },
      {
       icon: '🤖',
       colorClass: 'icon-box-purple',
       title: 'Consultoria de Automação de Processos',
       badge: null,
       price: 'R$600,00',
       desc: 'Identificamos onde seu negócio perde tempo e entregamos um plano de automação customizado com as ferramentas certas para você. Do diagnóstico ao plano de ação, você sai sabendo exatamente o que automatizar e como.',
       features: ['Diagnóstico completo de processos', 'Plano de automação documentado', 'Ferramentas recomendadas por prioridade'],
     },
      {
        icon: '🔌',
        colorClass: 'icon-box-purple',
        title: 'Desenvolvimento de Soluções Personalizadas',
        badge: null,
        price: 'Sob consulta',
        desc: 'Desenvolvimento de ferramentas digitais exclusivas para resolver problemas operacionais da sua empresa. Criamos desde portais de clientes e dashboards de métricas até plataformas de agendamento ou sistemas internos de gestão.',
        features: ['Solução de problemas operacionais', 'Ferramentas digitais exclusivas', 'Automação de processos internos'],
      },
    ]
  },
]

const sectionBg = ['transparent', 'rgba(248,249,252,0.8)', 'transparent', 'rgba(248,249,252,0.8)']

function formatPrice(price) {
  if (typeof price === 'string') return price
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function buildWAMessage(cartItems) {
  const lines = cartItems.map(s => `• ${s.title} — ${formatPrice(s.price)}`).join('\n')
  const numericTotal = cartItems.reduce((sum, s) => sum + (typeof s.price === 'number' ? s.price : 0), 0)
  const hasConsulta = cartItems.some(s => typeof s.price === 'string')
  const totalStr = numericTotal > 0
    ? `\n\nTotal estimado: ${formatPrice(numericTotal)}${hasConsulta ? ' + valores sob consulta' : ''}`
    : ''
  return encodeURIComponent(
    `Olá! Montei meu pacote no site e tenho interesse nos seguintes serviços:\n\n${lines}${totalStr}\n\nGostaria de mais informações!`
  )
}

const SIDEBAR_W = 320

export default function Solucoes() {
  useScrollReveal()
  const [cart, setCart] = useState([])

  const isInCart = (title) => cart.some(s => s.title === title)

  const toggleCart = (service) => {
    if (isInCart(service.title)) {
      setCart(prev => prev.filter(s => s.title !== service.title))
    } else {
      setCart(prev => [...prev, service])
    }
  }

  const numericTotal = cart.reduce((sum, s) => sum + (typeof s.price === 'number' ? s.price : 0), 0)
  const hasConsulta = cart.some(s => typeof s.price === 'string')
  const waLink = `https://wa.me/${WA_NUMBER}?text=${buildWAMessage(cart)}`

  return (
    <div style={{ paddingTop: '96px', display: 'flex', alignItems: 'flex-start' }}>

      {/* ──────────── MAIN CONTENT ──────────── */}
      <div style={{ flex: 1, minWidth: 0 }}>

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
            <p className="fade-up delay-3" style={{ marginTop: 20, fontSize: 14, color: '#3367ca', fontWeight: 600 }}>
              👉 Adicione os serviços de interesse e envie seu orçamento direto pelo WhatsApp.
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
              {/* Section header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
                <div>
                  <div className={`tag ${cat.tagClass} fade-up`} style={{ marginBottom: 14 }}>{cat.tag}</div>
                  <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', marginBottom: 8 }} className="fade-up delay-1">
                    {cat.title}
                  </h2>
                  <p style={{ fontSize: 15, color: '#8a88a0', maxWidth: 420 }} className="fade-up delay-2">
                    {cat.subtitle}
                  </p>
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

              {/* Services grid — 2 cols to leave room for sidebar */}
              <div className="sol-grid">
                {cat.services.map((s, i) => {
                  const inCart = isInCart(s.title)
                  return (
                    <div
                      key={s.title}
                      className={`card fade-up delay-${i + 1}`}
                      style={{
                        padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16,
                        outline: inCart ? '2px solid #3367ca' : '2px solid transparent',
                        transition: 'outline 0.2s',
                      }}
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

                      {/* Price + CTA */}
                      <div style={{
                        marginTop: 8, paddingTop: 14,
                        borderTop: '1px solid rgba(62,58,83,0.07)',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10,
                      }}>
                        <div>
                          <div style={{ fontSize: 10, color: '#8a88a0', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>
                            A partir de
                          </div>
                          <div style={{ fontSize: 20, fontWeight: 800, color: '#3e3a53', lineHeight: 1 }}>
                            {formatPrice(s.price)}
                          </div>
                        </div>
                        <button
                          onClick={() => toggleCart(s)}
                          style={{
                            padding: '9px 16px',
                            borderRadius: 12,
                            border: inCart ? '1.5px solid #3367ca' : '1.5px solid rgba(51,103,202,0.3)',
                            background: inCart ? '#3367ca' : 'white',
                            color: inCart ? 'white' : '#3367ca',
                            fontSize: 13, fontWeight: 700, cursor: 'pointer',
                            display: 'flex', alignItems: 'center', gap: 6,
                            whiteSpace: 'nowrap', flexShrink: 0,
                            transition: 'all 0.2s',
                          }}
                        >
                          {inCart ? '✓ Adicionado' : '+ Adicionar'}
                        </button>
                      </div>
                    </div>
                  )
                })}
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
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ background: '#25D366', color: 'white', boxShadow: '0 4px 20px rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <WhatsAppIcon />
                  Enviar orçamento
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ──────────── CART SIDEBAR ──────────── */}
      <aside className="cart-sidebar">
        {/* Header */}
        <div style={{
          padding: '22px 20px 16px',
          borderBottom: '1px solid rgba(62,58,83,0.08)',
          background: 'linear-gradient(135deg, #f5f7ff 0%, #fff 100%)',
          borderRadius: '20px 20px 0 0',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <span style={{ fontSize: 18 }}>🛒</span>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: '#3e3a53', margin: 0 }}>Meu Orçamento</h3>
          </div>
          <p style={{ fontSize: 12, color: '#8a88a0', margin: 0 }}>
            {cart.length === 0
              ? 'Nenhum serviço selecionado'
              : `${cart.length} ${cart.length === 1 ? 'serviço' : 'serviços'} selecionado${cart.length === 1 ? '' : 's'}`}
          </p>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '36px 12px', color: '#8a88a0' }}>
              <div style={{ fontSize: 40, marginBottom: 14 }}>📋</div>
              <p style={{ fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                Adicione serviços clicando em<br />
                <strong style={{ color: '#3367ca' }}>+ Adicionar</strong> nos cards ao lado.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {cart.map(s => (
                <div key={s.title} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '11px 13px',
                  borderRadius: 12,
                  background: 'rgba(220,232,249,0.35)',
                  border: '1px solid rgba(51,103,202,0.12)',
                }}>
                  <span style={{ fontSize: 18, flexShrink: 0 }}>{s.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#3e3a53', lineHeight: 1.3 }}>
                      {s.title}
                    </div>
                    <div style={{ fontSize: 12, color: '#3367ca', fontWeight: 700, marginTop: 2 }}>
                      {formatPrice(s.price)}
                    </div>
                  </div>
                  <button
                    onClick={() => toggleCart(s)}
                    style={{
                      width: 26, height: 26, borderRadius: 8, flexShrink: 0,
                      border: '1px solid rgba(200,60,60,0.2)',
                      background: 'rgba(255,60,60,0.07)',
                      color: '#c04040', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 700, lineHeight: 1,
                    }}
                    title="Remover"
                  >✕</button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: '16px',
          borderTop: '1px solid rgba(62,58,83,0.08)',
          background: 'white',
          borderRadius: '0 0 20px 20px',
        }}>
          {/* Total */}
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            padding: '13px 14px',
            borderRadius: 12, marginBottom: 12,
            background: 'linear-gradient(135deg, #eef4fd 0%, #f5f0fd 100%)',
            border: '1px solid rgba(51,103,202,0.1)',
          }}>
            <div>
              <div style={{ fontSize: 10, color: '#8a88a0', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                Total estimado
              </div>
              {hasConsulta && (
                <div style={{ fontSize: 10, color: '#8a88a0', marginTop: 1 }}>
                  * + valores sob consulta
                </div>
              )}
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#3e3a53', lineHeight: 1 }}>
              {cart.length === 0
                ? '—'
                : numericTotal > 0
                  ? formatPrice(numericTotal)
                  : 'Sob consulta'}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={cart.length > 0 ? waLink : undefined}
            target="_blank"
            rel="noopener noreferrer"
            onClick={cart.length === 0 ? e => e.preventDefault() : undefined}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              width: '100%', padding: '13px 16px',
              background: cart.length > 0 ? '#25D366' : '#c8d0dc',
              color: 'white',
              borderRadius: 12, fontWeight: 700, fontSize: 13,
              textDecoration: 'none',
              boxShadow: cart.length > 0 ? '0 4px 20px rgba(37,211,102,0.3)' : 'none',
              cursor: cart.length > 0 ? 'pointer' : 'not-allowed',
              transition: 'background 0.2s',
            }}
          >
            <WhatsAppIcon size={16} />
            {cart.length > 0 ? 'Enviar pelo WhatsApp' : 'Selecione um serviço'}
          </a>
          {cart.length > 0 && (
            <p style={{ textAlign: 'center', fontSize: 10, color: '#8a88a0', marginTop: 8, lineHeight: 1.5 }}>
              Vou retornar com uma proposta personalizada.
            </p>
          )}
        </div>
      </aside>

      <style>{`
        .cart-sidebar {
          width: ${SIDEBAR_W}px;
          flex-shrink: 0;
          position: sticky;
          top: 112px;
          max-height: calc(100vh - 128px);
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: 20px;
          border: 1px solid rgba(62,58,83,0.1);
          box-shadow: 0 8px 40px rgba(62,58,83,0.1);
          margin: 24px 24px 24px 0;
          overflow: hidden;
        }
        .sol-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 1100px) {
          .sol-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .cart-sidebar {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
