const SOLUTIONS = [
  {
    icon:  '🎯',
    title: 'Spécialisation unique',
    text:  "Reliv ne fait qu'une seule chose : prendre en charge les colis en échec et les remettre avec succès. Aucune dispersion. Toute l'énergie concentrée sur votre problème.",
  },
  {
    icon:  '🌙',
    title: 'Disponible quand ça compte',
    text:  "Soir, week-end, jours fériés — nous opérons précisément aux heures où vos destinataires sont chez eux. Fini les rendez-vous manqués à 14 h un mercredi.",
  },
  {
    icon:  '📍',
    title: 'Micro-hub de proximité',
    text:  "Basé au cœur du Luc (83340), notre hub dessert un rayon strict de 5 km. Cette concentration garantit une maîtrise totale du terrain et des délais ultra-courts.",
  },
  {
    icon:  '📞',
    title: 'Contact direct & humain',
    text:  "Avant chaque relivraison, nous contactons le destinataire pour confirmer sa présence et son créneau. Le taux d'échec au deuxième passage devient marginal.",
  },
  {
    icon:  '🚲',
    title: '100 % cyclo-logistique',
    text:  "Vélo-cargo triporteur, vélo + sac pro, ou à pied. Chaque colis est traité avec le vecteur le plus adapté — sans embouteillage, sans contrainte de stationnement.",
  },
  {
    icon:  '🔗',
    title: 'Intégration transparente',
    text:  "Terminaux PAD compatibles, API tracking partenaire, suivi temps réel. Reliv s'intègre dans votre workflow existant sans aucune friction opérationnelle.",
  },
]

export default function Solution({ id }) {
  return (
    <section id={id} className="snap-section bg-night">
      <div className="container-reliv py-20 w-full">

        {/* ── En-tête ────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <span className="eyebrow">Notre réponse</span>
            <h2 className="text-h2 font-heading text-white">
              Reliv : le micro-hub<br />
              spécialisé qui délivre
            </h2>
          </div>
          <p className="text-white/65 leading-relaxed lg:pt-8">
            Là où les grands réseaux saturent et perdent le lien humain avec le destinataire,
            Reliv intervient avec agilité, présence locale et engagement réel.
            Un seul métier, maîtrisé à la perfection.
            <cite className="source">
              Volumes : 4,6 millions de colis traités chaque jour en France — Arcep 2025
            </cite>
          </p>
        </div>

        {/* ── Grille de solutions ─────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map(({ icon, title, text }) => (
            <article
              key={title}
              className="bg-white/5 border border-white/10 rounded-xl2 p-7 hover:bg-white/10 hover:border-green-bright/50 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="block text-3xl mb-4">{icon}</span>
              <h3 className="font-heading text-white text-lg mb-2">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{text}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
