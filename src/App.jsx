import { useEffect, useRef, useState } from 'react'
import Header    from './components/Header'
import Hero      from './components/Hero'
import Problem   from './components/Problem'
import Solution  from './components/Solution'
import Vehicles  from './components/Vehicles'
import Expertise from './components/Expertise'
import Hub       from './components/Hub'
import Fiscal    from './components/Fiscal'
import Partners  from './components/Partners'
import Legal     from './components/Legal'
import Franchise from './components/Franchise'
import Contact   from './components/Contact'

// ── Navigation par points latérale ───────────────────────────
const SECTIONS = [
  { id: 'hero',        label: 'Accueil'      },
  { id: 'probleme',    label: 'Le Problème'  },
  { id: 'solution',    label: 'Solution'     },
  { id: 'moyens',      label: 'Nos Moyens'   },
  { id: 'expertise',   label: 'Expertise'    },
  { id: 'hub',         label: 'Hub'          },
  { id: 'fiscal',      label: 'Fiscal 2026'  },
  { id: 'partenaires', label: 'Bénéfices'    },
  { id: 'legal',       label: 'Cadre Légal'  },
  { id: 'franchise',   label: 'Vision'       },
  { id: 'contact',     label: 'Contact'      },
]

function DotNav({ activeSection, onDotClick }) {
  return (
    <nav
      aria-label="Navigation par section"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 max-lg:hidden"
    >
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onDotClick(id)}
          aria-label={`Aller à : ${label}`}
          title={label}
          className={`
            w-2.5 h-2.5 rounded-full transition-all duration-300 border border-white/40
            ${activeSection === id
              ? 'bg-green-bright scale-125 border-green-bright shadow-green'
              : 'bg-white/30 hover:bg-white/70'}
          `}
        />
      ))}
    </nav>
  )
}

// ── App principale ───────────────────────────────────────────
export default function App() {
  const containerRef  = useRef(null)
  const [activeSection, setActiveSection] = useState('hero')

  // Synchronise le dot nav avec la section visible
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { root: container, threshold: 0.5 }
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach(o => o?.disconnect())
  }, [])

  // Scroll programmatique vers une section
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Header fixe (en dehors du snap container) */}
      <Header onNavClick={scrollToSection} activeSection={activeSection} />

      {/* Dot navigation latérale */}
      <DotNav
        activeSection={activeSection}
        onDotClick={scrollToSection}
      />

      {/* Conteneur scroll snap principal */}
      <div
        id="snap-container"
        ref={containerRef}
        data-active="hero"
      >
        <Hero      id="hero"        onCTAClick={() => scrollToSection('contact')} />
        <Problem   id="probleme" />
        <Solution  id="solution" />
        <Vehicles  id="moyens" />
        <Expertise id="expertise" />
        <Hub       id="hub" />
        <Fiscal    id="fiscal" />
        <Partners  id="partenaires" />
        <Legal     id="legal" />
        <Franchise id="franchise" />
        <Contact   id="contact" />
      </div>
    </>
  )
}
