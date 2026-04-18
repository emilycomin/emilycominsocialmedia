import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const WA_LINK = 'https://wa.me/5500000000000'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  const navLinks = [
    { to: '/solucoes',      label: 'Soluções' },
    { to: '/infoprodutos',  label: 'Infoprodutos' },
    { to: '/sobre',         label: 'Sobre mim' },
    { to: '/contato',       label: 'Contato' },
  ]

  return (
    <>
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        <div style={{
          margin: scrolled ? '8px 16px' : '16px 24px',
          background: 'rgba(255, 253, 245, 0.88)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: scrolled ? '20px' : '24px',
          border: '1px solid rgba(255,255,255,0.9)',
          boxShadow: scrolled
            ? '0 8px 32px rgba(62, 58, 83, 0.12)'
            : '0 4px 16px rgba(62, 58, 83, 0.06)',
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          padding: '0 24px',
        }}>
          {/* Desktop nav */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}>
            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #3367ca 0%, #94b0ed 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ color: 'white', fontWeight: 800, fontSize: 13, letterSpacing: '-0.5px' }}>EC</span>
              </div>
              <span style={{ fontWeight: 700, color: '#3e3a53', fontSize: 15 }}>Emily Comin</span>
            </Link>

            {/* Desktop links */}
            <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  style={({ isActive }) => ({
                    padding: '8px 16px',
                    borderRadius: 100,
                    fontSize: 14,
                    fontWeight: 500,
                    color: isActive ? '#3367ca' : '#3e3a53',
                    background: isActive ? 'rgba(51,103,202,0.08)' : 'transparent',
                    transition: 'all 0.2s',
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary nav-cta-desktop"
                style={{ fontSize: 13, padding: '10px 20px' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="nav-hamburger"
                aria-label="Toggle menu"
                style={{
                  background: 'rgba(62,58,83,0.06)',
                  border: 'none',
                  borderRadius: 10,
                  width: 40,
                  height: 40,
                  display: 'none',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 5,
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                {[0,1,2].map(i => (
                  <span key={i} style={{
                    display: 'block',
                    width: 20,
                    height: 2,
                    background: '#3e3a53',
                    borderRadius: 2,
                    transformOrigin: 'center',
                    transition: 'all 0.3s',
                    transform:
                      menuOpen && i === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                      menuOpen && i === 1 ? 'scaleX(0)' :
                      menuOpen && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }} />
                ))}
              </button>
            </div>
          </nav>

          {/* Mobile menu */}
          {menuOpen && (
            <div style={{
              borderTop: '1px solid rgba(62,58,83,0.08)',
              padding: '16px 0 20px',
            }}>
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  style={({ isActive }) => ({
                    display: 'block',
                    padding: '12px 16px',
                    borderRadius: 12,
                    fontSize: 15,
                    fontWeight: 500,
                    color: isActive ? '#3367ca' : '#3e3a53',
                    background: isActive ? 'rgba(51,103,202,0.08)' : 'transparent',
                    marginBottom: 4,
                    transition: 'all 0.2s',
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
              >
                Falar no WhatsApp
              </a>
            </div>
          )}
        </div>
      </header>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop  { display: none !important; }
          .nav-cta-desktop    { display: none !important; }
          .nav-hamburger      { display: flex !important; }
        }
      `}</style>
    </>
  )
}
