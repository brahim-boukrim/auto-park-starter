# 🚗 AutoPark - Gestion de Parc Automobile

Un tableau de bord moderne et performant pour la gestion d'un parc de véhicules de location. Ce projet permet d'administrer l'inventaire en temps réel avec des fonctionnalités complètes de CRUD (Ajout, Affichage, Modification, Suppression), de filtrage avancé, de recherche, et de tri, le tout propulsé par une persistance locale des données.

🔗 **Démo en ligne :** [AutoPark Live Demo](https://brahim-boukrim.github.io/auto-park-starter/)

---

## 📈 Suivi de Projet (Jira)

Toutes les tâches de développement, de la gestion des fonctionnalités CRUD à l'intégration de l'interface utilisateur, ont été planifiées et validées avec succès sur Jira :

![Suivi des tickets Jira](./image_LULLWJ.png)

---

## ✨ Fonctionnalités Clés

### 📊 Tableau de Bord (Statistiques Globales)
* **Indicateurs clés de performance :** Suivi dynamique en temps réel du nombre total de voitures, des véhicules disponibles, loués, et en cours de maintenance.
* **Calcul des revenus :** Visualisation immédiate du revenu global cumulé par jour.

### 🛠️ Gestion du Parc (CRUD & Outils Avancés)
* **Opérations CRUD Complètes :** Ajout, modification, affichage détaillé et suppression de véhicules (Marque, Modèle, Immatriculation, Catégorie, Prix par jour, Statut).
* **Filtres Avancés :** Filtrage instantané du parc par **Statut** (Disponible, Louée, En maintenance) et par **Catégorie** (Citadine, Berline, SUV).
* **Recherche Globale :** Recherche textuelle intuitive par marque ou modèle.
* **Tri Dynamique :** Tri des véhicules par prix par jour pour optimiser la consultation.

### 💾 Persistance des données
* Utilisation sélective de **LocalStorage** pour conserver les données et l'état du parc automobile de manière persistante, même après actualisation de la page.

---

## 📂 Architecture du Projet

Le projet respecte une structure de fichiers modulaire, segmentant distinctement la structure HTML, la logique applicative JavaScript, et la compilation des styles utility-first CSS.

```text
├── index.html               # Tableau de bord principal (Statistiques & Filtres)
├── voitures.html            # Interface dédiée à la liste et aux actions de gestion
├── css/
│   ├── input.css            # Fichier source contenant les directives de base Tailwind (@tailwind)
│   ├── output.css           # Fichier compilé généré par le compilateur Tailwind CSS
│   └── style.css            # Styles personnalisés et configuration finale
└── js/
    ├── data.js              # Jeux de données initiaux et configurations statiques
    ├── voiture.js           # Définition des classes, constructeurs ou logiques métier véhicule
    └── index.js             # Gestion du DOM, événements interactifs et logique CRUD globale
```

---

## 🛠️ Technologies Utilisées

* **HTML5 & JavaScript (ES6+) :** Structuration sémantique et manipulation dynamique orientée objet du DOM.
* **Tailwind CSS :** Framework CSS utility-first pour une interface utilisateur réactive, moderne, et entièrement fluide (Responsive Design).
* **LocalStorage Web API :** Base de données locale pour la sauvegarde fluide de l'état du parc.