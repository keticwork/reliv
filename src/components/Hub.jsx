const FEATURES = [
  {
    icon:  '🔒',
    title: 'Garage sécurisé',
    text:  "Accès contrôlé, serrure multi-points, espace dédié aux colis en transit. Aucune marchandise ne circule ou ne stationne en dehors du hub sécurisé.",
  },
  {
    icon:  '🌧️',
    title: 'Box étanches & hygrométrie contrôlée',
    text:  "Stockage en caissons étanches à hygrométrie régulée. Idéal pour les produits sensibles : électronique, textiles, alimentaire sec.",
  },
  {
    icon:  '📹',
    title: 'Vidéosurveillance 24h/24 — 7j/7',
    text:  "Système de vidéosurveillance continue. En cas de litige, les enregistrements permettent un arbitrage factuel immédiat, sans ambiguïté.",
  },
  {
    icon:  '📡',
    title: 'API Tracking partenaire',
    text:  "Intégration dans vos systèmes de traçabilité : mise à jour des statuts en temps réel, synchronisation des événements livraison dans votre TMS.",
  },
  {
    icon:  '📱',
    title: 'Terminaux PAD compatibles',
    text:  "Signature électronique, preuve de livraison photo, scan code-barres — tous les standards du secteur sont supportés pour une traçabilité complète.",
  },
  {
    icon:  '🛡️',
    title: 'RC Pro Marchandise Confiée',
    text:  "Chaque colis pris en charge est assuré pendant toute la durée de son traitement — du stockage hub jusqu'à la remise en main propre.",
  },
]

export default function Hub({ id }) {
  return (
    <section id={id} className="snap-section bg-night">
      <div className="container-reliv py-20 w-full">

        {/* ── En-tête centré ─────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">Infrastructure</span>
          <h2 className="text-h2 font-heading text-white mb-4">
            Un hub sécurisé à la hauteur<br />
            de vos marchandises
          </h2>
          <p className="text-white/60 leading-relaxed">
            La marchandise confiée à Reliv est stockée et manipulée dans des conditions
            professionnelles garantissant son intégrité physique à chaque étape.
          </p>
        </div>

        {/* ── Grille 3 × 2 ───────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ icon, title, text }) => (
            <article
              key={title}
              className="bg-white/5 border border-white/8 rounded-xl2 p-7 hover:bg-white/9 hover:border-green-bright/40 transition-all duration-300"
            >
              <span className="block text-3xl mb-4">{icon}</span>
              <h3 className="font-body font-bold text-white text-base mb-2">{title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{text}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
