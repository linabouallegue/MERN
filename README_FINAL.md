# 📘 Mon Blog React – Projet MERN (Semaine 6)

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

## ✅ 1) Installation et lancement du projet

### Prérequis
- **Node.js** (>= 18)
- **npm** (fourni avec Node)
- Visual Studio Code ou un autre éditeur

---

### Étapes de création du projet

```bash
npm create vite@latest mon-blog-react -- --template react
cd mon-blog-react
npm install
npm run dev
```

L'application sera accessible à l’adresse suivante :

➡️ **http://localhost:5173/**

---

## ✅ 2) Structure du projet

```
mon-blog-react/
 ├── public/
 │     └── screenshots/
 │           └── capture-full.png
 ├── src/
 │   ├── components/
 │   │     ├── Header.jsx
 │   │     ├── Article.jsx
 │   │     └── Footer.jsx
 │   ├── App.jsx
 │   ├── main.jsx
 │   └── index.css
 ├── index.html
 ├── package.json
 ├── vite.config.js
 └── README.md
```

---

## ✅ 3) Présentation des composants

### 🔹 Header  
Affiche le titre principal ainsi qu’un sous-titre.

### 🔹 Article  
Affiche :
- Un titre  
- Un auteur  
- Un contenu  

Props utilisées : `title`, `author`, `content`.

### 🔹 Footer  
Affiche l’auteur du site et l’année dynamique.

---

## ✅ 4) Capture d'écran complète du projet

<p align="center">
  <img src="public/screenshots/capture-full.png" width="900">
</p>

---

## ✅ 5) Code principal : App.jsx

```jsx
import Article from './components/Article';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1>Mon Blog React</h1>

      <Article
        title="Introduction à React"
        author="Alice"
        content="React est une bibliothèque JavaScript pour construire des interfaces..."
      />

      <Article
        title="Qu’est-ce que Vite ?"
        author="Bob"
        content="Vite est un outil de build ultra-rapide pour les projets frontend..."
      />
    </div>
  );
}

export default App;
```

---

## ✅ 6) Compétences acquises

Ce projet m’a permis de comprendre :

- Le concept de composant dans React  
- L’utilisation des props pour transmettre des données  
- Comment organiser une application React  
- Le fonctionnement de JSX  
- Comment afficher une liste avec `.map()`  
- Le rôle essentiel de la prop `key` dans les listes  
- Le fonctionnement du serveur de développement Vite  

---

## ✅ 7) Comment exécuter le projet

```bash
npm install
npm run dev
```

Ouvrir ensuite : http://localhost:5173/

---

## ✅ 8) Améliorations possibles

- Ajouter un système de commentaires  
- Ajouter plusieurs pages avec React Router  
- Charger les articles depuis une API  
- Ajouter un thème clair/sombre  
- Styliser l’interface avec TailwindCSS  

---

## ✅ 9) Informations

Projet réalisé dans le cadre du module **MERN – Semaine 6**.  
Étudiante : Votre Nom  
Professeur : Votre Professeur  
Établissement : Votre École
