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

const ClaudeMark = ({ size = 48, style }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={style} aria-hidden="true">
    {Array.from({ length: 12 }).map((_, i) => (
      <rect key={i} x="46" y="3" width="8" height="45" rx="4" fill="#CC785C" transform={`rotate(${i * 30} 50 50)`} />
    ))}
  </svg>
)

const OpenAIMark = ({ size = 48, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#0d0d0d" style={style} aria-hidden="true">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.1419.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z"/>
  </svg>
)

const GeminiMark = ({ size = 48, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={style} aria-hidden="true">
    <defs>
      <linearGradient id="geminiGrad" x1="1" y1="3" x2="22" y2="21" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#F94E44" />
        <stop offset="0.33" stopColor="#F9AB00" />
        <stop offset="0.63" stopColor="#1FA463" />
        <stop offset="1" stopColor="#4285F4" />
      </linearGradient>
    </defs>
    <path fill="url(#geminiGrad)" d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12" />
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

const brainRegistered = [
  'Seu posicionamento',
  'O DNA da marca',
  'A forma como sua marca se comunica',
  'Quem é o seu público',
  'Os pilares do seu conteúdo',
  'Direcionamentos para estética e formatos',
  'Decisões estratégicas que normalmente ficam só na sua cabeça',
]

const during30 = [
  'Seu arquivo estratégico atualizado',
  'Calendário para planejar os conteúdos',
  'Revisão do que foi produzido',
  'Ajustes no próprio sistema',
  'Gravações das reuniões para consultar sempre que precisar',
]

const beforeSteps = [
  'Você abre o Instagram.',
  'Pensa no que postar.',
  'Abre o ChatGPT.',
  'Escreve um prompt.',
  'Apaga.',
  'Reescreve.',
  'O texto parece igual ao de todo mundo.',
]

const afterSteps = [
  'Você abre o seu arquivo.',
  'Entrega o contexto para a IA.',
  'Pede o conteúdo.',
  'A resposta já respeita a personalidade da sua marca.',
  'Você revisa.',
  'Publica.',
]

const takeaways = [
  { icon: '📂', text: 'Arquivo estratégico da sua marca' },
  { icon: '🤖', text: 'Arquivo preparado para IA' },
  { icon: '📅', text: 'Calendário de conteúdo' },
  { icon: '📊', text: 'Acompanhamento de métricas' },
  { icon: '🎥', text: 'Gravações das reuniões' },
  { icon: '💬', text: '30 dias de suporte no WhatsApp' },
  { icon: '🔄', text: 'Revisão e otimização do sistema' },
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
            Pare de improvisar a comunicação da sua marca.
          </h1>
          <p className="fade-up delay-3" style={{ marginTop: 20, maxWidth: 560, fontSize: 17, lineHeight: 1.8, color: '#5a5875' }}>
            Em duas sessões, construímos o sistema da sua marca para que você saiba exatamente o que comunicar, como comunicar e consiga criar conteúdo com consistência — inclusive usando ChatGPT ou Claude no seu próprio tom.
          </p>

          <div className="fade-up delay-3" style={{ marginTop: 32, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href='https://mpago.la/2LeEYLX' target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#3367ca', color: 'white', display: 'flex', alignItems: 'center', gap: 8 }}>
              Quero construir meu sistema <ArrowRight />
            </a>
            <a href="#o-que-inclui" className="btn btn-ghost">
              Como funciona <ArrowRight color="#3e3a53" />
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

      {/* ── O CÉREBRO DA MARCA ── */}
      <section id="o-que-inclui" className="section" style={{ paddingTop: 40, overflow: 'hidden' }}>
        <div className="container">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div className="fade-up delay-1" style={{ position: 'relative', display: 'inline-block' }}>
              <span aria-hidden="true" style={{ position: 'absolute', top: -30, left: -74, fontSize: 56, opacity: 0.82, pointerEvents: 'none', zIndex: 0, animation: 'float 6s ease-in-out infinite' }}>🧠</span>
              <span aria-hidden="true" style={{ position: 'absolute', top: -34, right: -52, fontSize: 28, opacity: 0.6, pointerEvents: 'none', zIndex: 0, animation: 'float-slow 7s ease-in-out infinite', animationDelay: '1.2s' }}>🧠</span>
              <span aria-hidden="true" style={{ position: 'absolute', bottom: -30, right: -38, fontSize: 40, opacity: 0.75, pointerEvents: 'none', zIndex: 0, animation: 'float 8s ease-in-out infinite', animationDelay: '0.6s' }}>🧠</span>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', margin: 0, position: 'relative', zIndex: 1 }}>
                O cérebro da sua marca
              </h2>
            </div>
            <p className="fade-up delay-2" style={{ fontSize: 16, color: '#5a5875', lineHeight: 1.8, marginTop: 20 }}>
              Depois da consultoria, você não sai apenas com uma estratégia. Você sai com o <strong style={{ color: '#3367ca' }}>cérebro da sua marca</strong>: um sistema construído exclusivamente para o seu negócio, que reúne tudo o que orienta a sua comunicação.
            </p>
            <p className="fade-up delay-2" style={{ fontSize: 16, color: '#5a5875', lineHeight: 1.8, marginTop: 16 }}>
              É ele que faz você parar de começar do zero sempre que precisa criar conteúdo.
            </p>
          </div>

          <div className="card fade-up delay-2" style={{ maxWidth: 720, margin: '40px auto 0', padding: 'clamp(28px, 4vw, 40px)' }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#3e3a53', margin: 0 }}>O que é esse arquivo?</h3>
            <p style={{ fontSize: 14, color: '#5a5875', lineHeight: 1.75, marginTop: 12 }}>
              Durante a primeira reunião, construímos juntas toda a lógica da sua comunicação. Tudo isso é organizado em um arquivo estratégico da sua marca. Nele ficam registrados:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'grid', gap: 10 }}>
              {brainRegistered.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#3e3a53', lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0 }}>✨</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 14, color: '#5a5875', lineHeight: 1.75, margin: '20px 0 0' }}>
              Em vez de depender da memória ou da inspiração, você passa a ter um sistema que consulta sempre que precisar.
            </p>
          </div>
        </div>
      </section>

      {/* ── ARQUIVO PARA IA ── */}
      <section className="section" style={{ background: 'rgba(248,249,252,0.8)', position: 'relative' }}>
        {/* camada decorativa: fica fixa (sticky) enquanto a seção passa e some ao final dela */}
        <div aria-hidden="true" style={{ position: 'sticky', top: 0, height: 0, zIndex: 0, pointerEvents: 'none' }}>
          <ClaudeMark size={72} style={{ position: 'absolute', top: '15vh', left: 28, opacity: 0.9, animation: 'float 6s ease-in-out infinite' }} />
          <GeminiMark size={56} style={{ position: 'absolute', top: '30vh', right: 32, opacity: 0.9, animation: 'float 8s ease-in-out infinite', animationDelay: '0.4s' }} />
          <OpenAIMark size={40} style={{ position: 'absolute', top: '55vh', left: 46, opacity: 0.6, animation: 'float-slow 7.5s ease-in-out infinite', animationDelay: '0.8s' }} />
          <GeminiMark size={30} style={{ position: 'absolute', top: '13vh', right: '20%', opacity: 0.55, animation: 'float-slow 9s ease-in-out infinite', animationDelay: '1.4s' }} />
          <OpenAIMark size={30} style={{ position: 'absolute', top: '70vh', right: 64, opacity: 0.45, animation: 'float 7s ease-in-out infinite', animationDelay: '1s' }} />
          <ClaudeMark size={36} style={{ position: 'absolute', top: '72vh', left: '18%', opacity: 0.6, animation: 'float-slow 8.5s ease-in-out infinite', animationDelay: '0.6s' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <h2 className="fade-up delay-1" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>
              Um arquivo pensado para trabalhar com IA
            </h2>
            <p className="fade-up delay-2" style={{ fontSize: 16, color: '#5a5875', lineHeight: 1.8, marginTop: 20 }}>
              Esse material não fica parado. Ele foi criado para ser usado com ChatGPT, Claude ou qualquer outra inteligência artificial.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, maxWidth: 820, margin: '48px auto 0' }}>
            <div className="card fade-up delay-1" style={{ padding: '28px' }}>
              <span style={{ fontSize: 12, fontWeight: 800, color: '#8a88a0', letterSpacing: '0.06em' }}>ANTES</span>
              <ol style={{ margin: '16px 0 0', paddingLeft: 18, display: 'grid', gap: 8 }}>
                {beforeSteps.map((s) => (
                  <li key={s} style={{ fontSize: 14, color: '#8a88a0', lineHeight: 1.6 }}>{s}</li>
                ))}
              </ol>
            </div>
            <div className="card fade-up delay-2" style={{ padding: '28px', border: '1px solid rgba(51,103,202,0.25)' }}>
              <span style={{ fontSize: 12, fontWeight: 800, color: '#3367ca', letterSpacing: '0.06em' }}>DEPOIS</span>
              <ol style={{ margin: '16px 0 0', paddingLeft: 18, display: 'grid', gap: 8 }}>
                {afterSteps.map((s) => (
                  <li key={s} style={{ fontSize: 14, color: '#3e3a53', lineHeight: 1.6 }}>{s}</li>
                ))}
              </ol>
            </div>
          </div>

          <p className="fade-up delay-2" style={{ fontSize: 16, color: '#3e3a53', lineHeight: 1.8, textAlign: 'center', maxWidth: 560, margin: '32px auto 0', fontWeight: 500 }}>
            Muito menos tempo tentando descobrir como comunicar. Muito mais tempo comunicando.
          </p>
        </div>
      </section>

      {/* ── O SISTEMA CONTINUA ── */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <h2 className="fade-up delay-1" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>
              E quando a consultoria termina? O sistema continua!
            </h2>
            <p className="fade-up delay-2" style={{ fontSize: 16, color: '#5a5875', lineHeight: 1.8, marginTop: 20 }}>
              Você recebe um espaço organizado para acompanhar toda a evolução da sua comunicação. Durante os 30 dias de aplicação, você conta com:
            </p>
          </div>

          <div className="card fade-up delay-2" style={{ maxWidth: 620, margin: '32px auto 0', padding: 'clamp(28px, 4vw, 40px)' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
              {during30.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14, color: '#3e3a53', lineHeight: 1.6 }}>
                  <span style={{ color: '#3367ca', flexShrink: 0, fontWeight: 700 }}>✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="fade-up delay-2" style={{ fontSize: 15, color: '#5a5875', lineHeight: 1.8, textAlign: 'center', maxWidth: 620, margin: '24px auto 0' }}>
            Ou seja, você não recebe apenas orientação. Recebe uma estrutura que continua funcionando depois que nossos encontros acabam.
          </p>
        </div>
      </section>

      {/* ── O QUE VOCÊ LEVA ── */}
      <section className="section" style={{ background: 'rgba(248,249,252,0.8)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="tag tag-amber fade-up" style={{ marginBottom: 20 }}>O que você leva com você</div>
            <h2 className="fade-up delay-1" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>
              Tudo isso fica com você
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, maxWidth: 820, margin: '0 auto' }}>
            {takeaways.map((t, i) => (
              <div key={t.text} className={`card fade-up delay-${(i % 3) + 1}`} style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ fontSize: 28, flexShrink: 0 }}>{t.icon}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#3e3a53', lineHeight: 1.45 }}>{t.text}</span>
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
            <div className="fade-up" style={{ maxWidth: 600, margin: '0 auto 28px' }}>
              <h2 style={{ fontSize: 'clamp(21px, 3vw, 32px)', color: 'white', lineHeight: 1.3, margin: '0 0 16px' }}>
                Seu próximo conteúdo não deveria começar do zero.
              </h2>
              <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, margin: 0 }}>
                Ele deveria começar com uma estratégia.<br />
                Com um posicionamento.<br />
                Com uma marca que sabe exatamente o que quer comunicar.
              </p>
              <p style={{ fontSize: 'clamp(17px, 2.2vw, 21px)', color: 'white', fontWeight: 700, margin: '20px 0 0' }}>
                É isso que vamos construir juntas.
              </p>
            </div>

            <span style={{ fontSize: 48, fontWeight: 800, color: 'white' }}>R$ 797</span>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }} className="fade-up delay-2">
              <a
                href='https://mpago.la/2LeEYLX'
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
