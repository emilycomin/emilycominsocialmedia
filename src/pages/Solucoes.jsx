import { useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const WA_NUMBER = '+5551991336280'

const ArrowRight = ({ color = 'white' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const categories = [
  {
    id: 'estrategia',
    tag: '🧠 Gestão e Estratégia',
    tagClass: 'tag-blue',
    hook: 'Cansado de postar sem ver resultado? Comece pelo cérebro da operação.',
    title: 'O Cérebro',
    subtitle: 'Para quem precisa de direção e inteligência de dados.',
    services: [
      {
        icon: '📱',
        colorClass: 'icon-box-blue',
        title: 'Gerenciamento de Redes Sociais',
        badge: 'Full Service',
        price: 1500.00,
        desc: 'A solução completa para quem quer delegar a presença digital. Engloba desde o planejamento estratégico, criação de calendário de conteúdos, postagem e análise mensal de resultados.',
        features: ['Planejamento estratégico mensal', 'Design e edição', 'Agendamento de posts', 'Análise mensal de resultados'],
      },
      {
        icon: '🔍',
        colorClass: 'icon-box-purple',
        title: 'Diagnóstico Estratégico',
        badge: null,
        price: 460.00,
        desc: 'Uma análise profunda do seu posicionamento atual. Analisamos 5 pilares para identificar onde você está deixando dinheiro na mesa e entrego o plano de correção.',
        features: ['Análise de perfil', 'Análise de diferenciais', 'Público-alvo', 'Análise de mercado', 'Plano de ação personalizado'],
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
    ],
  },
  {
    id: 'producao',
    tag: '✍️ Produção e Escrita',
    tagClass: 'tag-amber',
    hook: 'Estratégia definida, mas sem tempo ou equipe para executar? A solução está aqui.',
    title: 'A Execução',
    subtitle: 'Para quem já tem estratégia, mas precisa de braço operacional de alta qualidade.',
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
        icon: '🎨',
        colorClass: 'icon-box-purple',
        title: 'Pack de Identidade Visual',
        badge: 'Templates',
        price: 447.00,
        desc: 'Criação de uma linha visual exclusiva para sua marca no Canva. Templates profissionais e editáveis que garantem que seu feed seja harmônico e autoritário.',
        features: ['Templates exclusivos no Canva', 'Linha visual coerente', 'Feed harmônico e autoritário', 'Editáveis e reutilizáveis'],
      },
      {
        icon: '📊',
        colorClass: 'icon-box-blue',
        title: 'Análise de Performance',
        badge: null,
        price: 499.00,
        desc: 'Saiba o que fazer com as métricas das suas redes sociais. Analisamos métricas além das curtidas para ajustar a rota e garantir que o conteúdo traga retorno sobre o investimento.',
        features: ['Relatórios detalhados mensais', 'Métricas que importam', 'Ajuste de rota estratégica', 'Plano de ação prático'],
      },
    ],
  },
  {
    id: 'web',
    tag: '🌐 Infraestrutura Web',
    tagClass: 'tag-blue',
    hook: 'Seus clientes te procuram no Google. Você está lá para ser encontrado?',
    title: 'A Fundação',
    subtitle: 'Ativos de conversão que funcionam por você 24 horas por dia.',
    services: [
      {
        icon: '🚀',
        colorClass: 'icon-box-blue',
        title: 'Landing Pages de Alta Conversão',
        badge: null,
        price: 357.00,
        desc: 'Criação de páginas de vendas focadas em um único objetivo: converter visitantes em leads ou clientes. Design moderno, copy persuasiva e carregamento rápido.',
        features: ['Design moderno e responsivo (tablet, celular ou computador)', 'Copy persuasiva focada em venda', 'Carregamento rápido', 'Integração com WhatsApp, redes sociais'],
      },
      {
        icon: '📍',
        colorClass: 'icon-box-green',
        title: 'Google Meu Negócio',
        badge: 'Otimização Local',
        price: 197.00,
        desc: 'Colocamos sua empresa no mapa. Configuramos e otimizamos seu perfil no Google para que você seja a primeira opção quando clientes buscarem por seus serviços na sua região.',
        features: ['Configuração e otimização completa', 'SEO local avançado', 'Primeira posição nas buscas regionais', 'Atração de clientes locais'],
      },
      {
        icon: '🏛️',
        colorClass: 'icon-box-purple',
        title: 'Site Institucional',
        badge: null,
        price: 800.00,
        desc: 'Sua sede oficial na internet. Um site completo para apresentar sua história, serviços e equipe, transmitindo o máximo de credibilidade ao mercado.',
        features: ['Design profissional e responsivo', 'Apresentação completa da marca', 'SEO otimizado', 'Máxima credibilidade no mercado'],
      },
    ],
  },
  {
    id: 'automacao',
    tag: '⚙️ Ecossistema e Automação',
    tagClass: 'tag-amber',
    hook: 'Pronto para escalar sem depender do seu tempo? Tecnologia trabalhando por você.',
    title: 'A Escala',
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
        icon: '🔌',
        colorClass: 'icon-box-purple',
        title: 'Desenvolvimento de Integrações Personalizadas',
        badge: null,
        price: 'Sob consulta',
        desc: 'Desenvolvimento de ferramentas digitais exclusivas para resolver problemas operacionais da sua empresa. Criamos desde portais de clientes e dashboards de métricas até plataformas de agendamento ou sistemas internos de gestão.',
        features: ['Solução de problemas operacionais', 'Ferramentas digitais exclusivas', 'Automação de processos internos'],
      },
    ],
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

export default function Solucoes() {
  useScrollReveal()
  const [cart, setCart] = useState([])
  const [panelOpen, setPanelOpen] = useState(false)

  const isInCart = (title) => cart.some(s => s.title === title)

  const toggleCart = (service) => {
    if (isInCart(service.title)) {
      setCart(prev => prev.filter(s => s.title !== service.title))
    } else {
      setCart(prev => [...prev, service])
      setPanelOpen(true)
    }
  }

  const numericTotal = cart.reduce((sum, s) => sum + (typeof s.price === 'number' ? s.price : 0), 0)
  const hasConsulta = cart.some(s => typeof s.price === 'string')
  const waLink = `https://wa.me/${WA_NUMBER}?text=${buildWAMessage(cart)}`

  return (
    <div style={{ paddingTop: '96px' }}>

      {/* ──────────── CART PANEL ──────────── */}
      {/* Backdrop */}
      <div
        onClick={() => setPanelOpen(false)}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(30,27,50,0.4)',
          zIndex: 1000,
          backdropFilter: 'blur(3px)',
          opacity: panelOpen ? 1 : 0,
          pointerEvents: panelOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Drawer */}
      <div style={{
        position: 'fixed',
        top: 0, right: 0, bottom: 0,
        width: 'min(420px, 100vw)',
        background: 'white',
        boxShadow: '-12px 0 60px rgba(62,58,83,0.2)',
        zIndex: 1001,
        transform: panelOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Drawer header */}
        <div style={{
          padding: '28px 24px 20px',
          borderBottom: '1px solid rgba(62,58,83,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #f8f9ff 0%, #fff 100%)',
        }}>
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: '#3e3a53', margin: 0 }}>
              Meu Orçamento
            </h3>
            <p style={{ fontSize: 13, color: '#8a88a0', margin: '4px 0 0' }}>
              {cart.length === 0
                ? 'Nenhum serviço selecionado'
                : `${cart.length} ${cart.length === 1 ? 'serviço' : 'serviços'} selecionado${cart.length === 1 ? '' : 's'}`}
            </p>
          </div>
          <button
            onClick={() => setPanelOpen(false)}
            style={{
              width: 38, height: 38, borderRadius: 12,
              border: '1px solid rgba(62,58,83,0.12)',
              background: 'white', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 14, color: '#8a88a0', fontWeight: 700,
            }}
          >✕</button>
        </div>

        {/* Cart items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#8a88a0' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🛒</div>
              <p style={{ fontSize: 14, lineHeight: 1.7 }}>
                Nenhum serviço adicionado ainda.<br />
                Clique em <strong>"Adicionar ao orçamento"</strong><br />nos serviços que te interessam.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {cart.map(s => (
                <div key={s.title} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '14px 16px',
                  borderRadius: 14,
                  background: 'rgba(220,232,249,0.35)',
                  border: '1px solid rgba(51,103,202,0.12)',
                }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{s.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#3e3a53', lineHeight: 1.3 }}>
                      {s.title}
                    </div>
                    <div style={{ fontSize: 13, color: '#3367ca', fontWeight: 700, marginTop: 3 }}>
                      {formatPrice(s.price)}
                    </div>
                  </div>
                  <button
                    onClick={() => toggleCart(s)}
                    style={{
                      width: 30, height: 30, borderRadius: 8, flexShrink: 0,
                      border: '1px solid rgba(200,60,60,0.2)',
                      background: 'rgba(255,60,60,0.07)',
                      color: '#c04040', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 12, fontWeight: 700,
                    }}
                    title="Remover"
                  >✕</button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer footer */}
        {cart.length > 0 && (
          <div style={{
            padding: '20px 24px 28px',
            borderTop: '1px solid rgba(62,58,83,0.08)',
            background: 'white',
          }}>
            {/* Total box */}
            <div style={{
              display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
              padding: '16px 18px',
              borderRadius: 14, marginBottom: 16,
              background: 'linear-gradient(135deg, #eef4fd 0%, #f5f0fd 100%)',
              border: '1px solid rgba(51,103,202,0.1)',
            }}>
              <div>
                <div style={{ fontSize: 11, color: '#8a88a0', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                  Total estimado
                </div>
                {hasConsulta && (
                  <div style={{ fontSize: 11, color: '#8a88a0', marginTop: 2 }}>
                    * + valores sob consulta
                  </div>
                )}
              </div>
              <div style={{ fontSize: 26, fontWeight: 800, color: '#3e3a53', lineHeight: 1 }}>
                {numericTotal > 0 ? formatPrice(numericTotal) : 'Sob consulta'}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                width: '100%', padding: '15px 20px',
                background: '#25D366', color: 'white',
                borderRadius: 14, fontWeight: 700, fontSize: 15,
                textDecoration: 'none',
                boxShadow: '0 6px 24px rgba(37,211,102,0.35)',
              }}
            >
              <WhatsAppIcon />
              Enviar orçamento pelo WhatsApp
            </a>
            <p style={{ textAlign: 'center', fontSize: 11, color: '#8a88a0', marginTop: 10, lineHeight: 1.5 }}>
              Vou analisar seu pacote e retornar com uma proposta personalizada.
            </p>
          </div>
        )}
      </div>

      {/* ──────────── FLOATING CART BUTTON ──────────── */}
      <button
        onClick={() => setPanelOpen(true)}
        style={{
          position: 'fixed', bottom: 32, right: 32,
          zIndex: 900,
          background: '#3367ca',
          color: 'white',
          border: 'none',
          borderRadius: 20,
          padding: '13px 22px',
          display: 'flex', alignItems: 'center', gap: 10,
          cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(51,103,202,0.45)',
          fontWeight: 700, fontSize: 14,
          opacity: panelOpen ? 0 : 1,
          pointerEvents: panelOpen ? 'none' : 'auto',
          transition: 'opacity 0.2s, transform 0.2s',
          transform: panelOpen ? 'scale(0.9)' : 'scale(1)',
        }}
      >
        <span style={{ fontSize: 18 }}>🛒</span>
        {cart.length > 0 ? (
          <>
            <span>Ver orçamento</span>
            <span style={{
              minWidth: 22, height: 22, borderRadius: '50%',
              background: '#e8a14e', color: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 800, padding: '0 4px',
            }}>{cart.length}</span>
          </>
        ) : (
          <span>Montar pacote</span>
        )}
      </button>

      {/* ──────────── HEADER ──────────── */}
      <section className="page-header" style={{ paddingBottom: '80px' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(148,176,237,0.4) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '0', left: '-5%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,161,78,0.22) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag tag-blue fade-up" style={{ marginBottom: 20 }}>✦ Soluções</div>
          <h1 className="fade-up delay-1">
            A infraestrutura digital<br />que transforma seguidores<br />em ativos de venda.
          </h1>
          <p className="fade-up delay-2" style={{ marginTop: 16, maxWidth: 560 }}>
            Soluções modulares de estratégia, conteúdo e tecnologia para empresas que buscam escala e profissionalismo.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 36 }} className="fade-up delay-3">
            <button
              onClick={() => setPanelOpen(true)}
              className="btn btn-primary"
              style={{ border: 'none', cursor: 'pointer' }}
            >
              Montar meu pacote <ArrowRight />
            </button>
            <Link to="/contato" className="btn btn-outline" style={{ color: '#3367ca', borderColor: '#3367ca' }}>
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────── CATEGORIAS ──────────── */}
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
                <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', marginBottom: 8 }} className="fade-up delay-1">
                  {cat.title}
                </h2>
                <p style={{ fontSize: 16, color: '#8a88a0', maxWidth: 480 }} className="fade-up delay-2">
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
                maxWidth: 320,
                lineHeight: 1.6,
                alignSelf: 'center',
              }}>
                "{cat.hook}"
              </div>
            </div>

            {/* Services grid */}
            <div className="grid-3">
              {cat.services.map((s, i) => {
                const inCart = isInCart(s.title)
                return (
                  <div
                    key={s.title}
                    className={`card fade-up delay-${i + 1}`}
                    style={{
                      padding: '36px 28px', display: 'flex', flexDirection: 'column', gap: 20,
                      outline: inCart ? '2px solid #3367ca' : 'none',
                      transition: 'outline 0.2s',
                    }}
                  >
                    {/* Icon + badge */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                      <div className={`icon-box ${s.colorClass}`} style={{ width: 56, height: 56, borderRadius: 18, fontSize: 24, flexShrink: 0 }}>
                        {s.icon}
                      </div>
                      {s.badge && (
                        <span style={{
                          fontSize: 11, fontWeight: 700,
                          color: '#3367ca', background: '#dce8f9',
                          borderRadius: 8, padding: '4px 10px',
                          whiteSpace: 'nowrap', alignSelf: 'flex-start', marginTop: 4,
                        }}>
                          {s.badge}
                        </span>
                      )}
                    </div>

                    {/* Title + desc */}
                    <div>
                      <h3 style={{ fontSize: 17, marginBottom: 10 }}>{s.title}</h3>
                      <p style={{ fontSize: 14, color: '#8a88a0', lineHeight: 1.65 }}>{s.desc}</p>
                    </div>

                    {/* Features */}
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'auto' }}>
                      {s.features.map(f => (
                        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#2d2b3f' }}>
                          <span style={{ width: 18, height: 18, borderRadius: '50%', background: '#dce8f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#3367ca', flexShrink: 0 }}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Price + CTA */}
                    <div style={{
                      marginTop: 8,
                      paddingTop: 16,
                      borderTop: '1px solid rgba(62,58,83,0.07)',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
                    }}>
                      <div>
                        <div style={{ fontSize: 11, color: '#8a88a0', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>
                          A partir de
                        </div>
                        <div style={{ fontSize: 22, fontWeight: 800, color: '#3e3a53', lineHeight: 1 }}>
                          {formatPrice(s.price)}
                        </div>
                      </div>
                      <button
                        onClick={() => toggleCart(s)}
                        style={{
                          padding: '10px 16px',
                          borderRadius: 12,
                          border: inCart ? '1.5px solid #3367ca' : '1.5px solid rgba(51,103,202,0.3)',
                          background: inCart ? '#3367ca' : 'white',
                          color: inCart ? 'white' : '#3367ca',
                          fontSize: 13, fontWeight: 700, cursor: 'pointer',
                          display: 'flex', alignItems: 'center', gap: 6,
                          whiteSpace: 'nowrap',
                          transition: 'all 0.2s',
                          flexShrink: 0,
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

      {/* ──────────── CTA ──────────── */}
      <section style={{ padding: '60px 0 120px' }}>
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
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,161,78,0.12) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

            <div className="tag tag-white fade-up" style={{ marginBottom: 20 }}>✦ Vamos construir juntos?</div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', color: 'white', marginBottom: 16 }} className="fade-up delay-1">
              Monte seu ecossistema digital<br />sob medida
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', maxWidth: 480, margin: '0 auto 44px', lineHeight: 1.7 }} className="fade-up delay-2">
              Cada negócio é único. Entre em contato e vou montar uma proposta personalizada com as soluções certas para o seu momento.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }} className="fade-up delay-3">
              <Link to="/contato" className="btn btn-ghost">
                Solicitar proposta <ArrowRight color="#3e3a53" />
              </Link>
              <button
                onClick={() => setPanelOpen(true)}
                className="btn"
                style={{ background: '#25D366', color: 'white', boxShadow: '0 4px 20px rgba(37,211,102,0.3)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <WhatsAppIcon />
                Montar meu pacote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
