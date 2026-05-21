import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const GUIA_HREF = 'https://pay.hub.la/OdnpIezS7stOtxgICWSn'

const faqItems = [
  {
    q: 'Preciso ter experiência com redes sociais?',
    a: 'Não. O guia foi criado exatamente pra quem está começando e não sabe o que postar. Você vai entender a lógica do conteúdo desde o início.',
  },
  {
    q: 'E se eu nunca usei o Trello?',
    a: 'Tem uma aula completa ensinando do zero: como criar conta, como criar o quadro, como navegar pela plataforma. Você vai sair sabendo usar sem precisar de ajuda externa.',
  },
  {
    q: 'Para quais nichos funciona?',
    a: 'Funciona para qualquer profissional que cria conteúdo no Instagram. Os conteúdos foram criados e testados com clientes de diferentes áreas — beleza, saúde, advocacia, arquitetura, nutrição, estética e muito mais.',
  },
  {
    q: 'Com que frequência o guia é atualizado?',
    a: 'Todo domingo. Toda semana entram conteúdos novos — virais, de posicionamento, de conexão. Então o guia só cresce com o tempo.',
  },
  {
    q: 'Por quanto tempo tenho acesso?',
    a: 'O acesso é anual. Você paga uma vez e tem acesso por 12 meses a todo o conteúdo — incluindo todas as atualizações semanais.',
  },
  {
    q: 'Vou conseguir adaptar os conteúdos para o meu nicho?',
    a: 'Sim. Os conteúdos são modelos estratégicos que você adapta para a sua linguagem e área. A ideia não é copiar e colar — é entender a lógica e aplicar da forma que faz sentido pra você.',
  },
]

