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

const painPoints = [
  {
    icon: '🔁',
    title: 'Efeito "Mais do Mesmo"',
    desc: 'Você olha para o seu feed e sente que o seu conteúdo é genérico, idêntico ao de todo mundo no seu nicho.',
  },
  {
    icon: '🎯',
    title: 'Público Desalinhado',
    desc: 'Você gasta horas produzindo, mas os posts não atraem o cliente ideal ou simplesmente não geram conversão.',
  },
  {
    icon: '😵',
    title: 'Overwhelm Total',
    desc: 'Você se sente perdida no meio de tantas "regras", formatos e tendências, sem saber o que realmente funciona para o seu momento.',
  },
]

const pillars = [
  {
    number: '01',
    icon: '🔍',
    title: 'Análise de Perfil',
    desc: 'O que o seu perfil comunica agora versus o que deveria comunicar. Nós avaliamos a clareza da oferta, a coerência das mensagens e se o conteúdo que você publica está alinhado com o posicionamento que você quer ocupar.',
  },
  {
    number: '02',
    icon: '🎯',
    title: 'Estratégia de Conteúdo',
    desc: 'Com base no seu negócio, público e objetivo, desenhamos a lógica por trás dos conteúdos, uma estrutura que constrói autoridade e conversa com o seu público-alvo.',
  },
  {
    number: '03',
    icon: '📐',
    title: 'Definição de Formatos',
    desc: 'Quais formatos fazem sentido para o seu negócio, seu estágio de crescimento e o tempo real que você tem. Reels, carrosséis ou stories: cada formato tem uma função e precisa estar alinhado com a sua comunicação.',
  },
  {
    number: '04',
    icon: '⚙️',
    title: 'Montagem do Sistema de Conteúdo',
    desc: 'O sistema que vai sustentar a sua criação de forma consistente: como usar IA sem perder o seu tom de voz, como criar posts autênticos e como manter a consistência sem depender de inspiração.',
  },
]

const deliverables = [
  {
    icon: '📄',
    title: 'Arquivo .md — Estudo Completo do Negócio',
    desc: 'Tom de voz, público, análise de mercado, formatos e posicionamento documentados. Esse arquivo é o briefing que você entrega para qualquer IA, e que garante que o conteúdo gerado vai soar como você, não como todo mundo.',
  },
  {
    icon: '📘',
    title: 'PDF Orientativo de Criação com IA + Banco de Prompts',
    desc: 'Como criar um projeto nas principais IAs (ChatGPT, Claude, Gemini) usando o seu estudo de negócio. Passo a passo prático para você começar a usar no mesmo dia.',
  },
]

