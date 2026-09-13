# MatDepussay.github.io

Site Internet de présentation — Mathias Depussay. Construit avec React + Vite, déployé sur GitHub Pages.

## Développement

```bash
npm install
npm run dev       # serveur de dev sur http://localhost:5173
```

## Build & vérification locale

```bash
npm run build      # génère dist/
npm run preview    # sert dist/ localement pour vérifier avant déploiement
```

## Déploiement

Le déploiement se fait manuellement (pas de GitHub Actions) via le package `gh-pages`,
qui build puis pousse `dist/` sur la branche `gh-pages` :

```bash
npm run deploy
```

Réglages GitHub à faire une seule fois : **Settings → Pages → Build and deployment →
Source: "Deploy from a branch" → Branch: `gh-pages` / `(root)`**.

Le code source (React) reste sur `main`. Ne jamais éditer la branche `gh-pages` à la main,
elle est régénérée à chaque `npm run deploy`.

`public/skynet.html` et `public/dashboard-elections.html` sont servies telles quelles
(URLs stables) et ne passent pas par le bundler React.
