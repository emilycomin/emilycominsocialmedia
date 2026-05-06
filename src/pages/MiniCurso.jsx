import { useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const CURSO_HREF = 'https://pay.hub.la/HpismjGPH34pkEYnw6zR'

const testimonials = [
  { text: 'Eu amei a aula, obrigada por compartilhar todo conhecimento com a gente 😍', name: 'Fabiana Martins', role: 'Social Media' },
  { text: 'Parabéns!! Excelente aula, fácil entendimento, muito obrigada! Se tiver mais, quero participar 😍', name: 'Enfª Stephanie', role: 'Enfermeira' },
  { text: 'Cheguei atrasada, mas deu para entender que o processo é muito tranquilo.', name: 'Renata Vilefort', role: 'Aluna' },
  { text: 'Adorei, e ele fica responsivo com o celular, maravilhoso.', name: 'Renata Vilefort', role: 'Aluna' },
  { text: 'Muito show! Parabéns.', name: 'Stephanie da Fontoura', role: 'Aluna' },
]

const feedbackScreenshots = [
  { src: '/images/emily-feedback-wa-fabiana.png',   alt: 'Feedback Fabiana — WhatsApp' },
  { src: '/images/emily-feedback-wa-stephanie.png', alt: 'Feedback Stephanie — WhatsApp' },
  { src: '/images/emily-feedback-discord-1.png',    alt: 'Feedbacks — Discord' },
  { src: '/images/emily-feedback-discord-2.png',    alt: 'Feedback Renata — Discord' },
  { src: '/images/emily-feedback-discord-3.png',    alt: 'Feedback Renata — Discord' },
  {src: '/images/emily-feedback-discord-5.png',     alt: 'Feedback Thais — Discord' },
]

const faqItems = [
  { q: 'Preciso saber programar?', a: 'Não. Zero. A aula parte do princípio de que você nunca abriu um editor de código. Se sabe usar o celular e o WhatsApp, consegue acompanhar.' },
  { q: 'Funciona pra qualquer tipo de página?', a: 'Sim. Página de vendas, portfólio, site institucional, página de captura. O material de apoio te ajuda a organizar as informações independente do tipo.' },
  { q: 'A aula é ao vivo ou gravada?', a: 'Gravada. Você assiste no seu ritmo, pausa, volta, faz junto. Sem horário fixo.' },
  { q: 'Quanto tempo leva pra criar uma página?', a: 'Depende de quanto conteúdo você já tem organizado. Com o material de apoio preenchido, dá pra ter uma página no ar em uma tarde.' },
  { q: 'E se eu não gostar do resultado?', a: 'Você pode ajustar direto na ferramenta, com comandos em português. A IA refaz quantas vezes você pedir.' },
  { q: 'Qual ferramenta é usada?', a: 'Lovable. Ela é gratuita no plano básico pra criar e publicar páginas.' },
  { q: 'Tenho acesso por quanto tempo?', a: 'Vitalício. A aula e o material ficam disponíveis pra sempre.' },
]

function FaqItem({ q, a }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      onClick={() => setIsOpen(v => !v)}
      style={{
        background: '#fff', borderRadius: 14, padding: '18px 22px',
        border: `1.5px solid ${isOpen ? 'rgba(59,31,122,0.25)' : 'rgba(62,58,83,0.09)'}`,
        cursor: 'pointer', transition: 'border-color .2s',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <p style={{ fontWeight: 700, fontSize: 15, color: '#3e3a53', margin: 0 }}>{q}</p>
        <span style={{
          width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
          background: isOpen ? '#3b1f7a' : 'rgba(62,58,83,0.07)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background .2s',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d={isOpen ? 'M2 8l4-4 4 4' : 'M2 4l4 4 4-4'} stroke={isOpen ? '#e3fc87' : '#3e3a53'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      {isOpen && <p style={{ fontSize: 14, color: '#8a88a0', lineHeight: 1.7, margin: '12px 0 0' }}>{a}</p>}
    </div>
  )
}

const BuyBtn = ({ label = 'Quero criar minha página', style: extraStyle = {} }) => (
  <a
    href={CURSO_HREF}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '15px 30px', background: '#e3fc87', color: '#1a1440',
      borderRadius: 100, fontWeight: 800, fontSize: 15,
      textDecoration: 'none', boxShadow: '0 8px 28px rgba(227,252,135,.35)',
      transition: 'all .2s', ...extraStyle,
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(227,252,135,.45)' }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(227,252,135,.35)' }}
  >
    {label}
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="#1a1440" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </a>
)

export default function MiniCurso() {
  useScrollReveal()

  return (
    <div style={{ paddingTop: '96px', background: '#f4f3ee' }}>

      {/* ── HERO ── */}
      <section style={{ padding: '60px 0 0' }}>
        <div className="container">
          <div className="fade-up" style={{
            background: 'linear-gradient(135deg, #1a1440 0%, #2d2060 50%, #3b1f7a 100%)',
            borderRadius: 36, overflow: 'hidden', position: 'relative',
            marginBottom: 2,
          }}>
            {/* Blobs */}
            <div style={{ position:'absolute', top:-80, right:-80, width:360, height:360, borderRadius:'50%', background:'radial-gradient(circle,rgba(200,180,255,.18) 0%,transparent 70%)', filter:'blur(50px)', pointerEvents:'none' }}/>
            <div style={{ position:'absolute', bottom:-60, left:-60, width:280, height:280, borderRadius:'50%', background:'radial-gradient(circle,rgba(227,252,135,.12) 0%,transparent 70%)', filter:'blur(50px)', pointerEvents:'none' }}/>
            <div style={{ position:'absolute', top:'40%', left:'35%', width:200, height:200, borderRadius:'50%', background:'radial-gradient(circle,rgba(148,176,237,.1) 0%,transparent 70%)', filter:'blur(60px)', pointerEvents:'none' }}/>

            <div style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:0, position:'relative', zIndex:1 }}>
              {/* Left */}
              <div style={{ padding:'clamp(36px,5vw,64px)' }}>
                <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginBottom:24 }}>
                  <span style={{ background:'#e3fc87', color:'#1a1440', borderRadius:100, padding:'5px 16px', fontSize:11, fontWeight:800, letterSpacing:'.06em', textTransform:'uppercase' }}>⚡ Novo</span>
                  <span style={{ background:'rgba(255,255,255,.1)', color:'rgba(255,255,255,.8)', borderRadius:100, padding:'5px 14px', fontSize:12, fontWeight:600, border:'1px solid rgba(255,255,255,.18)' }}>Mini Curso · Gravado</span>
                  <span style={{ background:'rgba(255,255,255,.1)', color:'rgba(255,255,255,.8)', borderRadius:100, padding:'5px 14px', fontSize:12, fontWeight:600, border:'1px solid rgba(255,255,255,.18)' }}>Acesso Vitalício</span>
                </div>

                <h1 style={{ fontSize:'clamp(24px,3.5vw,48px)', fontWeight:800, color:'#fff', lineHeight:1.1, marginBottom:18 }}>
                  Você não precisa saber programar pra ter uma página profissional na internet.{' '}
                  <span style={{ color:'#e3fc87' }}>Precisa de uma tarde livre e dessa aula.</span>
                </h1>

                <p style={{ fontSize:16, color:'rgba(255,255,255,.7)', lineHeight:1.75, marginBottom:32, maxWidth:580 }}>
                  Mini curso prático, gravado, zero slides. Te ensina a criar qualquer tipo de página usando inteligência artificial — mesmo que você nunca tenha aberto um editor de código na vida.
                </p>

                <div style={{ display:'flex', gap:14, flexWrap:'wrap', alignItems:'center' }}>
                  <BuyBtn />
                  <div>
                    <p style={{ color:'#e3fc87', fontWeight:900, fontSize:28, margin:0, lineHeight:1 }}>R$ 27</p>
                    <p style={{ color:'rgba(255,255,255,.5)', fontSize:12, margin:0 }}>pagamento único</p>
                  </div>
                </div>
              </div>

              {/* Right — foto */}
              <div style={{ width:260, background:'rgba(255,255,255,.05)', borderLeft:'1px solid rgba(255,255,255,.1)', position:'relative', overflow:'hidden' }} className="mc-hero-img">
                <img src="/images/emily-curso-jardim.jpg" alt="Emily Comin trabalhando"
                  style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', display:'block' }}
                />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, rgba(26,20,64,.35) 0%, transparent 60%)' }}/>
              </div>
            </div>
          </div>

          {/* ── ABERTURA ── */}
          <div className="fade-up" style={{ background:'#fff', borderRadius:28, padding:'clamp(32px,4vw,52px)', boxShadow:'0 4px 24px rgba(62,58,83,.07)', marginBottom:2, borderTop:'4px solid #e3fc87' }}>
            <p style={{ fontSize:'clamp(18px,2.5vw,24px)', fontWeight:700, color:'#3e3a53', marginBottom:16, fontStyle:'italic' }}>
              "Eu não sei mexer em nada de tecnologia."
            </p>
            <p style={{ fontSize:16, color:'#8a88a0', lineHeight:1.8, marginBottom:14, maxWidth:700 }}>
              Se você já disse isso, lê até o fim. Porque essa frase é o motivo exato pelo qual esse mini curso existe.
            </p>
            <p style={{ fontSize:16, color:'#8a88a0', lineHeight:1.8, marginBottom:14, maxWidth:700 }}>
              Você não precisa aprender a programar. Não precisa entender HTML, CSS ou qualquer sigla que te dê preguiça só de ler. O que você precisa é saber o que quer comunicar.{' '}
              <strong style={{ color:'#3e3a53' }}>A inteligência artificial faz o resto.</strong>
            </p>
            <p style={{ fontSize:16, color:'#8a88a0', lineHeight:1.8, maxWidth:700, margin:0 }}>
              O trabalho pesado — layout, código, responsividade — quem faz é a IA. Seu trabalho é saber o que colocar lá. E pra isso, tem material de apoio que te guia passo a passo.
            </p>
          </div>

          {/* ── PARA QUEM É ── */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:2, marginBottom:2 }} className="mc-forwho">
            <div style={{ background:'#fff', borderRadius:'0 0 0 28px', padding:'clamp(28px,3.5vw,48px)', boxShadow:'0 4px 24px rgba(62,58,83,.07)' }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(34,197,94,.1)', color:'#16a34a', borderRadius:100, padding:'6px 16px', fontSize:13, fontWeight:700, marginBottom:20 }}>
                ✓ Esse mini curso é pra você se:
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
                {[
                  'Você tem um negócio ou serviço — mas não tem página na internet. Ou tem uma desatualizada que não representa mais o que você faz.',
                  'Você já pensou em contratar alguém, mas o orçamento não fazia sentido. Ou contratou, ficou dependente, e se cansou.',
                  'Você quer autonomia: colocar no ar uma página de vendas, um portfólio ou um site institucional sem depender de ninguém.',
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
                  Você já programa ou já trabalha com desenvolvimento web. Esse curso é pra quem parte do zero absoluto em tecnologia.
                </p>
              </div>
              <div style={{ paddingTop:24, borderTop:'1px solid rgba(62,58,83,.08)' }}>
                <p style={{ fontSize:13, fontWeight:800, color:'#3e3a53', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:14 }}>O problema real</p>
                <p style={{ fontSize:14, color:'#8a88a0', lineHeight:1.75, margin:'0 0 12px' }}>
                  Até agora, as opções eram duas: pagar caro por uma página ou aprender a programar. As duas opções travam quem só quer resolver e seguir tocando o negócio.
                </p>
                <p style={{ fontSize:14, color:'#3e3a53', fontWeight:600, lineHeight:1.7, margin:0 }}>
                  Ter uma página na internet não é luxo. É o mínimo pra quem leva o próprio negócio a sério.
                </p>
              </div>
            </div>
          </div>

          {/* ── O MÉTODO ── */}
          <div className="fade-up" style={{ background:'#fff', borderRadius:28, padding:'clamp(32px,4vw,52px)', boxShadow:'0 4px 24px rgba(62,58,83,.07)', marginBottom:2 }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'center' }} className="mc-metodo">
              <div>
                <div className="tag tag-blue" style={{ marginBottom:20, display:'inline-flex' }}>✦ Como funciona</div>
                <h2 style={{ fontSize:'clamp(20px,2.5vw,30px)', fontWeight:800, color:'#3e3a53', marginBottom:16, lineHeight:1.2 }}>
                  A aula é prática. Gravada.<br />Sem slides, sem enrolação.
                </h2>
                <p style={{ fontSize:15, color:'#8a88a0', lineHeight:1.8, margin:0 }}>
                  Você assiste e faz junto, no seu ritmo. O processo é simples — e o resultado aparece na mesma tarde.
                </p>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
                {[
                  { num:'01', title:'Organize as informações', desc:'O material de apoio te guia com perguntas objetivas: o que você faz, pra quem, e o que quer que a pessoa faça ao chegar na página. Sem conhecimento técnico.' },
                  { num:'02', title:'A IA monta a página', desc:'Você coloca as informações na ferramenta (Lovable) e ela cria o layout, a estrutura e a responsividade — tudo pronto pra funcionar no celular e no computador.' },
                  { num:'03', title:'Ajusta e publica', desc:'Não gostou de algo? Ajusta com comandos simples em português. Sem código. A IA refaz quantas vezes você pedir.' },
                ].map(step => (
                  <div key={step.num} style={{ display:'flex', gap:16, alignItems:'flex-start' }}>
                    <div style={{ width:36, height:36, borderRadius:10, background:'linear-gradient(135deg,#1a1440,#2d2060)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:'#e3fc87', fontWeight:800, fontSize:12 }}>{step.num}</div>
                    <div>
                      <p style={{ fontWeight:700, fontSize:14, color:'#3e3a53', margin:'0 0 4px' }}>{step.title}</p>
                      <p style={{ fontSize:13, color:'#8a88a0', lineHeight:1.65, margin:0 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── O QUE ESTÁ INCLUSO ── */}
          <div className="fade-up" style={{ background:'linear-gradient(135deg,#f8f6ff,#f0ecff)', borderRadius:28, padding:'clamp(32px,4vw,52px)', boxShadow:'0 4px 24px rgba(62,58,83,.07)', marginBottom:2, border:'1px solid rgba(109,79,200,.12)' }}>
            <div style={{ textAlign:'center', marginBottom:36 }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(109,79,200,.1)', color:'#5b3fbf', borderRadius:100, padding:'6px 18px', fontSize:13, fontWeight:700, marginBottom:14 }}>✦ O que está incluso</div>
              <h2 style={{ fontSize:'clamp(20px,2.5vw,28px)', fontWeight:800, color:'#3e3a53', margin:0 }}>Tudo que você precisa pra sair do zero</h2>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }} className="mc-incluso">
              {[
                { icon:'🎬', title:'Aula prática gravada', desc:'Passo a passo completo, do zero à página no ar. Assiste quando quiser, quantas vezes precisar.' },
                { icon:'📋', title:'Material de apoio', desc:'Roteiro com perguntas objetivas que organizam tudo que você precisa colocar na página — independente do tipo.' },
                { icon:'♾️', title:'Acesso vitalício', desc:'A aula e o material ficam disponíveis pra sempre. Sem prazo, sem renovação.' },
              ].map(item => (
                <div key={item.title} style={{ background:'#fff', borderRadius:18, padding:'24px 22px', boxShadow:'0 2px 12px rgba(62,58,83,.06)', textAlign:'center' }}>
                  <div style={{ fontSize:36, marginBottom:12 }}>{item.icon}</div>
                  <p style={{ fontWeight:700, fontSize:15, color:'#3e3a53', marginBottom:8 }}>{item.title}</p>
                  <p style={{ fontSize:13, color:'#8a88a0', lineHeight:1.65, margin:0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── DEPOIMENTOS ── */}
          <div className="fade-up" style={{ background:'#fff', borderRadius:28, padding:'clamp(32px,4vw,52px)', boxShadow:'0 4px 24px rgba(62,58,83,.07)', marginBottom:2 }}>
            <div style={{ textAlign:'center', marginBottom:36 }}>
              <div className="tag tag-amber" style={{ marginBottom:14, display:'inline-flex' }}>✦ Quem fez, fala</div>
              <h2 style={{ fontSize:'clamp(20px,2.5vw,28px)', fontWeight:800, color:'#3e3a53', marginBottom:10 }}>Resultados reais de quem fez a aula</h2>
              <p style={{ fontSize:15, color:'#8a88a0', margin:0 }}>Prints reais, sem edição.</p>
            </div>

            {/* Screenshots */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:12, marginBottom:32 }}>
              {feedbackScreenshots.map((s, i) => (
                <div key={i} style={{ borderRadius:16, overflow:'hidden', boxShadow:'0 4px 20px rgba(62,58,83,.1)', border:'1px solid rgba(62,58,83,.07)', background:'#f5f5f5' }}>
                  <img src={s.src} alt={s.alt} style={{ width:'100%', height:'auto', display:'block' }}/>
                </div>
              ))}
              <div style={{ background:'linear-gradient(135deg,#1a1440,#2d2060)', borderRadius:16, padding:'24px 20px', display:'flex', flexDirection:'column', justifyContent:'center', minHeight:120 }}>
                <div style={{ color:'#e3fc87', fontSize:22, marginBottom:10, lineHeight:1 }}>✦</div>
                <p style={{ fontSize:14, color:'rgba(255,255,255,.8)', lineHeight:1.7, marginBottom:12, fontStyle:'italic' }}>
                  Todas as páginas que uso no meu próprio negócio foram criadas com esse mesmo método. É o que eu faço no dia a dia.
                </p>
                <p style={{ fontSize:12, fontWeight:700, color:'#e3fc87', margin:0 }}>— Emily Comin</p>
              </div>
            </div>

            <div style={{ width:'100%', height:1, background:'linear-gradient(90deg,transparent,rgba(62,58,83,.08),transparent)', margin:'4px 0 28px' }}/>

            {/* Quote cards */}
            
          </div>

          {/* ── SOBRE + CTA PREÇO ── */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:2, marginBottom:2 }} className="mc-sobrecta">
            {/* Sobre */}
            <div style={{ background:'rgba(248,249,252,.8)', borderRadius:'0 0 0 28px', boxShadow:'0 4px 24px rgba(62,58,83,.07)', overflow:'hidden', display:'grid', gridTemplateColumns:'1fr 1fr' }} className="mc-sobre-inner">
              <div style={{ position:'relative', minHeight:280, overflow:'hidden' }}>
                <img src="/images/emily-curso-sorrindo.jpg" alt="Emily Comin"
                  style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', display:'block', position:'absolute', inset:0 }}
                />
              </div>
              <div style={{ padding:'clamp(24px,3vw,40px)' }}>
                <div className="tag tag-dark" style={{ marginBottom:16, display:'inline-flex' }}>✦ Quem sou eu</div>
                <h2 style={{ fontSize:'clamp(17px,1.8vw,22px)', fontWeight:800, color:'#3e3a53', marginBottom:12, lineHeight:1.2 }}>Sou a Emily.</h2>
                <p style={{ fontSize:13, color:'#8a88a0', lineHeight:1.8, marginBottom:10 }}>
                  Trabalho com estratégia de conteúdo e programação pra empresas e prestadoras de serviços. Uso IA no meu trabalho todos os dias e inclusive pra criar as minhas próprias páginas. 
                </p>
                <p style={{ fontSize:13, color:'#8a88a0', lineHeight:1.8, margin:0 }}>
                  Esse mini curso nasceu de uma pergunta que eu ouvia toda semana:{' '}
                  <em style={{ color:'#3e3a53', fontWeight:600 }}>"Emily, como tu fez essa página?"</em>{' '}
                  A resposta era tão simples que virou aula.
                </p>
              </div>
            </div>

            {/* CTA Preço */}
            <div style={{ background:'linear-gradient(135deg,#1a1440 0%,#2d2060 100%)', borderRadius:'0 0 28px 0', padding:'clamp(28px,3.5vw,48px)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', gap:20, position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:-40, right:-40, width:160, height:160, borderRadius:'50%', background:'radial-gradient(circle,rgba(227,252,135,.12) 0%,transparent 70%)', filter:'blur(30px)', pointerEvents:'none' }}/>
              <div style={{ position:'relative', zIndex:1, width:'100%' }}>
                <p style={{ color:'rgba(255,255,255,.5)', fontSize:13, fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase', margin:'0 0 8px' }}>Investimento</p>
                <p style={{ color:'#e3fc87', fontSize:52, fontWeight:900, margin:'0 0 4px', lineHeight:1 }}>R$ 27</p>
                <p style={{ color:'rgba(255,255,255,.45)', fontSize:13, margin:'0 0 24px' }}>pagamento único · acesso vitalício</p>
                <BuyBtn label="Quero criar minha página" style={{ width:'100%', justifyContent:'center', fontSize:16, padding:'16px 24px' }}/>
                <p style={{ color:'rgba(255,255,255,.3)', fontSize:12, margin:'14px 0 0' }}>Menos que um almoço. Acesso imediato.</p>
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
          <div className="fade-up" style={{ background:'linear-gradient(135deg,#1a1440 0%,#3b1f7a 100%)', borderRadius:'0 0 36px 36px', padding:'clamp(40px,5vw,64px)', textAlign:'center', position:'relative', overflow:'hidden', marginBottom:60 }}>
            <div style={{ position:'absolute', top:-60, left:'50%', transform:'translateX(-50%)', width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle,rgba(227,252,135,.1) 0%,transparent 70%)', filter:'blur(40px)', pointerEvents:'none' }}/>
            <div style={{ position:'relative', zIndex:1 }}>
              <p style={{ color:'rgba(255,255,255,.5)', fontSize:14, fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', marginBottom:14 }}>Você pode continuar adiando.</p>
              <h2 style={{ fontSize:'clamp(22px,3vw,38px)', fontWeight:800, color:'#fff', marginBottom:16, lineHeight:1.15 }}>
                Ou pode resolver isso hoje,<br />
                <span style={{ color:'#e3fc87' }}>numa tarde, por vinte e sete reais.</span>
              </h2>
              <p style={{ fontSize:16, color:'rgba(255,255,255,.6)', maxWidth:480, margin:'0 auto 32px', lineHeight:1.7 }}>
                A página não precisa ser perfeita, ela precisa existir.
              </p>
              <BuyBtn label="Quero criar minha página — R$ 27" style={{ fontSize:16, padding:'17px 36px' }}/>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .mc-forwho       { grid-template-columns: 1fr !important; }
          .mc-sobrecta     { grid-template-columns: 1fr !important; }
          .mc-metodo       { grid-template-columns: 1fr !important; gap: 28px !important; }
          .mc-incluso      { grid-template-columns: 1fr !important; }
          .mc-hero-img     { display: none !important; }
          .mc-sobre-inner  { grid-template-columns: 1fr !important; }
          .mc-sobre-inner > div:first-child { min-height: 220px !important; position: relative !important; }
        }
        @media (max-width: 768px) {
          .mc-incluso { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .mc-incluso { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
