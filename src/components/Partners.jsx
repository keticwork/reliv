const BENEFITS = [
  {
    icon:    '✅',
    value:   '~100 %',
    title:   'Taux de succès de relivraison',
    text:    "Contact direct systématique avant chaque passage. La relivraison ne se tente pas — elle se confirme avec le destinataire.",
  },
  {
    icon:    '🌿',
    value:   '−85 %',
    title:   'Émissions CO₂ par relivraison',
    text:    "Vs un véhicule thermique équivalent. Un KPI RSE concret, certifiable, exploitable dans vos rapports.",
    source:  'ADEME',
  },
  {
    icon:    '💼',
    value:   '40–50 %',
    title:   'Du coût total : le dernier km',
    text:    "C'est précisément là que Reliv intervient, avec une efficacité démontrée et des coûts maîtrisés.",
    source:  'Xerfi',
  },
  {
    icon:    '🏙️',
    value:   '+Zones',
    title:   'Accès aux zones restreintes',
    text:    "ZFE, centres historiques, zones piétonnes — Reliv accède là où vos véhicules motorisés sont bloqués ou taxés.",
  },
]

export default function Partners({ id }) {
  return (
    <section id={id} className="snap-section bg-green-dark">
      <div className="container-reliv py-20 w-full">

        {/* ── En-tête ────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">Pourquoi nous choisir</span>
          <h2 className="text-h2 font-heading text-white mb-4">
            Des bénéfices concrets<br />
            pour votre réseau
          </h2>
          <p className="text-white/70 leading-relaxed">
            Reliv n'est pas un prestataire de plus — c'est un partenaire de terrain
            qui renforce vos résultats là où votre organisation atteint ses limites.
          </p>
        </div>

        {/* ── Grille bénéfices ────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map(({ icon, value, title, text, source }) => (
            <article
              key={title}
              className="bg-white/10 border border-white/15 rounded-xl2 p-7 text-center hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="block text-4xl mb-3">{icon}</span>
              <span className="block font-heading text-4xl font-bold text-green-bright mb-2">
                {value}
              </span>
              <h3 className="font-body font-bold text-white text-sm mb-2">{title}</h3>
              <p className="text-white/60 text-xs leading-relaxed">
                {text}
                {source && <cite className="source text-white/40">{source}</cite>}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
