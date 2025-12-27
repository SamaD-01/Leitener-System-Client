# Leitner System - Application Front-end

Ce projet constitue l'interface utilisateur de l'application de révision espacée système Leitner. Il est développé avec **React** et **Vite**, et conçu pour être robuste, maintenable et testable.

## 🚀 Technologies

*   **Core**: React 19, TypeScript
*   **Build Tool**: Vite
*   **Styling**: TailwindCSS, Shadcn/ui (pour les composants UI)
*   **Routing**: React Router
*   **Testing**: Vitest, React Testing Library, MSW (Mock Service Worker)
*   **HTTP Client**: Axios

## 📋 Prérequis

*   Node.js (version 20+ recommandée)
*   npm (inclus avec Node.js)

## 🛠️ Installation

1.  Cloner le dépôt (si ce n'est pas déjà fait).
2.  Installer les dépendances :

```bash
npm install
```

## ▶️ Démarrage

Pour lancer l'application en mode développement (connectée à `http://localhost:8080` par défaut pour l'API) :

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`.

## 🧪 Tests

Nous accordons une grande importance à la qualité du code et à la non-régression.

**Lancer tous les tests unitaires et d'intégration :**

```bash
npm test
```

**Générer le rapport de couverture de code :**

```bash
npm run test:coverage
```

### Stratégie de Test
*   **Tests Unitaires/Intégration** : Utilisent `Vitest` et `Testing Library`.
*   **Mocking API** : `MSW` (Mock Service Worker) est utilisé pour intercepter les requêtes réseaux dans les tests, assurant que les tests sont indépendants du backend.

## 🎭 Tests End-to-End (E2E)

Pour valider le parcours utilisateur global (dans le cadre du Bonus 2), nous utilisons **Playwright**.

### Prérequis E2E
Assurez-vous que le Backend tourne sur `http://localhost:8080`.

### Installer les navigateurs
La première fois, installez les binaires des navigateurs :
```bash
npx playwright install
```

### Lancer les tests E2E
```bash
npx playwright test
```

Cela va :
1. Démarrer le serveur de développement React
2. Lancer les tests définis dans `src/test/e2e/`
3. Générer un rapport HTM

## 🏗️ Architecture et Conception

L'architecture du projet s'inspire des principes du **DDD (Domain-Driven Design)** et de l'**Architecture Hexagonale**, adaptés au développement front-end.

### Structure du projet

La structure des dossiers (`src/`) reflète le découpage par fonctionnalités ("Screaming Architecture") plutôt que par type technique :

```
src/
├── features/           # Modules métiers autonomes (Bounded Contexts)
│   ├── auth/           # Gestion de l'authentification
│   ├── cards/          # Gestion des fiches (création, affichage)
│   └── quiz/           # Logique du jeu de révision
│       ├── components/ # Composants UI spécifiques à la feature
│       ├── context/    # Gestion d'état (State Management)
│       ├── hooks/      # Logique métier encapsulée (Use Cases)
│       └── *.types.ts  # Modèle du domaine
├── pages/              # Pages de l'application (Routing / Orchestration)
├── services/           # Couche Infrastructure (Adapters)
│   └── api/            # Communication avec le Backend (API Clients)
├── shared/             # Composants et utilitaires partagés (Shared Kernel)
└── test/               # Configuration globale des tests
```

### Choix Architecturaux

1.  **Séparation Métier / Infrastructure** :
    *   Le code métier (règles de validation, logique du quiz, état) se trouve dans `features/`.
    *   La communication avec l'extérieur (API HTTP) est isolée dans `services/api/`. Les composants UI ne font jamais d'appels `axios` directement, ils passent par ces services ou des hooks personnalisés. Cela agit comme un **Adapter** sortant dans l'architecture hexagonale.

2.  **Gestion de l'État** :
    *   L'utilisation de `Context API` (ex: `QuizContext`, `AuthContext`) permet d'injecter les dépendances et de gérer l'état global d'un module de manière isolée et testable.

3.  **UI Components** :
    *   Nous utilisons une approche "Composants Headless" stylisés avec TailwindCSS (via shadcn/ui) pour garantir une accessibilité maximale et une facilité de personnalisation sans couplage fort à une librairie CSS spécifique.

## 🔗 Compatibilité Backend

Ce front-end est conçu pour fonctionner strictement avec l'API Backend documentée (Swagger).
Il implémente les contrats d'interface pour :
*   `GET /cards` & `POST /cards`
*   `GET /cards/quizz`
*   `PATCH /cards/{id}/answer`

L'URL de base de l'API est configurable dans `src/services/api/client.ts`.
