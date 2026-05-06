import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const WA_LINK = 'https://wa.me/5551991336280'

const products = [
  {
    id: 0,
    tag: '✦ Mini Curso · IA',
    tagColor: '#5b3fbf',
    tagBg: 'rgba(109,79,200,0.1)',
    emoji: '💻',
    iconGradient: 'linear-gradient(135deg, #1a1440 0%, #3b1f7a 100%)',
    badge: 'Novo',
    badgeBg: '#1a1440',
    badgeTextColor: '#e3fc87',
    title: 'Crie Sua Página com IA',
    subtitle: 'Aula gravada · Acesso vitalício',
    description:
      'Mini curso prático que te ensina a criar qualquer tipo de página profissional usando inteligência artificial — mesmo que você nunca tenha aberto um editor de código na vida.',
    price: 'R$ 27',
    priceNote: 'pagamento único · acesso vitalício',
    features: [
      { icon: '🎬', label: 'Aula prática gravada', desc: 'Passo a passo completo, do zero à página no ar. Sem slides, sem enrolação.' },
      { icon: '📋', label: 'Material de apoio', desc: 'Roteiro com perguntas que organizam tudo que você precisa antes de criar.' },
      { icon: '🤖', label: 'Ferramenta gratuita', desc: 'Usa o Lovable — gratuito no plano básico para criar e publicar páginas.' },
      { icon: '♾️', label: 'Acesso vitalício', desc: 'A aula e o material ficam disponíveis pra sempre, sem prazo de expiração.' },
    ],
    highlights: [
      'Zero conhecimento técnico necessário',
      'Página no ar em uma tarde',
      'Funciona no celular e no computador',
      'Ajuste com comandos simples em português',
    ],
    cta: 'Ver página completa',
    to: '/mini-curso',
    isRouterLink: true,
    accentColor: '#3b1f7a',
    accentColorAlt: '#e3fc87',
  },
  {
    id: 1,
    tag: '✦ Automação de Conteúdo',
    tagColor: '#3367ca',
    tagBg: 'rgba(51,103,202,0.1)',
    emoji: '🤖',
    iconGradient: 'linear-gradient(135deg, #3367ca 0%, #94b0ed 100%)',
    badge: 'Novo',
    badgeBg: '#e8a14e',
    title: '4 Skills para o Claude',
    subtitle: 'Acesso Imediato · Plug-and-play',
    description:
      '4 skills prontas para instalar no Claude e transformar o que você já sabe em conteúdo estratégico — sem agência, sem cursos extras, sem complicação técnica.',
    price: 'R$ 47',
    priceNote: 'pagamento único · acesso vitalício',
    features: [
      { icon: '🎣', label: 'Extratora de Ganchos', desc: 'Identifica elementos de viralidade em 10 min com 3 variações prontas' },
      { icon: '🎠', label: 'Carrossel Viral', desc: 'Fórmula baseada em 35 milhões de posts reais, estrutura comprovada' },
      { icon: '💡', label: 'Descobridor de Produtos Digitais', desc: 'Extrai 15 produtos do seu conhecimento existente com precificação' },
      { icon: '🎨', label: 'Designs no Canva', desc: 'Cria designs mantendo 100% da sua identidade visual' },
    ],
    highlights: [
      'Preserva a sua voz e identidade de marca',
      'Funciona para qualquer nicho',
      'Sem conhecimento técnico necessário',
      'Testado, refinado e validado na prática',
    ],
    cta: 'Quero as 4 Skills',
    href: 'https://skilldoclaude.vercel.app/',
    accentColor: '#3367ca',
  },
  {
    id: 2,
    tag: '✦ Planejamento de Conteúdo',
    tagColor: '#b06030',
    tagBg: 'rgba(232,161,78,0.12)',
    emoji: '📖',
    iconGradient: 'linear-gradient(135deg, #e8a14e 0%, #f5c882 100%)',
    badge: 'Mais vendido',
    badgeBg: '#3367ca',
    title: 'Guia de Conteúdos',
    subtitle: 'Do zero ao calendário completo',
    description:
      'O guia completo para você planejar, organizar e criar conteúdos estratégicos para o Instagram — com consistência e sem travar na frente do celular.',
    price: 'R$ 97',
    priceNote: 'clique para ver os detalhes',
    features: [
      { icon: '🗓️', label: 'Calendário Editorial', desc: 'Planeje semanas inteiras de conteúdo de forma prática e visual' },
      { icon: '✍️', label: 'Banco de Ideias', desc: 'Nunca mais fique sem o que postar — ideias para qualquer nicho' },
      { icon: '📊', label: 'Estratégia de Formatos', desc: 'Saiba quando usar reels, carrosséis, stories e posts estáticos' },
      { icon: '🎯', label: 'Checklist de Publicação', desc: 'Roteiro completo para publicar conteúdo que converte' },
    ],
    highlights: [
      'Estrutura passo a passo, sem enrolação',
      'Aplicável imediatamente no seu negócio',
      'Feito para quem não tem tempo a perder',
      'Linguagem simples, resultado profissional',
    ],
    cta: 'Quero o Guia',
    href: 'https://guiadeconteudos.lovable.app/',
    accentColor: '#e8a14e',
  },
]