export default function ConsultoriaConteudo() {
  useScrollReveal()
  const waText = encodeURIComponent('Olá! Tenho interesse na Consultoria Sistema de Conteúdo. Gostaria de mais informações!')
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
            <span style={{ fontSize: 13, color: '#3367ca', fontWeight: 600 }}>Consultoria Sistema de Conteúdo</span>
          </div>

          <h1 className="fade-up delay-2" style={{ maxWidth: 680, textAlign: 'center', margin: '0 auto' }}>
            Consultoria<br />Sistema de Conteúdo
          </h1>
          <p className="fade-up delay-3" style={{ marginTop: 20, maxWidth: 520, fontSize: 17, lineHeight: 1.8, color: '#5a5875' }}>
            O empurrão estratégico que faltava para você assumir o controle da sua narrativa. Você sai com sistema, estratégia e as ferramentas necessárias para criar conteúdo autêntico.
          </p>

          <div className="fade-up delay-3" style={{ marginTop: 32, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href='https://pay.hub.la/m1pd8KVSY0fFS1K57WSe' target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#3367ca', color: 'white', display: 'flex', alignItems: 'center', gap: 8 }}>
              Quero a consultoria <ArrowRight />
            </a>
            <a href="#o-que-inclui" className="btn btn-ghost">
              O que inclui <ArrowRight color="#3e3a53" />
            </a>
          </div>
        </div>
      </section>

      {/* ── DOR ── */}
      <section className="section" style={{ background: 'rgba(248,249,252,0.8)' }}>
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <p className="fade-up" style={{ fontSize: 16, color: '#5a5875', lineHeight: 1.8, marginBottom: 32, textAlign: 'center' }}>
              Se você tem uma marca pessoal e cria o seu próprio conteúdo, é muito provável que já tenha passado por pelo menos uma destas situações:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 40 }}>
              {painPoints.map((p, i) => (
                <div key={p.title} className={`card fade-up delay-${i + 1}`} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ fontSize: 28 }}>{p.icon}</div>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: '#3e3a53', margin: 0 }}>{p.title}</h4>
                  <p style={{ fontSize: 13, color: '#8a88a0', lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>

            <p className="fade-up delay-3" style={{ fontSize: 15, color: '#5a5875', lineHeight: 1.8, textAlign: 'center', marginBottom: 32 }}>
              A verdade é que produzir conteúdo sem um método claro drena a sua energia e o seu tempo.
            </p>

            <div className="fade-up delay-3" style={{
              padding: '24px 32px',
              background: 'linear-gradient(135deg, rgba(51,103,202,0.07), rgba(107,78,230,0.07))',
              border: '1px solid rgba(51,103,202,0.15)',
              borderRadius: 16,
              textAlign: 'center',
            }}>
              <p style={{ fontSize: 16, color: '#3e3a53', lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
                Consultoria para quem precisa de um direcionamento na criação de conteúdo. É o empurrão estratégico que faltava para você assumir o controle da sua narrativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── O QUE INCLUI ── */}
      <section id="o-que-inclui" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="tag tag-blue fade-up" style={{ marginBottom: 20 }}>O que inclui</div>
            <h2 className="fade-up delay-1" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>
              Quatro frentes. Um sistema.
            </h2>
            <p className="fade-up delay-2" style={{ fontSize: 15, color: '#8a88a0', maxWidth: 520, margin: '12px auto 0', lineHeight: 1.7 }}>
              Em duas reuniões nós pensamos juntas em cada etapa da consultoria construindo uma comunicação alinhada com o seu negócio e sua rotina.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: 20 }}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTREGÁVEIS ── */}
      <section className="section" style={{ background: 'rgba(248,249,252,0.8)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="tag tag-amber fade-up" style={{ marginBottom: 20 }}>O que você leva</div>
            <h2 className="fade-up delay-1" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>
              Entregáveis prontos para usar.
            </h2>
            <p className="fade-up delay-2" style={{ fontSize: 15, color: '#8a88a0', maxWidth: 520, margin: '12px auto 0', lineHeight: 1.7 }}>
              Você sai da consultoria com documentos práticos. São ferramentas para criar conteúdo de verdade a partir do dia seguinte, seja para o seu time ou com IA.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, maxWidth: 760, margin: '0 auto' }}>
            {deliverables.map((d, i) => (
              <div key={d.title} className={`card fade-up delay-${i + 1}`} style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ fontSize: 36 }}>{d.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#3e3a53', margin: 0 }}>{d.title}</h3>
                <p style={{ fontSize: 13, color: '#8a88a0', lineHeight: 1.7, margin: 0 }}>{d.desc}</p>
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
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 38px)', color: 'white', maxWidth: 560, textAlign: 'center', margin: '0 auto 16px' }} className="fade-up">
              Pare de criar conteúdo no escuro e comece a construir uma presença que vende.
            </h2>

            <span style={{ fontSize: 48, fontWeight: 800, color: 'white' }}>R$ 797</span>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }} className="fade-up delay-2">
              <a
                href='https://pay.hub.la/m1pd8KVSY0fFS1K57WSe'
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: '#25D366', color: 'white', boxShadow: '0 4px 20px rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', gap: 8 }}
              >
                Eu quero minha Consultoria!
              </a>
              <a  
                href='https://pay.hub.la/epfRdx4Dd8ZxL2jTH6S4'
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: '#25D366', color: 'white', boxShadow: '0 4px 20px rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', gap: 8 }}


              >Quero a Consultoria com desconto!</a>
            </div>

            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'row', gap: 6, justifyContent: 'center' }} className="fade-up delay-2">
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>⁕ Pagamento no cartão de crédito em até 2x</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>⁕ PIX com 10% de desconto</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>⁕ 2 encontros ao vivo de até 1h30</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
