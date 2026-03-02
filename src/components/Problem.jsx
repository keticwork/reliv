const PROBLEMS = [
  {
    icon:  '🚪',
    title: 'Client absent',
    text:  "Le pic de commandes a lieu le dimanche (16,2 % des commandes) et le vendredi soir — mais les tournées passent en semaine, en pleine journée. L'absence est structurelle, pas accidentelle.",
  },
  {
    icon:  '🕐',
    title: 'Horaires inadaptés',
    text:  "92 % des acheteurs qui commandent le vendredi souhaitent une livraison soir ou week-end. Les tournées standards ne le permettent pas — Reliv, si.",
    source: 'Observatoire Otterr 2022',
  },
  {
    icon:  '💸',
    title: 'Second passage coûteux',
    text:  "Retour dépôt + nouvelle tournée + gestion administrative = un surcoût opérationnel significatif par colis, multiplié par des millions de tentatives chaque année.",
  },
  {
    icon:  '📉',
    title: 'Image dégradée',
    text:  "Le destinataire associe l'échec à votre marque, pas à votre sous-traitant. Chaque non-livraison est un risque d'avis négatif public, impactant directement votre NPS et votre taux de réachat.",
  },
]

export default function Problem({ id }) {
  return (
    <section id={id} className="snap-section bg-offwhite">
      <div className="container-reliv py-20 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Colonne gauche : texte + stat ─────────── */}
          <div>
            <span className="eyebrow">Le constat</span>
            <h2 className="text-h2 font-heading text-night mb-5">
              Le relais colis :<br />
              une promesse qui coûte cher
            </h2>
            <p className="text-night/70 leading-relaxed mb-8">
              Le dernier kilomètre représente{' '}
              <strong className="text-night">40 à 50 % du coût logistique total</strong>{' '}
              d'une expédition — et c'est là que tout peut se perdre.
              Chaque colis non remis génère un surcoût direct, dégrade l'expérience
              client et nuit durablement à votre image de marque.
              <cite className="source">Source : Xerfi / Place des Industries</cite>
            </p>

            {/* Stat box */}
            <div className="bg-night rounded-xl2 p-8">
              <span className="block font-heading text-6xl font-bold text-green-bright mb-3">
                23 %
              </span>
              <p className="text-white/70 text-sm leading-relaxed">
                des destinataires français rencontrent un problème lors d'une livraison.
                Sur <strong className="text-white">1,7 milliard de colis</strong> livrés
                en 2024, cela représente près de{' '}
                <strong className="text-green-bright">400 millions de situations problématiques</strong>{' '}
                par an.
                <cite className="source">Source : Observatoire Arcep 2024-2025</cite>
              </p>
            </div>
          </div>

          {/* ── Colonne droite : cartes problèmes ─────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROBLEMS.map(({ icon, title, text, source }) => (
              <article
                key={title}
                className="bg-white rounded-xl2 p-6 border-l-4 border-green-bright shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-3xl mb-3 block">{icon}</span>
                <h3 className="font-body font-bold text-night text-base mb-2">{title}</h3>
                <p className="text-night/65 text-sm leading-relaxed">
                  {text}
                  {source && <cite className="source">{source}</cite>}
                </p>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
