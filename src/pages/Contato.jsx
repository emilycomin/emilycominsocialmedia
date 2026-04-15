import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const WA_PHONE = '5500000000000'

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const serviceOptions = [
  'Gestão de Redes Sociais',
  'Criação de Conteúdo Visual',
  'Copywriting & Legendas',
  'Estratégia Digital',
  'Consultoria de Perfil',
  'Análise & Relatórios',
  'Não sei ainda — quero conversar',
]

export default function Contato() {
  useScrollReveal()

  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  })

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Olá Emily! Meu nome é ${form.name}. 👋\n\n` +
      `💼 Serviço de interesse: ${form.service || 'A definir'}\n\n` +
      `${form.message ? `📝 Mensagem: ${form.message}\n\n` : ''}` +
      `📧 E-mail: ${form.email}\n` +
      `📱 Telefone: ${form.phone || 'Não informado'}`
    )
    window.open(`https://wa.me/${WA_PHONE}?text=${text}`, '_blank')
  }

  const contactInfo = [
    {
      icon: '💬',
      label: 'WhatsApp',
      value: 'Clique para conversar',
      href: `https://wa.me/${WA_PHONE}`,
      color: '#25D366',
      bg: 'rgba(37,211,102,0.08)',
    },
    {
      icon: '📸',
      label: 'Instagram',
      value: '@emilycomin',
      href: 'https://instagram.com/emilycomin',
      color: '#E1306C',
      bg: 'rgba(225,48,108,0.08)',
    },
    {
      icon: '⏰',
      label: 'Horário de atendimento',
      value: 'Seg–Sex · 9h às 18h',
      color: '#3367ca',
      bg: 'rgba(51,103,202,0.08)',
    },
  ]

  return (
    <div style={{ paddingTop: '96px' }}>

      {/* ──────────── HEADER ──────────── */}
      <section className="page-header" style={{ paddingBottom: '60px' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(148,176,237,0.4) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: '-5%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,161,78,0.22) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag tag-blue fade-up" style={{ marginBottom: 20 }}>✦ Contato</div>
          <h1 className="fade-up delay-1">Vamos trabalhar<br />juntas?</h1>
          <p className="fade-up delay-2" style={{ marginTop: 16 }}>
            Preencha o formulário e vou te responder via WhatsApp. Simples assim.
          </p>
        </div>
      </section>

      {/* ──────────── MAIN CONTENT ──────────── */}
      <section style={{ padding: '40px 0 120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'start' }} className="contact-grid">

            {/* ── FORM ── */}
            <div className="card fade-up" style={{ padding: '48px 40px' }}>
              <h2 style={{ fontSize: 22, marginBottom: 8 }}>Enviar mensagem</h2>
              <p style={{ fontSize: 14, color: '#8a88a0', marginBottom: 32 }}>
                Ao enviar, você será redirecionada para o WhatsApp com a mensagem já preenchida.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div className="grid-2" style={{ gap: 20 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Nome *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="form-input"
                      placeholder="Seu nome"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">E-mail *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="form-input"
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid-2" style={{ gap: 20 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">WhatsApp</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-input"
                      placeholder="(00) 00000-0000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="service">Serviço de interesse</label>
                    <select
                      id="service"
                      name="service"
                      className="form-select"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Selecionar serviço</option>
                      {serviceOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Conte um pouco sobre o seu negócio, seus objetivos e o que você está buscando..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '16px 24px',
                    fontSize: 15,
                    background: '#25D366',
                    boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Enviar via WhatsApp
                </button>

                <p style={{ fontSize: 12, color: '#8a88a0', textAlign: 'center' }}>
                  * Campos obrigatórios. Seus dados são usados apenas para entrar em contato.
                </p>
              </form>
            </div>

            {/* ── SIDEBAR ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

              {/* Contact info cards */}
              {contactInfo.map((info, i) => (
                <div
                  key={info.label}
                  className={`card fade-up delay-${i + 1}`}
                  style={{ padding: '24px' }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none' }}
                    >
                      <div style={{ width: 48, height: 48, borderRadius: 14, background: info.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                        {info.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 600, color: '#8a88a0', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>{info.label}</div>
                        <div style={{ fontSize: 15, fontWeight: 600, color: info.color }}>{info.value}</div>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 'auto', color: info.color }}>
                        <path d="M3 8h10M9 4l4 4-4 4" stroke={info.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 14, background: info.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                        {info.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 600, color: '#8a88a0', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>{info.label}</div>
                        <div style={{ fontSize: 15, fontWeight: 600, color: info.color }}>{info.value}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Response time card */}
              <div className="card fade-up delay-4" style={{
                padding: '28px',
                background: 'linear-gradient(135deg, #3e3a53, #4a4670)',
                border: 'none',
              }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>⚡</div>
                <h3 style={{ fontSize: 16, color: 'white', marginBottom: 8 }}>Resposta rápida</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>
                  Costumo responder em até <strong style={{ color: 'white' }}>24 horas</strong>. Em horário comercial, geralmente muito mais rápido!
                </p>
              </div>

              {/* Social proof */}
              <div className="card fade-up delay-5" style={{ padding: '24px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{ display: 'flex' }}>
                    {[1,2,3,4,5].map(s => (
                      <span key={s} style={{ color: '#e8a14e', fontSize: 16 }}>★</span>
                    ))}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#3e3a53' }}>5.0</span>
                </div>
                <p style={{ fontSize: 14, color: '#8a88a0', lineHeight: 1.65, fontStyle: 'italic' }}>
                  "Meu perfil era completamente irregular. Em 2 meses com a Emily, triplicamos o engajamento e minha marca ficou reconhecível."
                </p>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#3367ca', marginTop: 10 }}>— Cliente satisfeita ✓</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