function FaqItem({ q, a }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      onClick={() => setIsOpen(v => !v)}
      style={{
        background: '#fff', borderRadius: 14, padding: '18px 22px',
        border: `1.5px solid ${isOpen ? 'rgba(51,103,202,0.3)' : 'rgba(62,58,83,0.09)'}`,
        cursor: 'pointer', transition: 'border-color .2s',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <p style={{ fontWeight: 700, fontSize: 15, color: '#3e3a53', margin: 0 }}>{q}</p>
        <span style={{
          width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
          background: isOpen ? '#3367ca' : 'rgba(62,58,83,0.07)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background .2s',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d={isOpen ? 'M2 8l4-4 4 4' : 'M2 4l4 4 4-4'} stroke={isOpen ? '#e0fc78' : '#3e3a53'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      {isOpen && <p style={{ fontSize: 14, color: '#8a88a0', lineHeight: 1.7, margin: '12px 0 0' }}>{a}</p>}
    </div>
  )
}

const BuyBtn = ({ label = 'Quero o Guia de Conteúdos', style: extraStyle = {} }) => (
  <a
    href={GUIA_HREF}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '15px 30px', background: '#e0fc78', color: '#1e2d5a',
      borderRadius: 100, fontWeight: 800, fontSize: 15,
      textDecoration: 'none', boxShadow: '0 8px 28px rgba(224,252,120,.4)',
      transition: 'all .2s', ...extraStyle,
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(224,252,120,.55)' }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(224,252,120,.4)' }}
  >
    {label}
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="#1e2d5a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </a>
)

export default function GuiaConteudos() {
  useScrollReveal()

  return (
    <div style={{ paddingTop: '96px', background: '#f4f3ee' }}>

      {/* ── HERO ── */}
      <section style={{ padding: '60px 0 0' }}>
        <div className="container">

          {/* Hero principal */}
          <div className="fade-up" style={{
            background: 'linear-gradient(140deg, #1e2d5a 0%, #3367ca 55%, #94b0ed 100%)',
            borderRadius: 36, overflow: 'hidden', position: 'relative', marginBottom: 2,
          }}>
            <div style={{ position:'absolute', top:-80, right:-80, width:360, height:360, borderRadius:'50%', background:'radial-gradient(circle,rgba(255,255,255,.12) 0%,transparent 70%)', filter:'blur(50px)', pointerEvents:'none' }}/>
            <div style={{ position:'absolute', bottom:-60, left:-60, width:280, height:280, borderRadius:'50%', background:'radial-gradient(circle,rgba(224,252,120,.12) 0%,transparent 70%)', filter:'blur(50px)', pointerEvents:'none' }}/>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:0, position:'relative', zIndex:1 }} className="gc-hero-grid">
              {/* Left */}
              <div style={{ padding:'clamp(36px,5vw,64px)' }}>
                <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginBottom:28 }}>
                  <span style={{ background:'#e0fc78', color:'#1e2d5a', borderRadius:100, padding:'5px 16px', fontSize:11, fontWeight:800, letterSpacing:'.06em', textTransform:'uppercase' }}>✦ Infoproduto</span>
                  <span style={{ background:'rgba(255,255,255,.12)', color:'rgba(255,255,255,.85)', borderRadius:100, padding:'5px 14px', fontSize:12, fontWeight:600, border:'1px solid rgba(255,255,255,.2)' }}>Acesso Anual</span>
                  <span style={{ background:'rgba(255,255,255,.12)', color:'rgba(255,255,255,.85)', borderRadius:100, padding:'5px 14px', fontSize:12, fontWeight:600, border:'1px solid rgba(255,255,255,.2)' }}>Atualizado todo domingo</span>
                </div>

                <img src="/images/guia-logo.png" alt="Guia de Conteúdos" style={{ width: 180, display:'block', marginBottom: 24, filter:'drop-shadow(0 4px 12px rgba(0,0,0,.2))' }} />

                <h1 style={{ fontSize:'clamp(22px,3.2vw,44px)', fontWeight:800, color:'#fff', lineHeight:1.15, marginBottom:20 }}>
                  Não saber o que postar<br/>
                  <span style={{ color:'#e0fc78' }}>não é falta de criatividade.</span><br/>
                  É falta de um bom guia.
                </h1>

                <p style={{ fontSize:16, color:'rgba(255,255,255,.75)', lineHeight:1.8, marginBottom:32, maxWidth:540 }}>
                  Mais de <strong style={{ color:'#fff' }}>2 anos de criação de conteúdo</strong> reunidos em um único lugar —
                  ideias prontas, testadas e organizadas no Trello, atualizadas toda semana.
                </p>

                <div style={{ display:'flex', gap:14, flexWrap:'wrap', alignItems:'center' }}>
                  <BuyBtn />
                  <div>
                    <p style={{ color:'#e0fc78', fontWeight:900, fontSize:28, margin:0, lineHeight:1 }}>R$ 97</p>
                    <p style={{ color:'rgba(255,255,255,.5)', fontSize:12, margin:0 }}>acesso anual</p>
                  </div>
                </div>
              </div>

              {/* Right — foto */}
              <div style={{ background:'rgba(255,255,255,.06)', borderLeft:'1px solid rgba(255,255,255,.12)', position:'relative', overflow:'hidden', minHeight:420 }} className="gc-hero-img">
                <img
                  src="/images/guia-emily-estatico.png"
                  alt="Emily Comin — Guia de Conteúdos"
                  style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', display:'block' }}
                />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, rgba(30,45,90,.4) 0%, transparent 55%)' }}/>
              </div>
            </div>
          </div>

          {/* ── ABERTURA — O PROBLEMA ── */}
          <div className="fade-up" style={{ background:'#fff', borderRadius:28, padding:'clamp(32px,4vw,52px)', boxShadow:'0 4px 24px rgba(62,58,83,.07)', marginBottom:2, borderTop:'4px solid #e0fc78' }}>
            <p style={{ fontSize:'clamp(18px,2.5vw,24px)', fontWeight:700, color:'#3e3a53', marginBottom:16, fontStyle:'italic' }}>
              "Eu não sei o que postar."
            </p>
            <p style={{ fontSize:16, color:'#8a88a0', lineHeight:1.8, marginBottom:14, maxWidth:700 }}>
              Se você já disse isso, você não está sozinha. Foi exatamente isso que eu sentia quando comecei a criar conteúdo no Instagram.
              Não sabia muito bem o que postar, não conhecia estratégia, ficava olhando pra tela em branco.
            </p>
            <p style={{ fontSize:16, color:'#8a88a0', lineHeight:1.8, marginBottom:14, maxWidth:700 }}>
              Foi de uma dificuldade que nasceu esse produto. Comecei a mapear tudo o que funcionava —
              pra mim e pra meus clientes — e reuni num lugar só.
            </p>
            <p style={{ fontSize:16, color:'#3e3a53', fontWeight:600, lineHeight:1.8, maxWidth:700, margin:0 }}>
              Dois anos depois, esse guia tem centenas de ideias organizadas, categorizadas e prontas pra você adaptar ao seu nicho.
            </p>
          </div>

          {/* ── PARA QUEM É ── */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:2, marginBottom:2 }} className="gc-forwho">
            <div style={{ background:'#fff', borderRadius:'0 0 0 28px', padding:'clamp(28px,3.5vw,48px)', boxShadow:'0 4px 24px rgba(62,58,83,.07)' }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(34,197,94,.1)', color:'#16a34a', borderRadius:100, padding:'6px 16px', fontSize:13, fontWeight:700, marginBottom:20 }}>
                ✓ Esse guia é pra você se:
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
                {[
                  'Você trava na hora de criar conteúdo e não sabe por onde começar.',
                  'Você posta de forma aleatória, sem estratégia e sem ver resultado.',
                  'Você quer ter ideias prontas, organizadas e testadas — sem gastar horas pensando no que falar.',
                  'Você quer um recurso que cresce junto com você, com novos conteúdos toda semana.',
                ].map((t, i) => (
                  <div key={i} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                    <div style={{ width:22, height:22, borderRadius:'50%', background:'rgba(34,197,94,.12)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2 }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p style={{ fontSize:14, color:'#8a88a0', lineHeight:1.7, margin:0 }}>{t}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background:'rgba(248,249,252,.8)', borderRadius:'0 0 28px 0', padding:'clamp(28px,3.5vw,48px)', boxShadow:'0 4px 24px rgba(62,58,83,.07)' }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(239,68,68,.08)', color:'#dc2626', borderRadius:100, padding:'6px 16px', fontSize:13, fontWeight:700, marginBottom:20 }}>
                ✕ Não é pra você se:
              </div>
              <div style={{ display:'flex', gap:12, alignItems:'flex-start', marginBottom:28 }}>
                <div style={{ width:22, height:22, borderRadius:'50%', background:'rgba(239,68,68,.1)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2 }}>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <p style={{ fontSize:14, color:'#8a88a0', lineHeight:1.7, margin:0 }}>
                  Você já tem um calendário de conteúdo consolidado e nunca trava em "o que postar hoje".
                </p>
              </div>
              <div style={{ paddingTop:24, borderTop:'1px solid rgba(62,58,83,.08)' }}>
                <p style={{ fontSize:13, fontWeight:800, color:'#3e3a53', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:14 }}>O diferencial</p>
                <p style={{ fontSize:14, color:'#8a88a0', lineHeight:1.75, margin:'0 0 12px' }}>
                  A maioria dos cursos te ensina teoria. O Guia te entrega a prática pronta.
                  Você não aprende sobre conteúdo — você recebe o conteúdo e aprende a usá-lo.
                </p>
                <p style={{ fontSize:14, color:'#3e3a53', fontWeight:600, lineHeight:1.7, margin:0 }}>
                  E toda semana, no domingo, chega conteúdo novo.
                </p>
              </div>
            </div>
          </div>

          {/* ── O QUE TEM DENTRO ── */}
          <div className="fade-up" style={{ background:'linear-gradient(140deg,#f0f4ff,#e8edfa)', borderRadius:28, padding:'clamp(32px,4vw,52px)', boxShadow:'0 4px 24px rgba(51,103,202,.08)', marginBottom:2, border:'1px solid rgba(51,103,202,.12)' }}>
            <div style={{ textAlign:'center', marginBottom:40 }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(51,103,202,.1)', color:'#3367ca', borderRadius:100, padding:'6px 18px', fontSize:13, fontWeight:700, marginBottom:14 }}>✦ O que tem dentro</div>
              <h2 style={{ fontSize:'clamp(20px,2.5vw,30px)', fontWeight:800, color:'#3e3a53', margin:0 }}>Tudo que você precisa pra nunca mais travar</h2>
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, marginBottom:32 }} className="gc-incluso">
              {[
                {
                  icon: '📌',
                  title: 'Trello com 100+ ideias',
                  desc: 'Mais de 2 anos de criação de conteúdo reunidos num quadro Trello organizado por tipo e objetivo. Você entra, copia e adapta ao seu nicho.',
                },
                {
                  icon: '🔄',
                  title: 'Atualizado todo domingo',
                  desc: 'Todo domingo entram conteúdos novos — virais, de posicionamento, de conexão. O guia cresce com o tempo e você sempre tem ideia nova.',
                },
                {
                  icon: '🎓',
                  title: 'Aula completa de Trello',
                  desc: 'Nunca usou o Trello? Sem problema. Tem uma aula que ensina tudo do zero: criar conta, criar quadro, navegar pela plataforma.',
                },
              ].map(item => (
                <div key={item.title} style={{ background:'#fff', borderRadius:18, padding:'28px 22px', boxShadow:'0 2px 12px rgba(62,58,83,.06)', textAlign:'center' }}>
                  <div style={{ fontSize:36, marginBottom:12 }}>{item.icon}</div>
                  <p style={{ fontWeight:700, fontSize:15, color:'#3e3a53', marginBottom:8 }}>{item.title}</p>
                  <p style={{ fontSize:13, color:'#8a88a0', lineHeight:1.65, margin:0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Screenshots do produto */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }} className="gc-prints">
              <div style={{ borderRadius:16, overflow:'hidden', boxShadow:'0 8px 32px rgba(51,103,202,.15)', border:'1px solid rgba(51,103,202,.1)' }}>
                <img src="/images/guia-trello.png" alt="Visão geral do Trello — Guia de Conteúdos" style={{ width:'100%', display:'block' }}/>
              </div>
              <div style={{ borderRadius:16, overflow:'hidden', boxShadow:'0 8px 32px rgba(51,103,202,.15)', border:'1px solid rgba(51,103,202,.1)' }}>
                <img src="/images/guia-card.png" alt="Dentro de um card do Guia" style={{ width:'100%', display:'block' }}/>
              </div>
            </div>
          </div>

          {/* ── COMO FUNCIONA ── */}
          <div className="fade-up" style={{ background:'#fff', borderRadius:28, padding:'clamp(32px,4vw,52px)', boxShadow:'0 4px 24px rgba(62,58,83,.07)', marginBottom:2 }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'center' }} className="gc-como">
              <div>
                <div className="tag tag-blue" style={{ marginBottom:20, display:'inline-flex' }}>✦ Como usar</div>
                <h2 style={{ fontSize:'clamp(20px,2.5vw,30px)', fontWeight:800, color:'#3e3a53', marginBottom:16, lineHeight:1.2 }}>
                  Simples e prático.<br/>Você abre, escolhe e cria.
                </h2>
                <p style={{ fontSize:15, color:'#8a88a0', lineHeight:1.8, margin:0 }}>
                  Não tem curva de aprendizado longa. O guia é pra usar no dia a dia, na hora que você for criar conteúdo.
                </p>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
                {[
                  { num:'01', title:'Entre no Trello', desc:'Você recebe o link de acesso ao quadro. Se nunca usou o Trello, assiste a aula de onboarding primeiro — leva menos de 15 minutos.' },
                  { num:'02', title:'Escolha a ideia', desc:'Navegue pelos cards organizados por tipo de conteúdo: conexão, posicionamento, viral, valor... Cada um com exemplos e instruções.' },
                  { num:'03', title:'Adapte e publique', desc:'Pegue a ideia, adapte pra sua linguagem e nicho, e publique. Simples assim. E todo domingo tem mais conteúdo novo esperando por você.' },
                ].map(step => (
                  <div key={step.num} style={{ display:'flex', gap:16, alignItems:'flex-start' }}>
                    <div style={{ width:36, height:36, borderRadius:10, background:'linear-gradient(135deg,#1e2d5a,#3367ca)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:'#e0fc78', fontWeight:800, fontSize:12 }}>{step.num}</div>
                    <div>
                      <p style={{ fontWeight:700, fontSize:14, color:'#3e3a53', margin:'0 0 4px' }}>{step.title}</p>
                      <p style={{ fontSize:13, color:'#8a88a0', lineHeight:1.65, margin:0 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── DEPOIMENTOS ── */}
          <div className="fade-up" style={{ background:'#fff', borderRadius:28, padding:'clamp(32px,4vw,52px)', boxShadow:'0 4px 24px rgba(62,58,83,.07)', marginBottom:2 }}>
            <div style={{ textAlign:'center', marginBottom:36 }}>
              <div className="tag tag-amber" style={{ marginBottom:14, display:'inline-flex' }}>✦ Quem já usa, fala</div>
              <h2 style={{ fontSize:'clamp(20px,2.5vw,28px)', fontWeight:800, color:'#3e3a53', marginBottom:10 }}>Prints reais de quem está usando</h2>
              <p style={{ fontSize:15, color:'#8a88a0', margin:0 }}>Sem edição, sem filtro.</p>
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, marginBottom:8 }} className="gc-deps">
              {[
                { src:'/images/guia-dep1.png', alt:'Depoimento 1' },
                { src:'/images/guia-dep2.png', alt:'Depoimento 2' },
                { src:'/images/guia-dep3.jpg', alt:'Depoimento 3' },
              ].map((d, i) => (
                <div key={i} style={{ borderRadius:16, overflow:'hidden', boxShadow:'0 4px 20px rgba(62,58,83,.1)', border:'1px solid rgba(62,58,83,.07)', background:'#f5f5f5' }}>
                  <img src={d.src} alt={d.alt} style={{ width:'100%', display:'block' }}/>
                </div>
              ))}
            </div>
          </div>

          {/* ── SOBRE + PREÇO ── */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:2, marginBottom:2 }} className="gc-sobrecta">
            {/* Sobre */}
            <div style={{ background:'rgba(248,249,252,.8)', borderRadius:'0 0 0 28px', boxShadow:'0 4px 24px rgba(62,58,83,.07)', overflow:'hidden', display:'grid', gridTemplateColumns:'1fr 1fr' }} className="gc-sobre-inner">
              <div style={{ position:'relative', minHeight:280, overflow:'hidden' }}>
                <img src="/images/guia-emily-foto.png" alt="Emily Comin"
                  style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', display:'block', position:'absolute', inset:0 }}
                />
              </div>
              <div style={{ padding:'clamp(24px,3vw,40px)' }}>
                <div className="tag tag-dark" style={{ marginBottom:16, display:'inline-flex' }}>✦ Quem sou eu</div>
                <h2 style={{ fontSize:'clamp(17px,1.8vw,22px)', fontWeight:800, color:'#3e3a53', marginBottom:12, lineHeight:1.2 }}>Sou a Emily.</h2>
                <p style={{ fontSize:13, color:'#8a88a0', lineHeight:1.8, marginBottom:10 }}>
                  Trabalho com gestão de redes sociais e estratégia de conteúdo. Por mais de 2 anos criei conteúdo para mim e para meus clientes — e fui guardando tudo que funcionava.
                </p>
                <p style={{ fontSize:13, color:'#8a88a0', lineHeight:1.8, margin:0 }}>
                  O Guia de Conteúdos nasceu da minha própria dificuldade de saber o que postar.{' '}
                  <em style={{ color:'#3e3a53', fontWeight:600 }}>De uma dificuldade real, nasceu um produto real.</em>
                </p>
              </div>
            </div>

            {/* CTA Preço */}
            <div id="oferta" style={{ background:'linear-gradient(135deg,#1e2d5a 0%,#3367ca 100%)', borderRadius:'0 0 28px 0', padding:'clamp(28px,3.5vw,48px)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', gap:20, position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:-40, right:-40, width:160, height:160, borderRadius:'50%', background:'radial-gradient(circle,rgba(224,252,120,.15) 0%,transparent 70%)', filter:'blur(30px)', pointerEvents:'none' }}/>
              <div style={{ position:'relative', zIndex:1, width:'100%' }}>
                <p style={{ color:'rgba(255,255,255,.5)', fontSize:13, fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase', margin:'0 0 8px' }}>Investimento</p>
                <p style={{ color:'#e0fc78', fontSize:52, fontWeight:900, margin:'0 0 4px', lineHeight:1 }}>R$ 97</p>
                <p style={{ color:'rgba(255,255,255,.45)', fontSize:13, margin:'0 0 8px' }}>acesso anual</p>

                <ul style={{ listStyle:'none', textAlign:'left', marginBottom:24, padding:0 }}>
                  {[
                    '100+ ideias de conteúdo no Trello',
                    'Atualizações toda semana (domingo)',
                    'Aula de onboarding no Trello',
                    'Conteúdos virais, de posicionamento e conexão',
                  ].map(item => (
                    <li key={item} style={{ display:'flex', alignItems:'flex-start', gap:10, padding:'7px 0', borderBottom:'1px solid rgba(255,255,255,.08)', fontSize:13, color:'rgba(255,255,255,.8)', lineHeight:1.5 }}>
                      <span style={{ color:'#e0fc78', flexShrink:0, marginTop:1 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <BuyBtn label="Quero o Guia de Conteúdos" style={{ width:'100%', justifyContent:'center', fontSize:16, padding:'16px 24px' }}/>
                <p style={{ color:'rgba(255,255,255,.3)', fontSize:12, margin:'14px 0 0' }}>Acesso imediato após o pagamento.</p>
              </div>
            </div>
          </div>

          {/* ── FAQ ── */}
          <div className="fade-up" style={{ background:'#fff', borderRadius:28, padding:'clamp(32px,4vw,52px)', boxShadow:'0 4px 24px rgba(62,58,83,.07)', marginBottom:2 }}>
            <div style={{ textAlign:'center', marginBottom:32 }}>
              <div className="tag tag-blue" style={{ marginBottom:14, display:'inline-flex' }}>✦ Dúvidas frequentes</div>
              <h2 style={{ fontSize:'clamp(20px,2.5vw,28px)', fontWeight:800, color:'#3e3a53', margin:0 }}>Perguntas e respostas</h2>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:8, maxWidth:720, margin:'0 auto' }}>
              {faqItems.map(item => <FaqItem key={item.q} {...item} />)}
            </div>
          </div>

          {/* ── CTA FINAL ── */}
          <div className="fade-up" style={{ background:'linear-gradient(135deg,#1e2d5a 0%,#3367ca 100%)', borderRadius:'0 0 36px 36px', padding:'clamp(40px,5vw,64px)', textAlign:'center', position:'relative', overflow:'hidden', marginBottom:60 }}>
            <div style={{ position:'absolute', top:-60, left:'50%', transform:'translateX(-50%)', width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle,rgba(224,252,120,.1) 0%,transparent 70%)', filter:'blur(40px)', pointerEvents:'none' }}/>
            <div style={{ position:'relative', zIndex:1 }}>
              <p style={{ color:'rgba(255,255,255,.5)', fontSize:14, fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', marginBottom:14 }}>Você pode continuar sem saber o que postar.</p>
              <h2 style={{ fontSize:'clamp(22px,3vw,38px)', fontWeight:800, color:'#fff', marginBottom:16, lineHeight:1.15 }}>
                Ou pode ter centenas de ideias prontas,<br/>
                <span style={{ color:'#e0fc78' }}>atualizadas todo domingo, por R$ 97.</span>
              </h2>
              <p style={{ fontSize:16, color:'rgba(255,255,255,.6)', maxWidth:480, margin:'0 auto 32px', lineHeight:1.7 }}>
                Dois anos de conteúdo estratégico no seu bolso. Basta abrir e criar.
              </p>
              <BuyBtn label="Quero o Guia de Conteúdos — R$ 97" style={{ fontSize:16, padding:'17px 36px' }}/>
            </div>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .gc-hero-grid  { grid-template-columns: 1fr !important; }
          .gc-forwho     { grid-template-columns: 1fr !important; }
          .gc-sobrecta   { grid-template-columns: 1fr !important; }
          .gc-como       { grid-template-columns: 1fr !important; gap: 28px !important; }
          .gc-incluso    { grid-template-columns: 1fr 1fr !important; }
          .gc-deps       { grid-template-columns: 1fr !important; }
          .gc-hero-img   { display: none !important; }
          .gc-sobre-inner { grid-template-columns: 1fr !important; }
          .gc-sobre-inner > div:first-child { min-height: 220px !important; position: relative !important; }
        }
        @media (max-width: 640px) {
          .gc-incluso    { grid-template-columns: 1fr !important; }
          .gc-prints     { grid-template-columns: 1fr !important; }
          .gc-deps       { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
