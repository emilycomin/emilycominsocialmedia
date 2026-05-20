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

const CheckIcon = ({ positive = true }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="8" cy="8" r="8" fill={positive ? '#dce8f9' : 'rgba(62,58,83,0.08)'} />
    {positive
      ? <path d="M5 8l2 2 4-4" stroke="#3367ca" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      : <path d="M5.5 10.5l5-5M10.5 10.5l-5-5" stroke="#8a88a0" strokeWidth="1.5" strokeLinecap="round"/>
    }
  </svg>
)

const forYes = [
  'Tu produz conteúdo regularmente, mas sente que está postando "no escuro" ou está sobrecarregada',
  'Tu já tentou seguir métodos genéricos e não funcionaram pro teu negócio específico',
  'Tu quer alguém pensando junto contigo, não só executando posts',
  'Tu prefere clareza e direção a fórmulas mágicas',
]

const forNo = [
  'Tu está começando agora e ainda não tem clareza do que vende',
  'Tu busca profissionais que cuide de tudo (gravação, edição, publicação)',
  'Tu espera resultado imediato no primeiro mês',
  'Tu prefere executar sem participar de decisões estratégicas',
]

const howItWorks = [
  {
    icon: '🔍',
    title: 'Diagnóstico de Entrada',
    subtitle: 'No primeiro mês',
    desc: 'Antes de qualquer entrega de calendário, eu preciso entender. O primeiro mês é dedicado a briefing estruturado, análise do teu perfil atual e leitura das tuas métricas dos últimos 30 dias. Daí sai um documento de direção que orienta tudo que vem depois.',
  },
  {
    icon: '📊',
    title: 'Análise mensal de métricas com plano de ação',
    subtitle: 'Todo mês',
    desc: 'Uma leitura nas métricas com decisão direcionada. Todo mês eu olho teus números (alcance, salvamentos, compartilhamentos, conversão de DMs) e identifico o que funcionou, o que falhou e o que precisa ajustar. Tu recebe um documento com diagnóstico claro e os próximos passos.',
  },
  {
    icon: '📅',
    title: 'Calendário mensal estratégico',
    subtitle: 'Todo mês',
    desc: 'O calendário com conteúdos alinhados aos teus objetivos e o que as métricas mostram. Cada conteúdo do mês vem com gancho (título) definido, formato indicado, ângulo estratégico, CTA específico e objetivo dentro do funil. A distribuição é por objetivo de comunicação, não por formato.',
  },
  {
    icon: '🖥️',
    title: 'Uma página de vendas por mês',
    subtitle: 'Todo mês',
    desc: 'Toda página é construída com base no diagnóstico do mês com estrutura de venda pensada pro teu momento. A página é postada e hospedada por mim — pode ter um domínio gratuito ou, se você tiver o seu, é só me passar. (Compras de domínio têm valores à parte.)',
  },
  {
    icon: '🎙️',
    title: 'Reunião estratégica mensal',
    subtitle: '1h por mês',
    desc: 'Uma hora de videochamada por mês pra revisar dados, discutir direção e alinhar os próximos 30 dias. É onde a leitura de métricas vira decisão de conteúdo.',
  },
  {
    icon: '💬',
    title: 'Acompanhamento por WhatsApp',
    subtitle: 'Seg–Sex, 10h–18h',
    desc: 'Para ajustes de direção, dúvidas estratégicas e validações pontuais ao longo do mês.',
  },
]