export default function Infoprodutos() {
  useScrollReveal()

  return (
    <div style={{ paddingTop: '96px' }}>

      {/* Hero */}
      <section className="page-header" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -120, left: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(51,103,202,0.12) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, right: -60, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,161,78,0.14) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="tag tag-blue fade-up" style={{ display: 'inline-flex' }}>✦ Infoprodutos</div>
          <h1 className="fade-up delay-1" style={{ marginTop: 16, marginBottom: 20 }}>
            Ferramentas que trabalham<br />
            <span style={{ color: '#3367ca' }}>enquanto você descansa</span>
          </h1>
          <p className="fade-up delay-2" style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Conhecimento em formato digital para você criar, planejar e crescer no Instagram — com método, não com achismo.
          </p>
          <div className="fade-up delay-3" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['Acesso imediato', 'Aplicação prática', 'Para qualquer nicho'].map(t => (
              <span key={t} style={{ background: 'rgba(51,103,202,0.08)', color: '#3367ca', borderRadius: 100, padding: '6px 16px', fontSize: 13, fontWeight: 500 }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section" style={{ background: 'rgba(248,249,252,0.6)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {products.map((p, i) => (
              <div key={p.id} className="fade-up" style={{ animationDelay: `${i * 0.1}s`, background: 'white', borderRadius: 28, boxShadow: '0 8px 40px rgba(62,58,83,0.10)', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 340px' }}>

                {/* Left: info */}
                <div style={{ padding: '48px' }}>
                  {/* Tag + Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                    <span style={{ background: p.tagBg, color: p.tagColor, borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600 }}>{p.tag}</span>
                    {p.badge && (
                      <span style={{ background: p.badgeBg, color: p.badgeTextColor || 'white', borderRadius: 100, padding: '4px 12px', fontSize: 11, fontWeight: 700, letterSpacing: '0.04em' }}>{p.badge}</span>
                    )}
                  </div>

                  {/* Icon + Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 16, background: p.iconGradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, flexShrink: 0 }}>{p.emoji}</div>
                    <div>
                      <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 800, color: 'var(--dark)', margin: 0 }}>{p.title}</h2>
                      <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: '2px 0 0' }}>{p.subtitle}</p>
                    </div>
                  </div>

                  <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 28 }}>{p.description}</p>

                  {/* Features */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
                    {p.features.map(f => (
                      <div key={f.label} style={{ background: 'rgba(248,249,252,0.8)', borderRadius: 14, padding: '14px 16px', border: '1px solid rgba(62,58,83,0.06)' }}>
                        <div style={{ fontSize: 18, marginBottom: 4 }}>{f.icon}</div>
                        <p style={{ fontWeight: 700, fontSize: 13, color: 'var(--dark)', margin: 0 }}>{f.label}</p>
                        <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '3px 0 0', lineHeight: 1.5 }}>{f.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {p.highlights.map(h => (
                      <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 18, height: 18, borderRadius: '50%', background: `${p.accentColor}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke={p.accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <span style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: price card */}
                <div style={{ background: `linear-gradient(160deg, ${p.accentColor}08 0%, ${p.accentColor}04 100%)`, borderLeft: `1px solid ${p.accentColor}18`, padding: '48px 36px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 20 }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: `linear-gradient(135deg, ${p.accentColor}20, ${p.accentColor}10)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, border: `2px solid ${p.accentColor}20` }}>{p.emoji}</div>

                  <div>
                    <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: '0 0 4px' }}>Investimento</p>
                    <p style={{ fontSize: 40, fontWeight: 900, color: p.accentColor, margin: 0, lineHeight: 1 }}>{p.price}</p>
                    <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '6px 0 0' }}>{p.priceNote}</p>
                  </div>

                  {/* CTA — Link interno ou externo */}
                  {p.isRouterLink ? (
                    <Link
                      to={p.to}
                      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', padding: '14px 24px', background: p.accentColor, color: p.accentColorAlt || 'white', borderRadius: 100, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: `0 8px 24px ${p.accentColor}40`, transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 12px 32px ${p.accentColor}50` }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 8px 24px ${p.accentColor}40` }}
                    >
                      {p.cta}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  ) : (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', padding: '14px 24px', background: p.accentColor, color: 'white', borderRadius: 100, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: `0 8px 24px ${p.accentColor}40`, transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 12px 32px ${p.accentColor}50` }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 8px 24px ${p.accentColor}40` }}
                    >
                      {p.cta}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                  )}

                  <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: 0 }}>
                    {p.isRouterLink ? 'Ver todos os detalhes do curso' : 'Você será redirecionada para a página do produto'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, #3367ca 0%, #5585d8 100%)', borderRadius: 28, padding: 'clamp(40px, 6vw, 72px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
            <div className="fade-up" style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Prefere uma solução personalizada?</p>
              <h2 style={{ color: 'white', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, marginBottom: 16 }}>Vamos trabalhar juntas</h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.7 }}>
                Se você quer gestão completa do seu Instagram com estratégia e consistência, conheça minhas soluções.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/solucoes" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', background: 'white', color: '#3367ca', borderRadius: 100, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
                >Ver Soluções</Link>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', background: 'rgba(255,255,255,0.15)', color: 'white', borderRadius: 100, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
                >Falar no WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .infoprod-card { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .feat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
