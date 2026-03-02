const STATS = [
  { value: '1,7 Md',  label: 'Colis livrés / an en France' },
  { value: '23 %',    label: 'Rencontrent un échec'         },
  { value: '−85 %',   label: 'CO₂ vs thermique'            },
  { value: '7 j / 7', label: 'Soir & week-end'             },
]

export default function Hero({ id, onCTAClick }) {
  return (
    <section
      id={id}
      className="snap-section bg-night relative"
    >
      {/* Fond dégradé décoratif */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 70% 40%, rgba(0,168,120,0.12) 0%, transparent 55%), ' +
            'radial-gradient(ellipse at 20% 80%, rgba(42,96,65,0.08) 0%, transparent 45%)',
        }}
      />

      {/* Grille décorative subtile */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,1) 60px, rgba(255,255,255,1) 61px), ' +
            'repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,1) 60px, rgba(255,255,255,1) 61px)',
        }}
      />

      <div className="container-reliv relative z-10 py-20">

        {/* Badge "hub actif" */}
        <div className="inline-flex items-center gap-2.5 bg-green-bright/10 border border-green-bright/30 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-green-bright rounded-full animate-pulse-dot" />
          <span className="text-xs font-bold tracking-widest uppercase text-green-bright">
            Micro-Hub Actif — Le Luc, Var (83340)
          </span>
        </div>

        {/* Titre principal */}
        <h1 className="text-hero text-white mb-6 max-w-3xl">
          Vos colis en échec.{' '}
          <em className="not-italic text-green-bright">
            Relivrés. Toujours.
          </em>
        </h1>

        {/* Sous-titre */}
        <p className="text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
          Reliv transforme les tentatives de livraison ratées en succès garantis.
          Service 100 % cyclo-logistique, disponible soir et week-end,
          dans un rayon de 5&nbsp;km autour du Luc.
          La relivraison premium au service de votre image de marque.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 items-center mb-16">
          <button onClick={onCTAClick} className="btn-primary text-base px-10 py-4">
            Devenir Partenaire →
          </button>
          <button
            onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline text-base px-10 py-4"
          >
            Découvrir notre approche
          </button>
        </div>

        {/* Statistiques clés */}
        <div className="flex flex-wrap gap-10 pt-8 border-t border-white/10">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <strong className="font-heading text-3xl font-bold text-green-bright">
                {value}
              </strong>
              <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Flèche vers section suivante */}
      <button
        onClick={() => document.getElementById('probleme')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Section suivante"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-green-bright transition-colors duration-300 animate-bounce"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>

    </section>
  )
}
