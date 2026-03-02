/**
 * Contact.jsx
 *
 * ── CONNECTER LE FORMULAIRE À FORMSPREE ──────────────────────
 * Pour recevoir les messages sur ton email :
 *
 * 1. Va sur https://formspree.io et crée un compte gratuit
 * 2. Crée un nouveau formulaire → copie ton ID (ex: "xpzgwkra")
 * 3. Dans ce fichier, modifie FORMSPREE_ENDPOINT ci-dessous
 * 4. Décommente le fetch() dans handleSubmit
 *
 * Ton email kev.pcn@gmail.com n'est PAS affiché publiquement.
 * ──────────────────────────────────────────────────────────────
 */

import { useState } from 'react'

// ← Remplace par ton vrai endpoint Formspree après inscription
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/TON_ID_ICI'

const CONTACT_INFO = [
  { icon: '📍', text: 'Le Luc, Var (83340) — Rayon 5 km'           },
  { icon: '📅', text: 'Disponible soir & week-end, 7 j/7'          },
  { icon: '🚲', text: 'Cyclo-logistique · Colis < 15 kg uniquement' },
]


export default function Contact({ id }) {
  const [fields,  setFields]  = useState({ nom: '', prenom: '', phone: '', email: '', message: '' })
  const [status,  setStatus]  = useState('idle') // idle | sending | success | error
  const [errors,  setErrors]  = useState({})

  const validate = () => {
    const e = {}
    if (!fields.nom.trim())     e.nom     = 'Champ obligatoire'
    if (!fields.prenom.trim())  e.prenom  = 'Champ obligatoire'
    if (!fields.email.trim())   e.email   = 'Champ obligatoire'
    if (!fields.message.trim()) e.message = 'Champ obligatoire'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')

    // ── Envoi via Formspree (décommenter quand endpoint configuré) ──
    // try {
    //   const res = await fetch(FORMSPREE_ENDPOINT, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    //     body: JSON.stringify(fields),
    //   })
    //   if (res.ok) { setStatus('success') } else { setStatus('error') }
    // } catch { setStatus('error') }

    // ── Simulation (à retirer quand Formspree est configuré) ──
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
  }

  // ── Classe commune pour les inputs ──────────────────────────
  const inputClass = (field) => `
    w-full bg-white border rounded-xl px-4 py-3.5 text-gray-900 text-sm
    placeholder-gray-400 outline-none transition-all duration-200
    ${errors[field]
      ? 'border-red-400 focus:border-red-400'
      : 'border-gray-300 focus:border-green-bright focus:ring-2 focus:ring-green-bright/20'}
  `

  return (
    <section id={id} className="snap-section bg-night">
      <div className="container-reliv py-20 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* ── Colonne gauche : infos ─────────────────── */}
          <div>
            <span className="eyebrow">Partenariat</span>
            <h2 className="text-h2 font-heading text-white mb-5">
              Discutons de votre<br />
              prochain partenariat
            </h2>
            <p className="text-white/65 leading-relaxed mb-10">
              Vous gérez un réseau de livraison et cherchez une solution fiable
              pour vos colis en échec dans le Var ?
              Remplissez le formulaire — nous vous répondons sous 48 h.
            </p>

            <div className="flex flex-col gap-5">
              {CONTACT_INFO.map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-4 text-white/70 text-sm">
                  <span className="w-10 h-10 bg-green-bright/15 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    {icon}
                  </span>
                  {text}
                </div>
              ))}
            </div>

            {/* Footer léger */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="font-heading text-2xl font-bold text-white tracking-widest mb-1">RELIV</p>
              <p className="text-white/40 text-xs">
                Micro-entreprise · RC Pro Marchandise Confiée · Franchise TVA Art. 293 B CGI
              </p>
              <p className="text-green-bright text-xs mt-1">🌿 100 % cyclo · 0 CO₂ direct · Colis &lt; 15 kg</p>
              <p className="text-white/30 text-xs mt-2">© 2026 Reliv — Tous droits réservés</p>
            </div>
          </div>

          {/* ── Colonne droite : formulaire ────────────── */}
          <div className="bg-white/5 border border-white/10 rounded-xl3 p-8">

            {status === 'success' ? (
              /* Message de succès */
              <div className="text-center py-12">
                <span className="text-6xl block mb-5">✅</span>
                <h3 className="font-heading text-green-bright text-2xl mb-3">Message envoyé !</h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  Merci pour votre intérêt. Nous vous répondrons dans les 24 à 48 heures ouvrées.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>

                {/* Ligne 1 : Nom + Prénom */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="nom" className="block text-xs font-semibold text-white/55 uppercase tracking-widest mb-2">
                      Nom <span className="text-green-bright">*</span>
                    </label>
                    <input
                      id="nom" type="text" name="nom"
                      placeholder="Dupont"
                      value={fields.nom} onChange={handleChange}
                      className={inputClass('nom')}
                      autoComplete="family-name"
                    />
                    {errors.nom && <p className="text-red-400 text-xs mt-1">{errors.nom}</p>}
                  </div>
                  <div>
                    <label htmlFor="prenom" className="block text-xs font-semibold text-white/55 uppercase tracking-widest mb-2">
                      Prénom <span className="text-green-bright">*</span>
                    </label>
                    <input
                      id="prenom" type="text" name="prenom"
                      placeholder="Jean"
                      value={fields.prenom} onChange={handleChange}
                      className={inputClass('prenom')}
                      autoComplete="given-name"
                    />
                    {errors.prenom && <p className="text-red-400 text-xs mt-1">{errors.prenom}</p>}
                  </div>
                </div>

                {/* Ligne 2 : Téléphone + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-white/55 uppercase tracking-widest mb-2">
                      Téléphone
                    </label>
                    <input
                      id="phone" type="tel" name="phone"
                      placeholder="+33 6 12 34 56 78"
                      value={fields.phone} onChange={handleChange}
                      className={inputClass('phone')}
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-white/55 uppercase tracking-widest mb-2">
                      Email <span className="text-green-bright">*</span>
                    </label>
                    <input
                      id="email" type="email" name="email"
                      placeholder="jean.dupont@dpd.fr"
                      value={fields.email} onChange={handleChange}
                      className={inputClass('email')}
                      autoComplete="email"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-xs font-semibold text-white/55 uppercase tracking-widest mb-2">
                    Message <span className="text-green-bright">*</span>
                  </label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder={"Bonjour, je suis responsable logistique chez DPD France.\nJe souhaite discuter d'un partenariat de relivraison..."}
                    value={fields.message} onChange={handleChange}
                    className={inputClass('message') + ' resize-none'}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Bouton envoi */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-wait"
                >
                  {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande de partenariat →'}
                </button>

                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center mt-3">
                    Une erreur est survenue. Veuillez réessayer.
                  </p>
                )}

                <p className="text-white/35 text-xs text-center mt-4">
                  Vos données sont utilisées uniquement pour vous recontacter.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}
