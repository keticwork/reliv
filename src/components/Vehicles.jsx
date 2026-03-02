/**
 * Vehicles.jsx — Nos Moyens de Livraison
 *
 * Uniquement colis < 15 kg (pas de vélo-cargo box gros volume).
 *
 * ── INTÉGRER LES IMAGES ──────────────────────────────────────
 * Place tes photos dans : src/assets/images/
 * Puis importe-les en haut du fichier et remplace les <div> placeholder :
 *
 *   import imgTriporteur from '../assets/images/springare-cargo.jpg'
 *   import imgSac        from '../assets/images/hpa-backpack.jpg'
 *   import imgPied       from '../assets/images/own-team.jpg'
 *
 * Remplace le bloc :
 *   <div className="vehicle-placeholder ..."> ... </div>
 * Par :
 *   <img src={imgTriporteur} alt="..." className="w-full h-full object-cover" />
 * ──────────────────────────────────────────────────────────────
 */

const VEHICLES = [
  {
    // img: imgTriporteur,       ← décommenter quand la photo est disponible
    imgPlaceholder: { emoji: '🚲', label: 'Vélo-cargo triporteur', hint: 'Photo Springare' },
    tag:    'Multi-colis · < 15 kg chacun',
    title:  'Vélo-cargo triporteur',
    text:   "Idéal pour les tournées de plusieurs colis sur un périmètre dense. Grande capacité de chargement, excellente stabilité, très agile en milieu urbain et dans les zones résidentielles. Le choix optimal pour les lots e-commerce et les envois groupés.",
    specs:  ['Multi-destinataires', 'Grande capacité', 'Très agile en ville'],
    bg:     'from-night to-green-dark',
  },
  {
    // img: imgSac,
    imgPlaceholder: { emoji: '🎒', label: 'Vélo + sac professionnel', hint: 'Photo hPa' },
    tag:    'Petits colis · < 15 kg',
    title:  'Vélo + sac professionnel',
    text:   "Pour les petits colis, documents et envois légers. Le sac grand volume permet de couvrir plusieurs relivraisons en une seule tournée rapide, avec une empreinte au sol minimale et une discrétion maximale dans les espaces résidentiels.",
    specs:  ['Léger & rapide', 'Multi-colis', 'Empreinte minimale'],
    bg:     'from-green-dark to-green-base',
  },
  {
    // img: imgPied,
    imgPlaceholder: { emoji: '🚶', label: 'Livraison à pied', hint: 'Photo OWN' },
    tag:    'Zones piétonnes · Accès total',
    title:  'Livraison à pied',
    text:   "Centres historiques, ruelles, halls d'immeubles sécurisés, zones à trafic limité — là où aucun véhicule ne peut accéder, Reliv passe. Une capacité unique qui ouvre des territoires de livraison inédits pour votre réseau.",
    specs:  ['Accès illimité', 'Zones piétonnes', 'ZFE compatibles'],
    bg:     'from-night-mid to-night',
  },
]

export default function Vehicles({ id }) {
  return (
    <section id={id} className="snap-section bg-white">
      <div className="container-reliv py-20 w-full">

        {/* ── En-tête ────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">Notre flotte</span>
          <h2 className="text-h2 font-heading text-night mb-4">
            Le bon vecteur pour chaque colis{' '}
            <span className="text-green-bright">&lt; 15 kg</span>
          </h2>
          <p className="text-night/65 leading-relaxed">
            Reliv adapte son moyen de livraison à la nature du colis
            et aux contraintes de la zone d'intervention.
            Pas de véhicule unique imposé — le meilleur outil pour chaque situation.
          </p>
        </div>

        {/* ── Grille véhicules ────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VEHICLES.map(({ imgPlaceholder, tag, title, text, specs, bg }) => (
            <article
              key={title}
              className="bg-white rounded-xl3 overflow-hidden shadow-card hover:shadow-hover hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image / placeholder */}
              <div className="relative h-48 overflow-hidden">
                {/* ── Remplace ce bloc par <img> quand tu as les photos ── */}
                <div
                  className={`w-full h-full bg-gradient-to-br ${bg} flex flex-col items-center justify-center gap-3`}
                >
                  <span className="text-5xl opacity-70">{imgPlaceholder.emoji}</span>
                  <span className="text-white/60 text-xs font-semibold tracking-widest uppercase text-center px-4">
                    {imgPlaceholder.label}
                    <br />
                    <span className="opacity-50 normal-case tracking-normal">
                      {imgPlaceholder.hint} — à intégrer
                    </span>
                  </span>
                </div>
                {/* ── Fin placeholder ── */}

                {/* Tag flottant */}
                <span className="absolute top-3 left-3 bg-green-bright/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                  {tag}
                </span>
              </div>

              {/* Corps de la carte */}
              <div className="p-6">
                <h3 className="font-heading text-night text-xl mb-3">{title}</h3>
                <p className="text-night/65 text-sm leading-relaxed mb-4">{text}</p>
                <ul className="flex flex-wrap gap-2">
                  {specs.map((spec) => (
                    <li
                      key={spec}
                      className="text-xs font-semibold text-green-dark bg-green-bright/10 px-3 py-1 rounded-full"
                    >
                      ✓ {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
