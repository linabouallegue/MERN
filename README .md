# Mon Blog React (Vite)

Ce projet est un mini blog réalisé avec **React** et **Vite** dans le cadre du module MERN.  
Il a pour objectif d’apprendre et maîtriser les bases suivantes :

- Qu’est-ce qu’une Single Page Application (SPA)
- Créer un projet avec Vite
- Utiliser les composants React
- Passer des props
- Manipuler le JSX
- Afficher une liste avec `.map()`
- Organiser une application en plusieurs composants
---

## 1) Prérequis

- **Node.js** ≥ 18 (vérifier : `node -v`).
- **npm** (inclus avec Node) ou **pnpm**/**yarn** si vous préférez.
- Un éditeur de code (ex. VS Code).

---

## 2) Créer le projet (au choix : JavaScript ou TypeScript)

### Option A — JavaScript
```bash
# Créer
npm create vite@latest mon-blog-react -- --template react

# Se déplacer
cd mon-blog-react

# Installer les dépendances
npm install
```

### Option B — TypeScript
```bash
npm create vite@latest mon-blog-react -- --template react-ts
cd mon-blog-react
npm install
```

> 💡 Lors de l'assistant en ligne de commande :
> - **Select a framework** 👉 `React`
> - **Select a variant** 👉 `JavaScript` ou `TypeScript`
> - **Use rolldown-vite (Experimental)?** 👉 `No` (par défaut)

---

## 3) Démarrer le serveur de dev

```bash
npm run dev
```
Vite affichera une URL du style : `http://localhost:5173/`. Ouvrez-la dans votre navigateur.

---
## 📸 Captures d'écran

### Page d'accueil
![Capture d'écran de mon blog](public/screenshots/p1.png)




## 4) Nettoyer la structure de base

Arborescence utile :

```
mon-blog-react/
├─ public/           # Fichiers statiques
├─ src/
│  ├─ App.jsx/tsx    # Composant principal
│  ├─ main.jsx/tsx   # Point d'entrée
│  └─ index.css      # Styles
├─ index.html        # Page HTML unique (SPA)
├─ package.json      # Scripts npm
└─ vite.config.ts/js # Config Vite
```

Nettoyage conseillé :
1. Vider le contenu par défaut de `src/App.jsx` (ou `App.tsx`).
2. Créer un dossier `src/components` pour vos composants.

---
## 📸 Capture d'écran complète

Voici le rendu de mon projet avec le code et la page affichés ensemble :

![Capture complète du projet](public/screenshots/p3.png)

## 📸 Capture d'écran complète

Voici le rendu de mon projet avec le code et la page affichés ensemble :

![Capture complète du projet](public/screenshots/p4.png)




## 5) Créer les premiers composants

### `src/components/Header.jsx`
```jsx
function Header({ title, subtitle }) {
  return (
    <header style={{
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '30px 20px',
      textAlign: 'center',
      marginBottom: '30px',
      borderRadius: '8px'
    }}>
      <h1 style={{ margin: 0, fontSize: '2.2rem' }}>{title}</h1>
      {subtitle && <p style={{ marginTop: 10, opacity: 0.9 }}>{subtitle}</p>}
    </header>
  );
}
export default Header;

```
## 📸 Capture d'écran complète

Voici le rendu de mon projet avec le code et la page affichés ensemble :

![Capture complète du projet](public/screenshots/p5.png)


### `src/components/Article.jsx`
```jsx
function Article({ title, author, content }) {
  return (
    <article style={{
      border: '1px solid #ddd',
      padding: '20px',
      marginBottom: '20px',
      borderRadius: '8px'
    }}>
      <h2>{title}</h2>
      <p style={{ color: '#666', fontSize: 14 }}>Par {author}</p>
      <p>{content}</p>
    </article>
  );
}
export default Article;
```

### `src/components/Footer.jsx`
```jsx
function Footer({ author, year }) {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '20px',
      marginTop: '40px',
      borderTop: '2px solid #ddd',
      color: '#666'
    }}>
      <p>© {year} {author} — Tous droits réservés</p>
      <p style={{ fontSize: 14, marginTop: 10 }}>Créé avec React + Vite</p>
    </footer>
  );
}
export default Footer;
```
## 📸 Capture d'écran complète

Voici le rendu de mon projet avec le code et la page affichés ensemble :

![Capture complète du projet](public/screenshots/p6.png)

---

## 6) Utiliser les composants dans `src/App.jsx`

```jsx
import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  const articles = [
    { id: 1, title: 'Introduction à React', author: 'Alice', content: 'React est une bibliothèque…' },
    { id: 2, title: 'Qu’est-ce que Vite ?', author: 'Bob', content: 'Vite est un outil de build ultra-rapide…' },
    { id: 3, title: 'Les Composants en React', author: 'Charlie', content: 'Les composants sont les briques de base…' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: 20, flex: 1 }}>
        <Header title="Mon Blog React" subtitle="Apprendre React avec des exemples pratiques" />

        <div style={{ marginBottom: 20, padding: 15, backgroundColor: '#f0f9ff', borderRadius: 8 }}>
          <strong>{articles.length}</strong> articles disponibles
        </div>

        {articles.map((article) => (
          <Article
            key={article.id}
            title={article.title}
            author={article.author}
            content={article.content}
          />
        ))}
      </div>

      <Footer author="Ecole Polytechnique Sousse" year={currentYear} />
    </div>
  );
}

export default App;
```
## 📸 Capture d'écran complète

Voici le rendu de mon projet avec le code et la page affichés ensemble :

![Capture complète du projet](public/screenshots/p7.png)

---

## 7) Scripts utiles

- `npm run dev` : lance le serveur de développement.
- `npm run build` : build production (dans `dist/`).
- `npm run preview` : prévisualiser le build localement.

---

## 8) Concepts clés (très court rappel)

- **SPA** : une seule page HTML, contenu mis à jour par JavaScript.
- **Composants** : fonctions qui retournent du JSX.
- **JSX** : ressemble à HTML, mais c’est du JavaScript (un seul élément racine, attributs en camelCase, expressions `{}`).
- **Props** : données passées parent → enfant (lecture seule).
- **Listes** : utiliser `.map()` et une prop `key` **unique et stable**.

---

## 9) Dépannage

- Port déjà utilisé : changez le port `npm run dev -- --port 5174`.
- Erreur d’autorisation PowerShell : exécuter VS Code « en tant qu’administrateur » ou `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` (à utiliser en connaissance de cause).
- Node trop ancien : mettez à jour Node.js puis réinstallez les dépendances (`rm -rf node_modules && npm install`).

---

## 10) À rendre (si travail noté)

- Code des 3 composants `Header`, `Footer`, `Article`.
- `App.jsx` avec la **liste** d’articles (utiliser `.map()` et `key`).
- Une phrase expliquant le rôle de `key` avec **vos mots**.
- Une **capture d’écran** de l’application en fonctionnement.

---

## 11) Aller plus loin

- Ajouter un composant `Badge` réutilisable.
- Créer un composant `ProductCard` et afficher une liste de produits.
- Créer un petit système de commentaires (`CommentCard`, `CommentList`).


