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
        price:460.00,
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
        price:397.00, 
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
        desc: 'Desenvolvimento de ferramentas digitais exclusivas para resolver probelmas operacionais da sua empresa. Criamos desde portais de clientes e dashboards de métricas até plataformas de agendamento ou sistemas internos de gestão.',
        features: ['Solução de problemas operacionais', 'Ferramentas digitais exclusivas', 'Automação de processos internos'],
      },
    ],
  },
]

const sectionBg = ['transparent', 'rgba(248,249,252,0.8)', 'transparent', 'rgba(248,249,252,0.8)']

export default function Solucoes() {
  useScrollReveal()

  return (
    <div style={{ paddingTop: '96px' }}>

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
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Montar meu pacote <ArrowRight />
            </a>
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
              {cat.services.map((s, i) => (
                <div
                  key={s.title}
                  className={`card fade-up delay-${i + 1}`}
                  style={{ padding: '36px 28px', display: 'flex', flexDirection: 'column', gap: 20 }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                    <div className={`icon-box ${s.colorClass}`} style={{ width: 56, height: 56, borderRadius: 18, fontSize: 24, flexShrink: 0 }}>
                      {s.icon}
                    </div>
                    {s.badge && (
                      <span style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: '#3367ca',
                        background: '#dce8f9',
                        borderRadius: 8,
                        padding: '4px 10px',
                        whiteSpace: 'nowrap',
                        alignSelf: 'flex-start',
                        marginTop: 4,
                      }}>
                        {s.badge}
                      </span>
                    )}
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
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ marginTop: 8, fontSize: 13, padding: '10px 18px', color: '#3367ca', borderColor: 'rgba(51,103,202,0.35)', justifyContent: 'center' }}
                  >
                    Quero este serviço <ArrowRight color="#3367ca" />
                  </a>
                </div>
              ))}
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
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#25D366', color: 'white', boxShadow: '0 4px 20px rgba(37,211,102,0.3)' }}>
                Montar meu pacote no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
