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

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="7" fill="#dce8f9"/>
    <path d="M4 7l2 2 4-4" stroke="#3367ca" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const pillars = [
  {
    number: '01',
    icon: '🪟',
    title: 'Auditoria de Perfil',
    desc: 'O que o negócio comunica versus o que deveria comunicar. Clareza da oferta, consistência visual, qualidade da primeira impressão e coerência entre o que é prometido na vitrine e o que é entregue no processo de venda.',
    insight: 'Um perfil pode ter estética impecável e ainda assim não converter — porque a mensagem certa não está no lugar certo, para a pessoa certa.',
  },
  {
    number: '02',
    icon: '💎',
    title: 'Diferenciais Competitivos',
    desc: 'O que torna esse negócio difícil de substituir. Mapeamos método de trabalho, posicionamento de preço, experiência do cliente e especialização — a partir do que o mercado enxerga, não da autopercepção da dona do negócio.',
    insight: 'Negócios que não sabem articular seus diferenciais competem por preço. Esse pilar resolve isso.',
  },
  {
    number: '03',
    icon: '🗣️',
    title: 'Tom de Voz',
    desc: 'Se a comunicação soa como a empresa ou como qualquer outra. Auditamos como o negócio se comunica: nos textos, nas respostas, nos vídeos, nas propostas. Tom de voz não é estilo pessoal — é consistência estratégica.',
    insight: 'Uma empresa que fala de um jeito no feed e de outro no WhatsApp cria atrito invisível. Atrito invisível custa venda.',
  },
  {
    number: '04',
    icon: '🎯',
    title: 'Estudo de Público',
    desc: 'Se o negócio está falando com quem realmente compra. Construímos o retrato comportamental da cliente ideal: o que ela valoriza, por que ela escolhe pagar mais, onde ela está no processo de decisão quando encontra o negócio.',
    insight: 'A maioria das empresas cria conteúdo para um público que imagina ter. O diagnóstico corrige essa distância.',
  },
  {
    number: '05',
    icon: '📊',
    title: 'Análise de Mercado e Tendências',
    desc: 'Onde o negócio está posicionado e onde deveria estar. Avaliamos o cenário competitivo, o padrão de comunicação do setor, tendências relevantes para o nicho e onde existem lacunas que o negócio ainda não está ocupando.',
    insight: 'Isso vale tanto para quem quer entrar no mercado com inteligência quanto para quem quer se reposicionar dentro dele.',
  },
]

const deliverables = [
  {
    icon: '📋',
    title: 'Documento de Diagnóstico',
    desc: 'Análise completa dos cinco pilares estratégicos do negócio, documentada e organizada.',
  },
  {
    icon: '🗺️',
    title: 'Plano de Ação Estratégico',
    desc: 'Frentes prioritárias, soluções recomendadas e sequenciamento de execução para 30, 60 e 90 dias.',
  },
]

const upsells = [
  {
    icon: '📱',
    title: 'Gestão de Redes Sociais',
    desc: 'Implementação completa da estratégia de conteúdo e posicionamento definidos no diagnóstico.',
  },
  {
    icon: '⚡',
    title: 'Sprint de Conteúdo',
    desc: 'Produção acelerada de conteúdo alinhado ao posicionamento mapeado.',
  },
  {
    icon: '⚙️',
    title: 'Automações e Sistemas',
    desc: 'Implementação das automações e ferramentas digitais identificadas no plano de ação.',
  },
  {
    icon: '🔌',
    title: 'Desenvolvimento de Soluções Personalizadas',
    desc: 'Criação de portais, dashboards ou sistemas internos para resolver os gargalos operacionais encontrados.',
  },
]

