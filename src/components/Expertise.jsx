const POINTS = [
  {
    icon:  '🚗',
    title: 'Tous véhicules, tous secteurs',
    text:  "VL, PL, moto, vélo — 20 ans de livraison terrain dans des environnements variés : résidentiel, commercial, industriel, rural. Chaque configuration a été anticipée, gérée, maîtrisée.",
  },
  {
    icon:  '📍',
    title: 'Connaissance parfaite du secteur',
    text:  "Chaque rue, chaque résidence, chaque accès de la commune du Luc et de son rayon de 5 km est connu. Pas de mauvaise surprise, pas de colis perdu faute d'orientation.",
  },
  {
    icon:  '🤝',
    title: 'Sens du contact client',
    text:  "Ponctualité, courtoisie et écoute sont les piliers de notre relation avec chaque destinataire — et le reflet direct de votre marque sur le terrain.",
  },
  {
    icon:  '⚡',
    title: 'Réactivité opérationnelle',
    text:  "Réception du colis en échec, contact destinataire, relivraison confirmée et exécutée : le tout coordonné dès le lendemain soir ou le week-end suivant.",
  },
]

export default function Expertise({ id }) {
  return (
    <section id={id} className="snap-section bg-offwhite">
      <div className="container-reliv py-20 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Colonne gauche : texte + points ───────── */}
          <div>
            <span className="eyebrow">Expertise &amp; Terrain</span>
            <h2 className="text-h2 font-heading text-night mb-5">
              Le Luc, on le connaît<br />
              centimètre par centimètre
            </h2>
            <p className="text-night/70 leading-relaxed mb-10">
              Une expertise terrain acquise sur 20 ans, tous véhicules et tous secteurs confondus.
              Cette connaissance intime du territoire n'est pas un avantage accessoire
              — c'est le fondement de notre efficacité.
            </p>

            <div className="flex flex-col gap-7">
              {POINTS.map(({ icon, title, text }) => (
                <div key={title} className="flex gap-5 items-start">
                  <span className="w-12 h-12 rounded-xl flex items-center justify-center bg-green-bright/10 text-xl flex-shrink-0">
                    {icon}
                  </span>
                  <div>
                    <h3 className="font-body font-bold text-night mb-1">{title}</h3>
                    <p className="text-night/65 text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Colonne droite : badge 20 ans ─────────── */}
          <div className="relative flex items-center justify-center">

            {/* Cercle décoratif fond */}
            <div className="absolute w-72 h-72 rounded-full bg-green-bright/8 blur-2xl" />

            {/* Carte centrale */}
            <div className="relative bg-night rounded-xl3 p-12 text-center shadow-hover">
              <span className="font-heading text-[6rem] font-bold text-green-bright leading-none block">
                20
              </span>
              <span className="font-body font-semibold text-white/80 text-lg tracking-wide">
                ans d'expérience
              </span>
              <span className="block text-white/50 text-sm mt-1">terrain · tous véhicules</span>

              {/* Petits badges */}
              <div className="flex flex-wrap gap-2 justify-center mt-6">
                {['VL', 'PL', 'Moto', 'Vélo', 'À pied'].map((v) => (
                  <span
                    key={v}
                    className="bg-green-bright/15 text-green-bright text-xs font-bold px-3 py-1 rounded-full"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
