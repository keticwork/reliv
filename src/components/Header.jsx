import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { id: 'probleme',    label: 'Le Problème'  },
  { id: 'solution',    label: 'Solution'     },
  { id: 'moyens',      label: 'Nos Moyens'   },
  { id: 'hub',         label: 'Hub'          },
  { id: 'partenaires', label: 'Bénéfices'    },
  { id: 'franchise',   label: 'Vision'       },
]

export default function Header({ onNavClick, activeSection }) {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)

  // Fond navbar au scroll
  useEffect(() => {
    const container = document.getElementById('snap-container')
    if (!container) return
    const onScroll = () => setScrolled(container.scrollTop > 60)
    container.addEventListener('scroll', onScroll)
    return () => container.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setMenuOpen(false)
    onNavClick(id)
  }

  return (
    <>
      {/* ── Barre de navigation ─────────────────────── */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled ? 'bg-night/95 backdrop-blur-md shadow-hover py-3' : 'bg-transparent py-5'}
        `}
      >
        <div className="container-reliv flex items-center justify-between gap-6">

          {/* Logo texte */}
          <button
            onClick={() => handleNav('hero')}
            className="flex flex-col leading-none focus-visible:outline-none group"
            aria-label="Reliv — retour en haut"
          >
            <span className="font-heading text-2xl font-extrabold text-white tracking-widest group-hover:text-green-bright transition-colors duration-200">
              RELIV
            </span>
            <span className="text-[0.58rem] font-semibold tracking-[0.18em] uppercase text-green-bright">
              Cyclo-Logistique Premium
            </span>
          </button>

          {/* Navigation desktop */}
          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => handleNav(id)}
                    className={`text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:text-green-bright hover:text-green-bright ${activeSection === id ? 'text-green-bright' : 'text-white/75'}`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA desktop */}
          <button
            onClick={() => handleNav('contact')}
            className="hidden lg:flex btn-primary"
          >
            Devenir Partenaire
          </button>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            className="lg:hidden flex flex-col gap-1.5 p-1 focus-visible:outline-none"
          >
            <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

        </div>
      </header>

      {/* ── Menu mobile overlay ──────────────────────── */}
      <div
        className={`
          fixed inset-0 z-40 bg-night flex flex-col items-center justify-center gap-10
          transition-all duration-300
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleNav(id)}
            className="font-heading text-3xl text-white hover:text-green-bright transition-colors duration-200"
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => handleNav('contact')}
          className="btn-primary mt-4 text-base px-10 py-4"
        >
          Devenir Partenaire →
        </button>
      </div>
    </>
  )
}