export default function DiagnosticoEstrategico() {
  useScrollReveal()
  const waText = encodeURIComponent('Olá! Tenho interesse no Diagnóstico Estratégico + Plano de Ação. Gostaria de mais informações!')
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
            <span style={{ fontSize: 13, color: '#3367ca', fontWeight: 600 }}>Diagnóstico Estratégico</span>
          </div>

          <h1 className="fade-up delay-1" style={{ maxWidth: 700, textAlign: 'center', margin: '0 auto' }}>
            Diagnóstico Estratégico<br />+ Plano de Ação
          </h1>
          <p className="fade-up delay-2" style={{ marginTop: 16, maxWidth: 560, fontSize: 17, lineHeight: 1.75, color: '#5a5875' }}>
            O Raio-X do seu negócio. Um processo em duas etapas: entendemos onde está, o que impede de alcançar os objetivos e analisamos o mercado e o nicho. Depois, traçamos o caminho para onde precisa chegar — com base em dados, pesquisas e ações aplicáveis.
          </p>

          <div className="fade-up delay-3" style={{ marginTop: 36, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#3367ca', color: 'white', display: 'flex', alignItems: 'center', gap: 8 }}>
              Quero começar <ArrowRight />
            </a>
            <a href="#como-funciona" className="btn btn-ghost">
              Como funciona <ArrowRight color="#3e3a53" />
            </a>
          </div>
        </div>
      </section>

      {/* ── O PROBLEMA ── */}
      <section className="section" style={{ background: 'rgba(248,249,252,0.8)' }}>
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <div className="tag tag-blue fade-up" style={{ marginBottom: 20 }}>O problema</div>
            <h2 className="fade-up delay-1" style={{ fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 24 }}>
              A maioria das empresas investe em marketing antes de entender o que, de fato, está impedindo o crescimento.
            </h2>
            <p className="fade-up delay-2" style={{ fontSize: 16, color: '#5a5875', lineHeight: 1.8, marginBottom: 16 }}>
              Contratam gestão de redes sociais, criam um site, apostam em tráfego pago — e continuam no mesmo lugar. O problema é que com a ausência de diagnóstico antes da execução você pode estar gastando energia mas sem saber onde quer chegar.
            </p>
            <p className="fade-up delay-3" style={{ fontSize: 16, color: '#5a5875', lineHeight: 1.8 }}>
              Prescrição sem diagnóstico é negligência. Esse serviço existe para garantir que cada decisão tomada a partir daqui seja baseada em dados reais do negócio — não em suposição, tendência ou achismo.
            </p>
          </div>
        </div>
      </section>

      {/* ── PARA QUEM É ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, alignItems: 'start' }}>
            <div className="fade-up">
              <div className="tag tag-purple" style={{ marginBottom: 20 }}>Para quem é</div>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 20 }}>
                Para a empresária que quer tomar decisões com base em dados e estratégia
              </h2>
              <p style={{ fontSize: 15, color: '#5a5875', lineHeight: 1.8 }}>
                Não em intuição ou tendência do momento. Seja porque está lançando um negócio e quer construir sobre uma base sólida desde o início. Seja porque tem uma operação funcionando, mas algo entre a vitrine e a venda não fecha. O ponto em comum: ela sabe que crescimento sem direção é desperdício de tempo e dinheiro.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="card fade-up delay-1" style={{ padding: '24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div className="icon-box icon-box-blue" style={{ width: 48, height: 48, borderRadius: 14, fontSize: 20, flexShrink: 0 }}>🌱</div>
                <div>
                  <h3 style={{ fontSize: 15, marginBottom: 6 }}>Negócios novos que querem começar com estrutura</h3>
                  <p style={{ fontSize: 13, color: '#8a88a0', lineHeight: 1.65, margin: 0 }}>Quer lançar com estrutura e direção desde o início, construindo sobre uma base sólida.</p>
                </div>
              </div>
              <div className="card fade-up delay-2" style={{ padding: '24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div className="icon-box icon-box-amber" style={{ width: 48, height: 48, borderRadius: 14, fontSize: 20, flexShrink: 0 }}>📈</div>
                <div>
                  <h3 style={{ fontSize: 15, marginBottom: 6 }}>Empresas que já faturam mas sentiram o crescimento travar</h3>
                  <p style={{ fontSize: 13, color: '#8a88a0', lineHeight: 1.65, margin: 0 }}>Tem uma operação funcionando, mas algo entre a vitrine e a venda não fecha.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section id="como-funciona" className="section" style={{ background: 'rgba(248,249,252,0.8)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="tag tag-blue fade-up" style={{ marginBottom: 20 }}>Como funciona</div>
            <h2 className="fade-up delay-1" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>
              Duas etapas sequenciais
            </h2>
            <p className="fade-up delay-2" style={{ fontSize: 15, color: '#8a88a0', maxWidth: 480, margin: '12px auto 0', lineHeight: 1.7 }}>
              A segunda só faz sentido porque a primeira existe.
            </p>
          </div>

          {/* Etapa 1 */}
          <div style={{ marginBottom: 64 }}>
            <div className="fade-up" style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: 'linear-gradient(135deg, #3367ca, #6b4ee6)',
                color: 'white', fontWeight: 800, fontSize: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>1</div>
              <div>
                <h3 style={{ fontSize: 20, marginBottom: 4 }}>Diagnóstico — entender onde o negócio está</h3>
                <p style={{ fontSize: 14, color: '#8a88a0', margin: 0 }}>Análise técnica em cinco pilares. Cada um responde a uma pergunta específica sobre a empresa.</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
              {pillars.map((p, i) => (
                <div key={p.number} className={`card fade-up delay-${i + 1}`} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: '#3367ca', background: '#dce8f9', borderRadius: 6, padding: '3px 8px', letterSpacing: '0.04em' }}>
                      {p.number}
                    </span>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                  </div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: '#3e3a53', margin: 0 }}>{p.title}</h4>
                  <p style={{ fontSize: 13, color: '#5a5875', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                  <div style={{
                    marginTop: 4, padding: '10px 14px',
                    background: 'rgba(51,103,202,0.06)',
                    border: '1px solid rgba(51,103,202,0.12)',
                    borderRadius: 10,
                    fontSize: 12, color: '#3367ca', fontStyle: 'italic', lineHeight: 1.6,
                  }}>
                    {p.insight}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Etapa 2 */}
          <div>
            <div className="fade-up" style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: 'linear-gradient(135deg, #e8a14e, #d4770a)',
                color: 'white', fontWeight: 800, fontSize: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>2</div>
              <div>
                <h3 style={{ fontSize: 20, marginBottom: 4 }}>Plano de Ação — o que fazer a partir daqui</h3>
                <p style={{ fontSize: 14, color: '#8a88a0', margin: 0 }}>O diagnóstico sozinho não move o negócio. O que move é saber, com precisão, o que ajustar, o que construir e em qual ordem.</p>
              </div>
            </div>

            <div className="card fade-up delay-1" style={{ padding: '32px 28px' }}>
              <p style={{ fontSize: 15, color: '#5a5875', lineHeight: 1.8, marginBottom: 24 }}>
                Após a análise dos cinco pilares, você recebe um plano de ação estratégico com metas definidas e as frentes que precisam ser ativadas para atingi-las. Pode incluir:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12, marginBottom: 24 }}>
                {[
                  'Estratégia de conteúdo e redes sociais',
                  'Estratégias para sites e landing pages',
                  'Automações e sistemas (CRM, funis, atendimento)',
                  'Revisão de processos internos e fluxo de tarefas',
                  'Redimensionamento ou reorganização de equipe',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#3e3a53', lineHeight: 1.5 }}>
                    <CheckIcon />
                    {item}
                  </div>
                ))}
              </div>
              <div style={{
                padding: '16px 20px',
                background: 'linear-gradient(135deg, rgba(51,103,202,0.06), rgba(107,78,230,0.06))',
                border: '1px solid rgba(51,103,202,0.12)',
                borderRadius: 14,
                fontSize: 14, color: '#3367ca', lineHeight: 1.7, fontStyle: 'italic',
              }}>
                Não é um documento genérico de recomendações. É um mapa com prioridades claras — o que precisa ser feito primeiro, o que pode esperar e o que está funcionando e deve ser mantido. Você sai da sessão de entrega sabendo exatamente o que fazer nos próximos 30, 60 e 90 dias.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENTREGÁVEIS ── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="tag tag-amber fade-up" style={{ marginBottom: 20 }}>O que você recebe</div>
            <h2 className="fade-up delay-1" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>
              Dois entregáveis. Prontos para ser implementados.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, maxWidth: 720, margin: '0 auto' }}>
            {deliverables.map((d, i) => (
              <div key={d.title} className={`card fade-up delay-${i + 1}`} style={{ padding: '32px 28px', textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{d.icon}</div>
                <h3 style={{ fontSize: 17, marginBottom: 10 }}>{d.title}</h3>
                <p style={{ fontSize: 14, color: '#8a88a0', lineHeight: 1.7, margin: 0 }}>{d.desc}</p>
              </div>
            ))}
          </div>

          <p className="fade-up delay-3" style={{ textAlign: 'center', fontSize: 14, color: '#8a88a0', marginTop: 28, lineHeight: 1.7 }}>
            Ambos documentados e organizados — prontos para ser implementados pela Lemin Studio na continuidade do trabalho, ou pela própria equipe da cliente.
          </p>
        </div>
      </section>

      {/* ── PRÓXIMOS PASSOS / UPSELL ── */}
      <section className="section" style={{ background: 'rgba(248,249,252,0.8)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="tag tag-blue fade-up" style={{ marginBottom: 20 }}>Próximos passos</div>
            <h2 className="fade-up delay-1" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>
              Da estratégia para a execução
            </h2>
            <p className="fade-up delay-2" style={{ fontSize: 15, color: '#8a88a0', maxWidth: 540, margin: '12px auto 0', lineHeight: 1.7 }}>
              O plano de ação é seu — independente do que vier depois. Você pode implementar com a Lemin Studio ou pela sua própria equipe. Abaixo, os caminhos para quem quiser continuar com a gente.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
            {upsells.map((u, i) => (
              <div key={u.title} className={`card fade-up delay-${i + 1}`} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div className="icon-box icon-box-blue" style={{ width: 44, height: 44, borderRadius: 12, fontSize: 18 }}>{u.icon}</div>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: '#3e3a53', margin: 0 }}>{u.title}</h4>
                <p style={{ fontSize: 13, color: '#8a88a0', lineHeight: 1.65, margin: 0 }}>{u.desc}</p>
              </div>
            ))}
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

            <div className="tag tag-white fade-up" style={{ marginBottom: 20 }}>✦ Por que começa aqui</div>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 38px)', color: 'white', marginBottom: 16, maxWidth: 540, margin: '0 auto 16px' }} className="fade-up delay-1">
              Contrate qualquer serviço sem diagnóstico e você está reformando sem laudo técnico.
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', maxWidth: 460, margin: '0 auto 40px', lineHeight: 1.8 }} className="fade-up delay-2">
              O acabamento fica bonito. A base, não. Prescrição sem diagnóstico é negligência. Esse serviço existe para garantir que cada decisão tomada a partir daqui seja baseada em dados reais do negócio — não em suposição, tendência ou achismo.
            </p>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }} className="fade-up delay-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: '#25D366', color: 'white', boxShadow: '0 4px 20px rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
              <Link to="/contato" className="btn btn-ghost">
                Solicitar proposta <ArrowRight color="#3e3a53" />
              </Link>
            </div>

            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 24 }} className="fade-up delay-3">
              A partir de R$800,00 · Entrega documentada · Prontos para implementar
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
