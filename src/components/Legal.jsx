const CARDS = [
  {
    icon:  '📋',
    title: 'Micro-Entreprise',
    text:  "Structure légère et réactive. Relation contractuelle directe, sans intermédiaire, avec un interlocuteur unique pleinement responsable de ses engagements.",
  },
  {
    icon:  '🛡️',
    title: 'RC Pro Marchandise Confiée',
    text:  "Tout colis pris en charge est assuré pendant toute la durée de son traitement — du stockage hub jusqu'à la remise en main propre au destinataire.",
  },
  {
    icon:  '📑',
    title: 'Franchise TVA (Art. 293 B CGI)',
    text:  "En franchise en base de TVA, Reliv ne facture pas de TVA sur ses prestations. Nos tarifs sont les prix nets — un avantage de coût direct et immédiat pour vous.",
    highlight: true,
  },
  {
    icon:  '📜',
    title: 'Contrat de partenariat formalisé',
    text:  "SLA, conditions de prise en charge, responsabilités — un contrat de partenariat clair peut être établi à la demande, adapté à votre organisation.",
  },
]

export default function Legal({ id }) {
  return (
    <section id={id} className="snap-section bg-night">
      <div className="container-reliv py-20 w-full">

        {/* ── En-tête ────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">Cadre légal &amp; Fiscal</span>
          <h2 className="text-h2 font-heading text-white mb-4">
            Un partenariat clair,<br />
            sans surprise administrative
          </h2>
          <p className="text-white/60 leading-relaxed">
            Reliv opère dans un cadre réglementaire transparent,
            favorable à votre structure et sécurisé pour vos marchandises.
          </p>
        </div>

        {/* ── Grille 2 × 2 ───────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {CARDS.map(({ icon, title, text, highlight }) => (
            <article
              key={title}
              className={`
                rounded-xl2 p-7 border transition-all duration-300
                ${highlight
                  ? 'bg-green-bright/10 border-green-bright/40 hover:border-green-bright'
                  : 'bg-white/5 border-white/10 hover:border-white/25'}
              `}
            >
              <span className="block text-3xl mb-4">{icon}</span>
              <h3 className="font-body font-bold text-white text-base mb-2">{title}</h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: highlight ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.55)' }}
              >
                {text}
              </p>
            </article>
          ))}
        </div>

        {/* ── Note récapitulative ─────────────────────── */}
        <div className="bg-green-bright/8 border border-green-bright/20 rounded-xl2 p-6 text-center">
          <p className="text-white/80 text-sm leading-relaxed">
            <strong className="text-green-bright">En résumé :</strong>{' '}
            Pas de TVA à récupérer · Assurance marchandise active ·
            Contrat clair · Coût maîtrisé par rapport à un second passage motorisé taxé.
          </p>
        </div>

      </div>
    </section>
  )
}
