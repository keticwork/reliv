# Reliv — Landing Page React

Site vitrine B2B pour Reliv, micro-hub de cyclo-logistique premium au Luc, Var (83340).

## Stack
- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- Composants séparés par section

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en mode développement
npm run dev

# 3. Build de production
npm run build
```

## Structure
```
src/
├── components/
│   ├── Header.jsx      ← Navigation fixe (logo RELIV texte, liens, CTA)
│   ├── Hero.jsx        ← Section d'accroche + stats clés
│   ├── Problem.jsx     ← Le problème de la non-livraison
│   ├── Solution.jsx    ← Notre réponse (6 cartes)
│   ├── Vehicles.jsx    ← Nos 3 moyens de livraison (< 15 kg)
│   ├── Expertise.jsx   ← 20 ans d'expérience terrain
│   ├── Hub.jsx         ← Hub sécurisé (6 features)
│   ├── Fiscal.jsx      ← Avantage écologique & fiscal 2026
│   ├── Partners.jsx    ← Bénéfices partenaires (4 KPIs)
│   ├── Legal.jsx       ← Cadre légal & fiscal
│   ├── Franchise.jsx   ← Vision franchise (timeline 4 étapes)
│   └── Contact.jsx     ← Formulaire de contact (sans email visible)
├── assets/images/      ← Mettre tes photos ici
├── App.jsx             ← Scroll snap + dot nav latérale
├── index.css           ← Tailwind + styles globaux
└── main.jsx            ← Point d'entrée React

## Intégrer les photos

Copie tes 3 photos dans `src/assets/images/` puis dans `Vehicles.jsx` :

```jsx
import imgTriporteur from '../assets/images/springare-cargo.jpg'
import imgSac        from '../assets/images/hpa-backpack.jpg'
import imgPied       from '../assets/images/own-team.jpg'
```

Remplace les blocs `<div className="vehicle-placeholder">` par `<img src={imgTriporteur} ... />`.

## Connecter le formulaire (Formspree)

1. Va sur https://formspree.io → crée un compte gratuit
2. Crée un formulaire → copie ton ID
3. Dans `Contact.jsx`, remplace `TON_ID_ICI` dans `FORMSPREE_ENDPOINT`
4. Décommente le bloc `fetch()` dans `handleSubmit`

## Déploiement Vercel

```bash
# Connecte ton repo GitHub à Vercel
# Framework : Vite
# Build command : npm run build
# Output directory : dist
```

## Palette couleurs (tailwind.config.js)

| Token           | Valeur    | Usage                    |
|-----------------|-----------|--------------------------|
| green-dark      | #2A6041   | Vert foncé / accent      |
| green-bright    | #00A878   | CTA / highlights         |
| night           | #0D1B2A   | Fond sombre              |
| offwhite        | #F5F4EF   | Fond clair               |
| gold-light      | #E8B840   | Accents dorés            |
