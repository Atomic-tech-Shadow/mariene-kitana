# Déploiement sur Vercel - Site de Mariène Kitana 💖

## Instructions pour déployer le site romantique sur Vercel

### 1. Préparer le projet
Le projet est déjà configuré avec:
- ✅ `vercel.json` configuré
- ✅ `.vercelignore` pour exclure les fichiers inutiles
- ✅ PWA optimisé pour mobile (Android/iOS)
- ✅ Animations magiques optimisées
- ✅ Service Worker pour fonctionnement hors ligne

### 2. Déployer sur Vercel

#### Option A: Via GitHub (Recommandé)
1. Pousse ton code sur GitHub
2. Va sur [vercel.com](https://vercel.com)
3. Connecte ton compte GitHub
4. Sélectionne ce repository
5. Vercel détectera automatiquement la configuration

#### Option B: Via Vercel CLI
```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel --prod
```

### 3. Variables d'environnement (optionnel)
Aucune variable d'environnement requise ! Le site utilise un stockage en mémoire.
Si tu veux ajouter une base de données plus tard:
- `DATABASE_URL` - URL de ta base PostgreSQL

### 4. Fonctionnalités incluses après déploiement

#### 🌟 Animations Magiques
- Cœurs flottants et scintillants
- Effets arc-en-ciel sur le texte
- Particules magiques en arrière-plan
- Bouton surprise avec explosion d'amour

#### 📱 Compatibilité Mobile
- Design responsive pour Android et iOS
- Optimisations tactiles
- Support des écrans avec encoche (iPhone X+)
- Fonctionnement hors ligne

#### 💖 Expérience PWA
- Installable sur l'écran d'accueil
- Icône d'application personnalisée
- Fonctionnement comme une app native

### 5. Après le déploiement
Le site sera accessible sur une URL comme:
`https://ton-site.vercel.app`

### 6. Personnalisation
Pour modifier le contenu:
- Édite les textes dans `client/src/components/hero-section.tsx`
- Change la photo dans `client/public/00.jpg`
- Modifie les couleurs dans `client/src/index.css`

### 7. Support mobile
Le site est optimisé pour:
- ✅ iPhone (iOS Safari)
- ✅ Android (Chrome)
- ✅ Tablettes
- ✅ Différentes tailles d'écran
- ✅ Mode paysage et portrait

## Conseils pour un déploiement parfait

1. **Teste d'abord**: Assure-toi que `npm run build` fonctionne
2. **Optimise les images**: Compresse `/00.jpg` si elle est trop lourde
3. **Vérifie les animations**: Teste sur mobile après déploiement
4. **Partage l'URL**: Envoie le lien à ta copine ! 💕

## Résolution de problèmes

- **Erreur de build**: Vérifie que toutes les dépendances sont installées
- **Animations lentes**: Normal sur certains anciens mobiles
- **Images manquantes**: Assure-toi que `/00.jpg` existe dans `client/public/`

Bon déploiement ! 🚀💖