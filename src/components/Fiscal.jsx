const ECO_ITEMS = [
  {
    icon:  '🌿',
    title: '−85 % d\'émissions CO₂ directes',
    text:  "Vs un véhicule thermique équivalent. Un KPI RSE concret, certifiable, exploitable dans vos rapports de durabilité et vos réponses aux appels d'offres publics.",
    source: 'ADEME',
  },
  {
    icon:  '🚘',
    title: 'Malus thermique 2026 : anticipez',
    text:  "Le malus écologique s'applique dès 113 g CO₂/km et la taxe au poids frappe les VUL > 1 500 kg dès 2026. Sous-traiter à Reliv, c'est externaliser ce risque réglementaire.",
  },
  {
    icon:  '📈',
    title: 'Marché cyclo en pleine croissance',
    text:  "83 % des entreprises cyclo-logistiques anticipent une hausse de CA en 2025. +10 % de croissance annuelle pour le last-mile durable.",
    source: 'Observatoire Cyclomobilités 2024',
  },
  {
    icon:  '🏅',
    title: 'Valorisation RSE mesurable',
    text:  "Reliv vous fournit un bilan CO₂ évité par livraison, directement exploitable dans vos rapports de durabilité et vos réponses aux appels d'offres.",
  },
]

export default function Fiscal({ id }) {
  return (
    <section id={id} className="snap-section bg-offwhite">
      <div className="container-reliv py-20 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Colonne gauche : texte + encadré ──────── */}
          <div>
            <span className="eyebrow">Avantage Écologique &amp; Fiscal 2026</span>
            <h2 className="text-h2 font-heading text-night mb-5">
              Cyclo-logistique :<br />
              l'argument qui pèse lourd
            </h2>
            <p className="text-night/70 leading-relaxed mb-8">
              En 2026, le contexte réglementaire pousse à décarboner le dernier kilomètre.
              Malus thermique renforcé, taxe au poids des VUL, ZFE en expansion —
              Reliv vous affranchit de ces contraintes structurellement.
            </p>

            {/* Encadré chiffres ADEME */}
            <div className="bg-green-dark rounded-xl2 p-7 text-white">
              <h3 className="font-heading text-gold-light text-lg mb-3">
                📊 Ce que disent les chiffres
              </h3>
              <p className="text-white/85 text-sm leading-relaxed">
                La cyclo-logistique réduit les émissions CO₂ de{' '}
                <strong className="text-white">85 % par rapport à un véhicule thermique</strong>.
                Dans une étude menée à Bordeaux, les vélos-cargos ont livré{' '}
                <strong className="text-white">15 % plus vite</strong> sur{' '}
                <strong className="text-white">42 % de distance en moins</strong>.
                <cite className="source text-white/50">
                  Source : ADEME / KEDGE Business School / La Poste
                </cite>
              </p>
            </div>
          </div>

          {/* ── Colonne droite : liste avantages ──────── */}
          <div className="flex flex-col gap-5">
            {ECO_ITEMS.map(({ icon, title, text, source }) => (
              <div
                key={title}
                className="flex gap-5 items-start bg-white rounded-xl2 p-5 shadow-card hover:shadow-hover transition-all duration-300"
              >
                <span className="text-3xl flex-shrink-0">{icon}</span>
                <div>
                  <h3 className="font-body font-bold text-night text-base mb-1">{title}</h3>
                  <p className="text-night/65 text-sm leading-relaxed">
                    {text}
                    {source && <cite className="source">{source}</cite>}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