export default function AssessoriaComunicacao() {
  useScrollReveal()
  const waText = encodeURIComponent('Olá! Tenho interesse na Assessoria de Comunicação. Gostaria de mais informações!')
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waText}`

  return (
    <div style={{ paddingTop: '96px' }}>

      {/* ── HERO ── */}
      <section className="page-header" style={{ paddingBottom: '80px' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(148,176,237,0.4) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '0', left: '-5%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(148,130,237,0.2) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, flexWrap: 'wrap' }} className="fade-up">
            <Link to="/solucoes" style={{ fontSize: 13, color: '#8a88a0', textDecoration: 'none' }}>Soluções</Link>
            <span style={{ fontSize: 13, color: '#8a88a0' }}>›</span>
            <span style={{ fontSize: 13, color: '#3367ca', fontWeight: 600 }}>Assessoria de Comunicação</span>
          </div>

          <h1 className="fade-up delay-2" style={{ maxWidth: 680, textAlign: 'center', margin: '0 auto' }}>
            Assessoria de<br />Comunicação
          </h1>
          <p className="fade-up delay-3" style={{ marginTop: 20, maxWidth: 540, fontSize: 17, lineHeight: 1.8, color: '#5a5875' }}>
            Para empreendedoras que já faturam e querem parar de crescer no improviso. Direção estratégica recorrente, com análise de métricas, calendário de conteúdo e uma página de vendas por mês.
          </p>

          <div className="fade-up delay-3" style={{ marginTop: 32, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#3367ca', color: 'white', display: 'flex', alignItems: 'center', gap: 8 }}>
              Quero a minha assessoria <ArrowRight />
            </a>
            <a href="#como-funciona" className="btn btn-ghost">
              Como funciona <ArrowRight color="#3e3a53" />
            </a>
          </div>
        </div>
      </section>

      {/* ── PARA QUEM É ── */}
      <section className="section" style={{ background: 'rgba(248,249,252,0.8)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="tag tag-purple fade-up" style={{ marginBottom: 20 }}>Para quem é</div>
            <h2 className="fade-up delay-1" style={{ fontSize: 'clamp(22px, 3vw, 34px)', maxWidth: 620, margin: '0 auto' }}>
              A Assessoria foi construída para quem já passou da fase de "começar"
            </h2>
            <p className="fade-up delay-2" style={{ fontSize: 15, color: '#8a88a0', maxWidth: 560, margin: '16px auto 0', lineHeight: 1.75 }}>
              Tu já fatura, já produz conteúdo, já testou alguns caminhos sozinha — porém agora precisa de alguém que pense junto, leia tuas métricas e ajuste a rota com base em dados, não em achismo.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, maxWidth: 860, margin: '0 auto' }}>

            {/* É pra ti */}
            <div className="card fade-up delay-1" style={{ padding: '32px 28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: '#dce8f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>✓</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#3e3a53', margin: 0 }}>Esse serviço é pra ti se:</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {forYes.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <CheckIcon positive={true} />
                    <span style={{ fontSize: 14, color: '#3e3a53', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Não é pra ti */}
            <div className="card fade-up delay-2" style={{ padding: '32px 28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(62,58,83,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#8a88a0' }}>✕</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#3e3a53', margin: 0 }}>Esse serviço NÃO é pra ti se:</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {forNo.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <CheckIcon positive={false} />
                    <span style={{ fontSize: 14, color: '#8a88a0', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section id="como-funciona" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="tag tag-blue fade-up" style={{ marginBottom: 20 }}>Como funciona</div>
            <h2 className="fade-up delay-1" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>
              O que tu recebe todo mês
            </h2>
            <p className="fade-up delay-2" style={{ fontSize: 15, color: '#8a88a0', maxWidth: 480, margin: '12px auto 0', lineHeight: 1.7 }}>
              Seis entregas recorrentes para manter a comunicação com direção e consistência.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
            {howItWorks.map((item, i) => (
              <div key={item.title} className={`card fade-up delay-${(i % 3) + 1}`} style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                  <div style={{ fontSize: 28 }}>{item.icon}</div>
                  <span style={{
                    fontSize: 11, fontWeight: 700,
                    color: '#3367ca', background: '#dce8f9',
                    borderRadius: 8, padding: '3px 10px',
                    whiteSpace: 'nowrap', alignSelf: 'flex-start',
                  }}>
                    {item.subtitle}
                  </span>
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: '#3e3a53', margin: 0 }}>{item.title}</h4>
                <p style={{ fontSize: 13, color: '#5a5875', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE O MÉTODO ── */}
      <section className="section" style={{ background: 'rgba(248,249,252,0.8)' }}>
        <div className="container">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div className="tag tag-amber fade-up" style={{ marginBottom: 20 }}>Sobre o método</div>
            <h2 className="fade-up delay-1" style={{ fontSize: 'clamp(20px, 2.8vw, 30px)', marginBottom: 24 }}>
              Não prometo milagre.<br />Entrego método.
            </h2>
            <p className="fade-up delay-2" style={{ fontSize: 16, color: '#5a5875', lineHeight: 1.85, marginBottom: 24 }}>
              A Assessoria de Comunicação não promete crescimento explosivo, viralizar, faturamento garantido ou X mil seguidores. O que ela entrega é direção estratégica baseada em dados, com clareza sobre o que está funcionando e o que precisa ajustar.
            </p>
            <div className="fade-up delay-3" style={{
              padding: '24px 32px',
              background: 'linear-gradient(135deg, rgba(51,103,202,0.07), rgba(107,78,230,0.07))',
              border: '1px solid rgba(51,103,202,0.15)',
              borderRadius: 16,
            }}>
              <p style={{ fontSize: 16, color: '#3e3a53', lineHeight: 1.8, margin: 0, fontWeight: 500, fontStyle: 'italic' }}>
                "Crescer com consistência exige tempo, método e alguém olhando junto. É isso que eu faço."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
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
            <div style={{ position: 'absolute', bottom: -30, left: -40, width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle, rgba(107,78,230,0.15) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

            <div className="tag tag-white fade-up" style={{ marginBottom: 20 }}>✦ Investimento</div>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 38px)', color: 'white', marginBottom: 12, maxWidth: 540, margin: '0 auto 12px' }} className="fade-up delay-1">
              Direção estratégica todo mês, para crescer com consistência
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', maxWidth: 420, margin: '0 auto 32px', lineHeight: 1.8 }} className="fade-up delay-2">
              Contrato mínimo de 3 meses.
            </p>

            <div className="fade-up delay-2" style={{ marginBottom: 36 }}>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 6 }}>A partir de</span>
              <span style={{ fontSize: 52, fontWeight: 800, color: 'white', lineHeight: 1 }}>R$ 667</span>
              <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>/mês</span>
            </div>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }} className="fade-up delay-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: '#25D366', color: 'white', boxShadow: '0 4px 20px rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <WhatsAppIcon />
                Quero a minha assessoria
              </a>
            </div>

            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 24 }} className="fade-up delay-3">
              Contrato mínimo de 3 meses · Análise de métricas · Calendário estratégico · Página de vendas mensal
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
