const STEPS = [
  {
    num:   '1',
    title: 'Lancement au Luc (83340)',
    text:  "Démarrage maîtrisé, concentration totale sur un périmètre restreint. Validation du modèle opérationnel et établissement des partenariats fondateurs.",
  },
  {
    num:   '2',
    title: 'Preuve de concept & indicateurs',
    text:  "Consolidation des KPIs : taux de succès, satisfaction partenaire, temps moyen de relivraison, NPS destinataire. Constitution du dossier franchise.",
  },
  {
    num:   '3',
    title: 'Déploiement zones stratégiques',
    text:  "Sélection de secteurs à fort taux d'échec, densité périurbaine et accessibilité cyclo confirmée. Ouverture de micro-hubs Reliv en franchise.",
  },
  {
    num:   '4',
    title: 'Réseau national Reliv',
    text:  "Un réseau de micro-hubs indépendants partageant la marque, le savoir-faire et les contrats-cadres partenaires. Une réponse nationale, une exécution ultra-locale.",
  },
]

const ZONES = ['Le Luc (83) ✓', 'Zones PACA', 'Occitanie', 'Auvergne-Rhône-Alpes', 'Bassin parisien', '+ selon analyse']

export default function Franchise({ id }) {
  return (
    <section id={id} className="snap-section bg-offwhite">
      <div className="container-reliv py-20 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* ── Colonne gauche : texte + étapes ───────── */}
          <div>
            <span className="eyebrow">Vision long terme</span>
            <h2 className="text-h2 font-heading text-night mb-5">
              De Le Luc<br />
              à toute la France
            </h2>
            <p className="text-night/70 leading-relaxed mb-10">
              Reliv naît local, ancré dans son territoire.
              Mais le modèle est conçu pour s'exporter, secteur par secteur,
              sur les zones où la relivraison génère le plus de valeur ajoutée.
            </p>

            {/* Timeline */}
            <div className="relative flex flex-col gap-0">
              {STEPS.map(({ num, title, text }, i) => (
                <div key={num} className="flex gap-5 relative">
                  {/* Ligne verticale (sauf dernier) */}
                  {i < STEPS.length - 1 && (
                    <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gradient-to-b from-green-bright to-transparent" />
                  )}
                  {/* Numéro */}
                  <span className="w-10 h-10 rounded-full bg-green-dark text-white font-heading font-bold text-base flex items-center justify-center flex-shrink-0 relative z-10">
                    {num}
                  </span>
                  {/* Contenu */}
                  <div className="pb-8">
                    <h3 className="font-body font-bold text-night mb-1">{title}</h3>
                    <p className="text-night/65 text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Colonne droite : carte zones ──────────── */}
          <div className="bg-gradient-to-br from-green-dark/10 to-green-bright/5 border-2 border-dashed border-green-base/40 rounded-xl3 p-10 text-center">
            <span className="text-7xl block mb-5">🗺️</span>
            <h3 className="font-heading text-green-dark text-2xl mb-3">
              Zones cibles de déploiement
            </h3>
            <p className="text-night/65 text-sm leading-relaxed mb-6 max-w-xs mx-auto">
              Secteurs périurbains à fort volume e-commerce,
              taux d'échec supérieur à 25 %,
              accessibilité cyclable confirmée.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {ZONES.map((zone) => (
                <span
                  key={zone}
                  className="bg-green-dark text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  {zone}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
