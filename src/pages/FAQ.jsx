import { useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const WA_LINK = 'https://wa.me/5551991336280'

const faqs = [
  {
    q: 'Como você funciona diferente de um simples consultor de conteúdo?',
    a: 'A diferença já está na pergunta. Nada aqui é simples. Eu vou além: entendo POR QUÊ não está funcionando e saio com um PLANO PRONTO para implementar. Você não fica com análise vaga e sem saber como aplicar, sai cronograma e direcionamento pensados para os seus objetivos.',
    icon: '💡',
  },
  {
    q: 'Preciso fazer o Diagnóstico antes de contratar outros serviços?',
    a: 'Sim, não existe advinhação aqui. Além de eu sempre trabalhar com dados, eu preciso conhecer o seu negócio, o mercado e a sua essência para poder transformar isso em conteúdo.',
    icon: '🔍',
  },
  {
    q: 'Quanto tempo leva para ver resultados?',
    a: 'Sendo bem honesta, depende. Se você implementar as 16 ideias do diagnóstico, pode começar a ver resultados em 4-6 semanas. Mas o marketing é um jogo de paciência e consistência. O importante é que cada passo te leve para mais perto dos seus objetivos.',
    icon: '⏱️',
  },
  {
    q: 'Você trabalha com todos os nichos ou tem restrições?',
    a: 'Não tenho restrições, já trabalhei com diversos nichos (Astrologia, espiritualidade, advocacia, hotéis, petshop). Porém como sou enfermeira tenho afinidade com nichos da saúde como  psicólogos, nutricionistas, fisioterapeutas, enfermeiros, médicos e etc), mas isso não é uma regra. O que importa é a vontade de crescer e aprender juntos.',
    icon: '🎯',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        background: 'white',
        borderRadius: 20,
        boxShadow: open
          ? '0 8px 40px rgba(51,103,202,0.12)'
          : '0 2px 12px rgba(62,58,83,0.06)',
        border: `1px solid ${open ? 'rgba(51,103,202,0.2)' : 'rgba(62,58,83,0.07)'}`,
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        animationDelay: `${index * 0.08}s`,
      }}
      className="fade-up"
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '24px 28px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <div style={{
          width: 44, height: 44, borderRadius: 14, flexShrink: 0,
          background: open ? 'rgba(51,103,202,0.1)' : 'rgba(248,249,252,0.9)',
          border: `1px solid ${open ? 'rgba(51,103,202,0.15)' : 'rgba(62,58,83,0.06)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20,
          transition: 'all 0.3s',
        }}>
          {faq.icon}
        </div>

        <span style={{
          flex: 1,
          fontSize: 'clamp(15px, 1.8vw, 17px)',
          fontWeight: 700,
          color: open ? '#3367ca' : 'var(--dark)',
          lineHeight: 1.4,
          transition: 'color 0.2s',
        }}>
          {faq.q}
        </span>

        <div style={{
          width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
          background: open ? '#3367ca' : 'rgba(62,58,83,0.06)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.3s',
        }}>
          <svg
            width="14" height="14" viewBox="0 0 24 24"
            fill="none" stroke={open ? 'white' : '#3e3a53'}
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>

      {open && (
        <div style={{
          padding: '0 28px 28px 88px',
          fontSize: 15,
          color: 'var(--text-muted)',
          lineHeight: 1.75,
        }}>
          {faq.a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  useScrollReveal()

  return (
    <div style={{ paddingTop: '96px' }}>

      {/* Hero */}
      <section className="page-header" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: -100, right: -80,
          width: 360, height: 360, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(51,103,202,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -60, left: -60,
          width: 280, height: 280, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,161,78,0.12) 0%, transparent 70%)',
          filter: 'blur(50px)', pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="tag tag-blue fade-up" style={{ display: 'inline-flex' }}>
            ✦ Dúvidas Frequentes
          </div>
          <h1 className="fade-up delay-1" style={{ marginTop: 16, marginBottom: 20 }}>
            Suas perguntas,{' '}
            <span style={{ color: '#3367ca' }}>respondidas com clareza</span>
          </h1>
          <p className="fade-up delay-2" style={{
            fontSize: 'clamp(16px, 2vw, 19px)',
            color: 'var(--text-muted)',
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Antes de tomar uma decisão, é normal ter dúvidas. Aqui estão as mais comuns:
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section" style={{ background: 'rgba(248,249,252,0.5)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions? */}
      <section className="section">
        <div className="container" style={{ maxWidth: 780 }}>
          <div style={{
            background: 'linear-gradient(135deg, #3367ca 0%, #5585d8 100%)',
            borderRadius: 28,
            padding: 'clamp(40px, 6vw, 64px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -50, right: -50,
              width: 200, height: 200, borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)', pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: -30, left: -30,
              width: 150, height: 150, borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)', pointerEvents: 'none',
            }} />

            <div className="fade-up" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>💬</div>
              <h2 style={{ color: 'white', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800, marginBottom: 12 }}>
                Sua dúvida não está aqui?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 16, maxWidth: 400, margin: '0 auto 28px', lineHeight: 1.7 }}>
                Me manda uma mensagem no WhatsApp eu mesma irei te responder.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '14px 28px',
                    background: 'white',
                    color: '#3367ca',
                    borderRadius: 100,
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#3367ca">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Falar no WhatsApp
                </a>
                <Link
                  to="/contato"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '14px 28px',
                    background: 'rgba(255,255,255,0.15)',
                    color: 'white',
                    borderRadius: 100,
                    fontWeight: 600,
                    fontSize: 15,
                    textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.3)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
                >
                  Página de Contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
