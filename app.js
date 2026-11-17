'use strict';
const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>[...root.querySelectorAll(s)];
let language='fr';try{language=localStorage.getItem('af-language')==='en'?'en':'fr'}catch{}
let filter='all';let openProject=null;let toastTimeout;let selectedShot=0;
const t=(fr,en)=>language==='fr'?fr:en;
const projects=[
  {
    "id": "merchant",
    "group": "data",
    "title": "Solen Digital — Dashboard BI",
    "kind": [
      "Business Intelligence · Application web",
      "Business Intelligence · Web application"
    ],
    "date": "GitHub Pages",
    "stack": [
      "React",
      "Vite",
      "Recharts",
      "IndexedDB"
    ],
    "summary": [
      "Un tableau de bord pour suivre l’activité commerciale, les inscriptions et les finances à partir de fichiers métier.",
      "A dashboard for tracking commercial activity, enrolments and finances from business files."
    ],
    "intro": [
      "J’ai développé Solen Digital pour réunir plusieurs besoins de suivi dans une interface React : retours commerciaux, dossiers étudiants et échéances financières. Chaque espace dispose de ses propres indicateurs, filtres et vues détaillées.",
      "I built Solen Digital to bring several reporting needs into a React interface: commercial feedback, student records and financial schedules. Each workspace has its own metrics, filters and detailed views."
    ],
    "context": [
      "Rendre des fichiers métier plus faciles à exploiter, sans mélanger les sources ni additionner des indicateurs qui couvrent des périmètres différents.",
      "Make business files easier to analyse while keeping sources separate and avoiding totals built from unrelated metrics."
    ],
    "outcome": [
      "Une application publiée sur GitHub Pages qui transforme les fichiers importés en vues de suivi consultables et filtrables. La démonstration utilise des données fictives ; les fichiers de l’utilisateur restent dans son navigateur.",
      "A GitHub Pages application that turns imported files into searchable, filterable reporting views. The demo uses synthetic data; users’ files stay in their own browser."
    ],
    "url": "https://assiaferjani.github.io/merchant-feedback-dashboard/",
    "repo": "https://github.com/assiaferjani/merchant-feedback-dashboard",
    "screenshot": true,
    "shots": [
      {
        "src": "assets/merchant-dashboard.webp",
        "label": [
          "Tableau de bord · Données de démonstration",
          "Dashboard · Demonstration data"
        ],
        "width": 1440,
        "height": 1000,
        "original": "assets/merchant-dashboard.png",
        "preview": "assets/merchant-dashboard-720.webp"
      }
    ],
    "captureNote": [
      "Capture réelle de la démonstration, avec des données fictives.",
      "Actual demo screenshot with synthetic data."
    ],
    "contributions": [
      [
        "Conception de l’interface React/Vite, des vues de suivi et des graphiques interactifs avec Recharts.",
        "Designed the React/Vite interface, reporting views and interactive Recharts visualisations."
      ],
      [
        "Import CSV, Excel et ODS avec contrôles de qualité, recherche, filtres et exports.",
        "Implemented CSV, Excel and ODS imports with quality checks, search, filters and exports."
      ],
      [
        "Traitement des imports dans un Web Worker et sauvegarde locale avec IndexedDB pour retrouver ses données après rechargement.",
        "Processed imports in a Web Worker and stored them locally in IndexedDB so data remains available after reloading."
      ]
    ]
  },
  {
    "id": "greenfair",
    "group": "data",
    "title": "GreenFair Advisor",
    "kind": [
      "Data science · Prototype interactif",
      "Data science · Interactive prototype"
    ],
    "date": "12/2025 — 05/2026",
    "stack": [
      "React",
      "TypeScript",
      "Recharts",
      "FastAPI"
    ],
    "summary": [
      "Explorer les indicateurs de développement durable de 10 pays, comparer leurs profils et visualiser des scénarios jusqu’en 2050.",
      "Explore sustainability indicators for 10 countries, compare their profiles and visualise scenarios through 2050."
    ],
    "intro": [
      "J’ai conçu GreenFair Advisor pour rendre les données environnementales, sociales et économiques plus accessibles. Le projet associe des analyses Python à un tableau de bord React/TypeScript, avec exploration par pays, comparaison et aide à l’interprétation.",
      "I designed GreenFair Advisor to make environmental, social and economic data easier to explore. The project connects Python analyses with a React/TypeScript dashboard for country exploration, comparison and interpretation."
    ],
    "context": [
      "Permettre à un utilisateur de comparer plusieurs dimensions du développement durable et de comprendre les trajectoires présentées dans un même espace.",
      "Help users compare several dimensions of sustainability and understand the trajectories presented in a single workspace."
    ],
    "outcome": [
      "Une démonstration publique qui relie analyse de données et exploration interactive. Les scénarios 2050 affichés sont des simulations : ils servent à explorer des hypothèses et ne constituent pas des prévisions validées.",
      "A public demo that connects data analysis with interactive exploration. The displayed 2050 scenarios are simulations for exploring assumptions, rather than validated forecasts."
    ],
    "url": "https://assiaferjani.github.io/GreenFrair_Advisor/",
    "repo": "https://github.com/assiaferjani/GreenFrair_Advisor",
    "screenshot": true,
    "shots": [
      {
        "src": "assets/greenfair-dashboard.webp",
        "label": [
          "Tableau de bord · Tunisie",
          "Dashboard · Tunisia"
        ],
        "width": 1440,
        "height": 1000,
        "original": "assets/greenfair-dashboard.png",
        "preview": "assets/greenfair-dashboard-720.webp"
      },
      {
        "src": "assets/greenfair-home.webp",
        "label": [
          "Accueil · Exploration des pays",
          "Home · Country exploration"
        ],
        "width": 1440,
        "height": 1000,
        "original": "assets/greenfair-home.png",
        "preview": "assets/greenfair-home-720.webp"
      }
    ],
    "captureNote": [
      "Captures du site public, réalisées le 12 novembre 2026. La démonstration associe résultats importés et scénarios simulés.",
      "Public-site screenshots captured on 12 November 2026. The demo combines imported results with simulated scenarios."
    ],
    "contributions": [
      [
        "Conception du tableau de bord React/TypeScript : recherche par pays, filtres géographiques et visualisations Recharts.",
        "Designed the React/TypeScript dashboard with country search, geographic filters and Recharts visualisations."
      ],
      [
        "Intégration des résultats Python : regroupement de pays avec K-Means, comparaison de Random Forest et de la régression Ridge temporelle ; exports PDF, Excel et CSV.",
        "Integrated Python results: country clustering with K-Means and comparisons of Random Forest and temporal Ridge regression; added PDF, Excel and CSV exports."
      ],
      [
        "Intégration de recommandations Gemini et d’une alternative locale lorsque la clé API n’est pas configurée.",
        "Integrated Gemini recommendations with a local fallback when no API key is configured."
      ]
    ]
  },
  {
    "id": "ritchess",
    "group": "web",
    "title": "Ritchess",
    "kind": [
      "Développement full stack · Freelance",
      "Full stack development · Freelance"
    ],
    "date": "07/2025 — 04/2026",
    "stack": [
      "React",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    "summary": [
      "Une plateforme de chauffeur privé développée de bout en bout, de la présentation des services au parcours de réservation.",
      "An end-to-end private-chauffeur platform, from service discovery to the booking journey."
    ],
    "intro": [
      "En freelance, j’ai accompagné Ritchess de la définition du besoin à la mise en ligne de son application web. Le site présente une offre de transport premium — transferts aéroport, chauffeurs privés et services pour entreprises — et guide les visiteurs vers la réservation.",
      "As a freelance developer, I took Ritchess from requirements to a deployed web application. The site presents premium transport services, including airport transfers, private drivers and corporate travel, and guides visitors towards booking."
    ],
    "context": [
      "Donner au service de chauffeur privé une présence web professionnelle et un parcours cohérent pour découvrir les prestations, consulter la flotte et préparer un trajet.",
      "Give the private-chauffeur service a professional web presence and a clear journey for discovering services, viewing the fleet and planning a trip."
    ],
    "outcome": [
      "Un site en production sur ritchess.com, avec une identité visuelle cohérente et des parcours dédiés aux différents services. Ce projet illustre ma capacité à prendre en charge une application full stack, du besoin métier au déploiement.",
      "A production site at ritchess.com with a consistent visual identity and dedicated service journeys. The project demonstrates my ability to deliver a full stack application from business requirements to deployment."
    ],
    "url": "https://www.ritchess.com/",
    "screenshot": true,
    "shots": [
      {
        "src": "assets/ritchess-services-loaded.webp",
        "label": [
          "Services · Chauffeur privé",
          "Services · Private chauffeur"
        ],
        "width": 1440,
        "height": 1000,
        "original": "assets/ritchess-services-loaded.png",
        "preview": "assets/ritchess-services-loaded-720.webp"
      },
      {
        "src": "assets/ritchess-fleet-loaded.webp",
        "label": [
          "La flotte Mercedes-Benz",
          "The Mercedes-Benz fleet"
        ],
        "width": 1440,
        "height": 1000,
        "original": "assets/ritchess-fleet-loaded.png",
        "preview": "assets/ritchess-fleet-loaded-720.webp"
      }
    ],
    "captureNote": [
      "Captures des pages publiques de ritchess.com, réalisées le 12 novembre 2026.",
      "Public-page screenshots from ritchess.com, captured on 12 November 2026."
    ],
    "contributions": [
      [
        "Analyse des besoins client et conception de l’architecture frontend/backend.",
        "Analysed client requirements and designed the frontend/backend architecture."
      ],
      [
        "Développement de l’interface React, de l’API REST avec Node.js/Express et de la persistance des données avec MongoDB.",
        "Built the React interface, Node.js/Express REST API and MongoDB data layer."
      ],
      [
        "Intégration des services, de la présentation de la flotte et des accès à la réservation, puis mise en ligne.",
        "Integrated service pages, fleet presentation and booking access, then deployed the application."
      ]
    ]
  },
  {
    "id": "arxiv",
    "group": "data",
    "title": "arXiv Explorer",
    "kind": [
      "Business Intelligence · Projet collaboratif",
      "Business Intelligence · Collaborative project"
    ],
    "date": "2026",
    "stack": [
      "Python",
      "pandas",
      "Streamlit",
      "Data visualisation"
    ],
    "summary": [
      "Un observatoire interactif pour explorer 229 620 articles scientifiques, repérer les tendances et préparer une veille bibliographique.",
      "An interactive observatory for exploring 229,620 research papers, identifying trends and building a literature review."
    ],
    "intro": [
      "Réalisé en binôme avec Ines Makhlouf, arXiv Explorer transforme un corpus de publications en outil d’exploration scientifique. Il couvre les articles arXiv de 2020 à 2024 en intelligence artificielle, machine learning et traitement du langage.",
      "Built with Ines Makhlouf, arXiv Explorer turns a publication corpus into a scientific exploration tool. It covers arXiv papers from 2020 to 2024 in artificial intelligence, machine learning and language processing."
    ],
    "context": [
      "Faciliter la lecture d’un corpus volumineux : suivre l’évolution des publications, comparer les domaines et retrouver les articles pertinents pour une recherche.",
      "Make a large corpus easier to explore: track publication trends, compare research fields and find relevant papers."
    ],
    "outcome": [
      "Un outil public avec 10 visualisations et 8 espaces : tendances, comparaisons, vocabulaire, recherche et panier de lecture. Ines a notamment contribué à l’interface, aux filtres, à la recherche et aux exports ; le projet est présenté comme un travail collaboratif.",
      "A public tool with 10 visualisations and 8 workspaces covering trends, comparisons, vocabulary, search and a reading basket. Ines contributed to the interface, filters, search and exports; this is a collaborative project."
    ],
    "url": "https://assiaferjani.github.io/BI-Project/",
    "repo": "https://github.com/assiaferjani/BI-Project",
    "screenshot": true,
    "shots": [
      {
        "src": "assets/arxiv-overview.webp",
        "label": [
          "Vue d’ensemble · Corpus scientifique",
          "Overview · Research corpus"
        ],
        "width": 1600,
        "height": 1450,
        "original": "assets/arxiv-overview.jpg",
        "preview": "assets/arxiv-overview-720.webp"
      },
      {
        "src": "assets/arxiv-trends.webp",
        "label": [
          "Tendances de publication",
          "Publication trends"
        ],
        "width": 1600,
        "height": 1450,
        "original": "assets/arxiv-trends.jpg",
        "preview": "assets/arxiv-trends-720.webp"
      },
      {
        "src": "assets/arxiv-vocabulary.webp",
        "label": [
          "Vocabulaire · Thèmes de recherche",
          "Vocabulary · Research topics"
        ],
        "width": 1600,
        "height": 1450,
        "original": "assets/arxiv-vocabulary.jpg",
        "preview": "assets/arxiv-vocabulary-720.webp"
      },
      {
        "src": "assets/arxiv-connections.webp",
        "label": [
          "Comparaison · Recouvrements des domaines",
          "Comparison · Overlapping fields"
        ],
        "width": 1600,
        "height": 1450,
        "original": "assets/arxiv-connections.jpg",
        "preview": "assets/arxiv-connections-720.webp"
      },
      {
        "src": "assets/arxiv-mobile.webp",
        "label": [
          "Interface mobile",
          "Mobile interface"
        ],
        "width": 390,
        "height": 844,
        "original": "assets/arxiv-mobile.jpg",
        "preview": "assets/arxiv-mobile-720.webp"
      }
    ],
    "captureNote": [
      "Captures originales publiées dans le dépôt du projet collaboratif arXiv Explorer.",
      "Original screenshots published in the collaborative arXiv Explorer repository."
    ],
    "contributions": [
      [
        "Préparation des données avec Python, contrôles de qualité et validation du corpus retenu.",
        "Prepared data with Python, checked quality and validated the selected corpus."
      ],
      [
        "Définition des indicateurs, tests des calculs et création de graphiques annuels et par catégorie.",
        "Defined metrics, tested calculations and created annual and category-level charts."
      ],
      [
        "Amélioration de l’interface et des parcours d’exploration, en collaboration avec Ines sur l’intégration du projet.",
        "Improved the interface and exploration journeys, collaborating with Ines on project integration."
      ]
    ]
  },
  {
    "id": "segmentation",
    "group": "data",
    "title": [
      "Segmentation client",
      "Customer segmentation"
    ],
    "kind": [
      "Machine learning · Étude exploratoire",
      "Machine learning · Exploratory study"
    ],
    "date": "Mall Customers",
    "stack": [
      "Python",
      "scikit-learn",
      "HDBSCAN",
      "PCA",
      "Seaborn"
    ],
    "summary": [
      "Identifier des profils parmi 200 clients et comparer l’effet des méthodes de clustering et du choix des variables.",
      "Identify profiles among 200 customers and compare how clustering methods and feature selection affect the results."
    ],
    "intro": [
      "J’ai mené une étude de segmentation sur le jeu Mall Customers dans Google Colab. L’objectif était de passer de données clients brutes à des groupes interprétables, puis d’évaluer les choix de variables et de méthodes. Les figures proviennent directement du notebook.",
      "I conducted a segmentation study of the Mall Customers dataset in Google Colab. The aim was to turn customer data into interpretable groups, then evaluate feature and method choices. The figures come directly from the notebook."
    ],
    "context": [
      "Comprendre les profils de consommation à partir du revenu annuel et du score de dépenses, puis examiner l’apport de l’âge, du genre et de la réduction de dimension.",
      "Understand spending profiles using annual income and spending score, then examine the contribution of age, gender and dimensionality reduction."
    ],
    "outcome": [
      "K-Means distingue cinq segments. À K=5, le couple revenu + score de dépenses obtient le meilleur score de silhouette des quatre variantes testées : 0,5547, contre 0,3878 après PCA. HDBSCAN repère 33 points de bruit, étudiés aussi avec une réaffectation au plus proche voisin. Ces conclusions concernent ce jeu de 200 clients.",
      "K-Means identifies five segments. With K=5, income + spending score achieves the highest silhouette score among the four tested variants: 0.5547, versus 0.3878 after PCA. HDBSCAN flags 33 noise points, also studied with nearest-neighbour reassignment. These findings apply to this 200-customer dataset."
    ],
    "url": "https://colab.research.google.com/drive/1gXW_s69eoeQw4ffSHBjUtI3lGtmWe_LS",
    "urlLabel": [
      "Ouvrir le notebook Colab",
      "Open Colab notebook"
    ],
    "screenshot": true,
    "previewLabel": [
      "GRAPHIQUE DU NOTEBOOK",
      "NOTEBOOK CHART"
    ],
    "galleryLabel": [
      "DANS LE NOTEBOOK",
      "INSIDE THE NOTEBOOK"
    ],
    "shots": [
      {
        "src": "assets/segmentation-kmeans.webp",
        "preview": "assets/segmentation-kmeans-720.webp",
        "original": "assets/segmentation-kmeans.png",
        "width": 1282,
        "height": 782,
        "label": [
          "K-Means · 5 segments et leurs centroïdes",
          "K-Means · 5 segments and their centroids"
        ]
      },
      {
        "src": "assets/segmentation-elbow.webp",
        "preview": "assets/segmentation-elbow-720.webp",
        "original": "assets/segmentation-elbow.png",
        "width": 982,
        "height": 482,
        "label": [
          "Méthode du coude · Choix de K",
          "Elbow method · Choosing K"
        ]
      },
      {
        "src": "assets/segmentation-correlation.webp",
        "preview": "assets/segmentation-correlation-720.webp",
        "original": "assets/segmentation-correlation.png",
        "width": 904,
        "height": 782,
        "label": [
          "Analyse exploratoire · Corrélations",
          "Exploratory analysis · Correlations"
        ]
      },
      {
        "src": "assets/segmentation-hdbscan.webp",
        "preview": "assets/segmentation-hdbscan-720.webp",
        "original": "assets/segmentation-hdbscan.png",
        "width": 855,
        "height": 554,
        "label": [
          "HDBSCAN · 5 groupes et 33 points de bruit",
          "HDBSCAN · 5 groups and 33 noise points"
        ]
      },
      {
        "src": "assets/segmentation-hierarchy.webp",
        "preview": "assets/segmentation-hierarchy-720.webp",
        "original": "assets/segmentation-hierarchy.png",
        "width": 1282,
        "height": 582,
        "label": [
          "Classification hiérarchique · Dendrogramme",
          "Hierarchical clustering · Dendrogram"
        ]
      },
      {
        "src": "assets/segmentation-variables.webp",
        "preview": "assets/segmentation-variables-720.webp",
        "original": "assets/segmentation-variables.png",
        "width": 1782,
        "height": 1112,
        "label": [
          "Sélection des variables · K-Means et PCA",
          "Feature selection · K-Means and PCA"
        ]
      }
    ],
    "captureNote": [
      "Figures originales extraites du notebook partagé. Sorties enregistrées consultées le 12 novembre 2026, sans réexécution. L’exemple GMM sur données simulées n’est pas présenté comme un résultat sur Mall Customers.",
      "Original figures extracted from the shared notebook. Saved outputs reviewed on 12 November 2026, without rerunning the analysis. The GMM example on simulated data is not presented as a Mall Customers result."
    ],
    "contributions": [
      [
        "Contrôle des valeurs manquantes et des doublons, standardisation et analyse exploratoire avec pandas, Seaborn et Matplotlib.",
        "Checked missing values and duplicates, standardised features and explored the data with pandas, Seaborn and Matplotlib."
      ],
      [
        "Application de K-Means, HDBSCAN et de la classification hiérarchique ; analyse du nombre de groupes et des points de bruit.",
        "Applied K-Means, HDBSCAN and hierarchical clustering; examined group counts and noise points."
      ],
      [
        "Comparaison de quatre jeux de variables avec le score de silhouette, dont une variante PCA. Un exemple GMM distinct utilise des données simulées.",
        "Compared four feature sets using silhouette scores, including a PCA variant. A separate GMM example uses simulated data."
      ]
    ]
  },
  {
    "id": "lua",
    "group": "web",
    "title": "LUA — Learn, Understand, Act",
    "kind": [
      "NLP · SaaS · Stage de fin d’études",
      "NLP · SaaS · Graduation internship"
    ],
    "date": "02/2025 — 05/2025",
    "stack": [
      "React",
      "Node.js",
      "MongoDB",
      "Hugging Face",
      "Metabase"
    ],
    "summary": [
      "Une plateforme SaaS qui transforme les avis clients en analyses de sentiments et en informations utiles aux e-commerçants.",
      "A SaaS platform that turns customer feedback into sentiment analysis and useful insights for e-commerce businesses."
    ],
    "intro": [
      "Pendant mon stage de fin d’études chez MDW (Maison Du Web), j’ai conçu et développé LUA — Learn, Understand, Act. Cette plateforme SaaS multi-sites et multi-utilisateurs relie la collecte d’avis, leur analyse et la consultation des résultats.",
      "During my graduation internship at MDW (Maison Du Web), I designed and developed LUA — Learn, Understand, Act. This multi-site, multi-user SaaS platform connects feedback collection, analysis and reporting."
    ],
    "context": [
      "Aider les e-commerçants à comprendre les retours de leurs clients dans un espace commun, plutôt que de traiter chaque avis séparément.",
      "Help e-commerce businesses understand customer feedback in a shared workspace instead of reviewing every comment in isolation."
    ],
    "outcome": [
      "Une chaîne fonctionnelle allant du retour client à sa restitution : collecte, analyse de sentiments et visualisation. Ce projet de fin d’études associe développement full stack, NLP et business intelligence autour d’un besoin métier concret.",
      "A workflow from customer feedback to reporting: collection, sentiment analysis and visualisation. This graduation project brings together full stack development, NLP and business intelligence around a concrete business need."
    ],
    "contributions": [
      [
        "Développement de la plateforme avec React, Node.js et MongoDB pour gérer plusieurs sites et utilisateurs.",
        "Developed the platform with React, Node.js and MongoDB to support multiple sites and users."
      ],
      [
        "Création d’un widget de collecte d’avis intégrable et traitement des textes avec les modèles NLP de Hugging Face.",
        "Created an embeddable feedback widget and processed text using Hugging Face NLP models."
      ],
      [
        "Intégration d’un chatbot décisionnel et de tableaux de bord Metabase pour consulter et interpréter les résultats.",
        "Integrated a decision-support chatbot and Metabase dashboards for exploring and interpreting results."
      ]
    ]
  },
  {
    "id": "sales",
    "group": "data",
    "title": [
      "Analyse des ventes Big Data",
      "Big Data sales analytics"
    ],
    "kind": [
      "Big Data · Projet académique",
      "Big Data · Academic project"
    ],
    "date": "2026",
    "stack": [
      "Apache Spark",
      "HDFS",
      "Hive",
      "Grafana",
      "Python"
    ],
    "summary": [
      "Analyser 100 000 transactions avec Spark, HDFS et Hive pour comparer la croissance des ventes par catégorie.",
      "Analyse 100,000 transactions with Spark, HDFS and Hive to compare sales growth across categories."
    ],
    "intro": [
      "Dans ce projet académique, j’ai construit une chaîne d’analyse Big Data sur des transactions couvrant la période 2010–2017. Le travail porte sur la préparation des données, le calcul d’indicateurs de croissance et leur restitution dans Grafana.",
      "For this academic project, I built a Big Data analysis workflow using transactions from 2010 to 2017. The work covers data preparation, growth metrics and visual reporting in Grafana."
    ],
    "context": [
      "Repérer les catégories de produits dont les ventes progressent dans le temps, en s’appuyant sur un indicateur comparable entre catégories.",
      "Identify product categories whose sales grow over time using a metric that can be compared across categories."
    ],
    "outcome": [
      "L’analyse met en évidence des catégories à forte croissance, notamment les cosmétiques et les fournitures de bureau. Elle illustre une chaîne complète de traitement distribué et de restitution d’indicateurs sur des ventes historiques.",
      "The analysis highlights high-growth categories, including cosmetics and office supplies. It demonstrates a complete workflow for distributed processing and reporting on historical sales."
    ],
    "contributions": [
      [
        "Traitement de 100 000 transactions avec Apache Spark et organisation des données avec HDFS et Hive.",
        "Processed 100,000 transactions with Apache Spark and organised the data using HDFS and Hive."
      ],
      [
        "Calcul du taux de croissance annuel composé (CAGR) pour comparer les trajectoires des catégories entre 2010 et 2017.",
        "Calculated compound annual growth rates (CAGR) to compare category trends between 2010 and 2017."
      ],
      [
        "Création de visualisations Grafana pour restituer les résultats et faciliter leur interprétation.",
        "Created Grafana visualisations to present the results and make them easier to interpret."
      ]
    ]
  },
  {
    "id": "ratings",
    "group": "data",
    "title": [
      "Analyse des notes produits",
      "Product ratings analysis"
    ],
    "kind": [
      "Analyse de données · Projet académique",
      "Data analysis · Academic project"
    ],
    "date": "2026",
    "stack": [
      "R",
      "dplyr",
      "ggplot2",
      "plotly",
      "Shiny"
    ],
    "summary": [
      "Explorer 2 000 produits e-commerce avec R et Shiny pour étudier les liens entre leurs caractéristiques et leurs notes.",
      "Explore 2,000 e-commerce products with R and Shiny to study relationships between product attributes and ratings."
    ],
    "intro": [
      "J’ai analysé un jeu de 2 000 produits e-commerce et développé une application Shiny pour en explorer les résultats. L’étude examine les associations entre les notes et plusieurs caractéristiques : prix, catégorie et marque.",
      "I analysed a dataset of 2,000 e-commerce products and built a Shiny application to explore the results. The study examines associations between ratings and several attributes: price, category and brand."
    ],
    "context": [
      "Vérifier si les caractéristiques disponibles permettent d’expliquer les différences de notes, tout en tenant compte des limites du jeu de données.",
      "Investigate whether the available attributes help explain differences in ratings while accounting for the dataset’s limitations."
    ],
    "outcome": [
      "L’étude n’a pas mis en évidence d’association significative entre les facteurs examinés et les notes dans ce jeu de données. J’ai explicité cette limite dans la restitution, plutôt que d’en déduire une règle générale sur les comportements d’achat.",
      "The study did not identify a significant association between the examined factors and ratings in this dataset. I documented this limitation rather than drawing a general rule about purchasing behaviour."
    ],
    "contributions": [
      [
        "Préparation et manipulation des données avec R et dplyr.",
        "Prepared and manipulated data using R and dplyr."
      ],
      [
        "Analyse des relations entre caractéristiques et notes, avec visualisations ggplot2 et plotly.",
        "Analysed relationships between attributes and ratings with ggplot2 and plotly visualisations."
      ],
      [
        "Développement d’une application Shiny pour explorer les produits et comparer les facteurs étudiés.",
        "Built a Shiny application for exploring products and comparing the factors studied."
      ]
    ]
  }
];
const experience=[
{period:'07/2025 — 04/2026',org:'Ritchess',title:['Développeuse web freelance','Freelance web developer'],desc:['Application full stack React, API REST Node.js/Express et MongoDB, des besoins client au déploiement.','Full stack React application, Node.js/Express REST API and MongoDB, from client requirements to deployment.']},
{period:'02/2025 — 05/2025',org:'MDW · Maison Du Web',title:['Stage de fin d’études','Graduation internship'],desc:['Conception de LUA, une plateforme SaaS d’analyse de sentiments pour les e-commerçants.','Designed LUA, a SaaS sentiment analysis platform for e-commerce businesses.']},
{period:'01/2024 — 06/2024',org:['Stage de perfectionnement','Development internship'],title:['Développement e-commerce','E-commerce development'],desc:['Application Angular et Spring Boot : API REST, gestion des produits, filtrage multicritère et tests.','Angular and Spring Boot application: REST API, product management, multi-criteria filtering and testing.']}
];
const education=[
{period:['10/2025 — En cours','10/2025 — Present'],org:'Leaders University · Nabeul',title:'Master Big Data & Data Science',desc:['Architectures distribuées, pipelines de machine learning, cloud computing et traitement de données massives.','Distributed architectures, machine learning pipelines, cloud computing and large-scale data processing.']},
{period:'09/2022 — 06/2025',org:'ISET · Nabeul',title:['Licence multimédia & développement web','Degree in Multimedia & Web Development'],desc:['Développement web full stack, bases de données et architecture logicielle.','Full stack web development, databases and software architecture.']}
];
const local=x=>Array.isArray(x)?x[language==='fr'?0:1]:x;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function visual(id){
const project=projects.find(p=>p.id===id),shot=project?.shots?.[0];
return shot?`<img class="project-screenshot" src="${shot.preview}" width="${shot.width}" height="${shot.height}" alt="${esc(local(project.title)+' — '+local(shot.label))}" loading="lazy" decoding="async">`:'';
}
const shortKind={arxiv:["Recherche · Data visualisation","Research · Data visualisation"],merchant:["Dashboard BI","BI Dashboard"],greenfair:['Data visualisation','Data visualisation'],ritchess:['Full Stack · Freelance','Full Stack · Freelance'],lua:['NLP · SaaS','NLP · SaaS'],segmentation:['Clustering','Clustering'],sales:['Data Engineering','Data Engineering'],ratings:['Data Analytics','Data Analytics']};
function renderProjects(){
let studiesStarted=false;
$('#project-grid').innerHTML=projects.filter(p=>filter==='all'||p.group===filter).map(p=>{
let heading='';
if(p.id==='segmentation')return `<article class="project-card project-featured"><button type="button" class="project-open" data-project="${p.id}" aria-label="${esc(t('Découvrir le projet : ','Explore project: ')+local(p.title))}"><div class="project-visual notebook-visual">${visual(p.id)}<span class="project-tag">${esc(local(p.previewLabel))}</span></div></button><div class="featured-copy"><div class="project-meta"><span>${esc(local(shortKind[p.id]))}</span><span>${esc(p.date)}</span></div><h3 class="project-title">${esc(local(p.title))}</h3><p class="project-summary">${esc(local(p.summary))}</p><div class="project-stack">${p.stack.map(x=>`<span>${esc(x)}</span>`).join('')}</div><button class="text-link featured-details" type="button" data-project-details="${p.id}">${t('Explorer l’étude et les graphiques','Explore the study and charts')} ↗</button>${projectLinks(p)}</div></article>`;
if(!p.screenshot&&!studiesStarted){studiesStarted=true;heading=`<div class="studies-heading"><span class="eyebrow">${t('AUTRES RÉALISATIONS','MORE WORK')}</span><h3>${t('De la méthode au résultat.','From method to outcome.')}</h3><p>${t('Développement, expérimentation et analyse : mes études de cas.','Development, experimentation and analysis: my case studies.')}</p></div>`;}
return `${heading}<article class="project-card${p.screenshot?'':' study-card'}"><button type="button" class="project-open" data-project="${p.id}" aria-label="${esc(t('Découvrir le projet : ','Explore project: ')+local(p.title))}">${p.screenshot?`<div class="project-visual${p.id==='segmentation'?' notebook-visual':''}">${visual(p.id)}<span class="project-tag">${p.previewLabel?esc(local(p.previewLabel)):t('CAPTURE RÉELLE','ACTUAL SCREENSHOT')}</span></div>`:''}<div class="project-copy"><div class="project-meta"><span>${esc(local(shortKind[p.id]))}</span><span>${esc(p.date)}</span></div><h3 class="project-title">${esc(local(p.title))}<span aria-hidden="true">↗</span></h3><p class="project-summary">${esc(local(p.summary))}</p>${p.screenshot?'':`<span class="study-action">${t('Lire l’étude de cas','Read the case study')} ↗</span>`}</div></button><div class="project-stack">${p.stack.map(x=>`<span>${esc(x)}</span>`).join('')}</div>${projectLinks(p)}</article>`;
}).join('');
$$('[data-project],[data-project-details]').forEach(b=>b.addEventListener('click',()=>showProject(b.dataset.project||b.dataset.projectDetails)));
}
function renderJourney(){for(const[selector,items]of[['#experience-list',experience],['#education-list',education]]){$(selector).innerHTML=items.map(x=>`<article class="journey-item"><div class="journey-top"><span>${esc(local(x.org))}</span><span>${esc(local(x.period))}</span></div><h4>${esc(local(x.title))}</h4><p>${esc(local(x.desc))}</p></article>`).join('')}}
function projectLinks(p){return (p.url||p.repo)?`<div class="project-links">${p.url?`<a class="text-link" href="${p.url}" target="_blank" rel="noopener noreferrer">${p.urlLabel?esc(local(p.urlLabel)):t('Voir le site','Live website')} ↗</a>`:''}${p.repo?`<a class="text-link" href="${p.repo}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`:''}</div>`:''}
function projectGallery(p){
if(!p.shots)return '';
return `<section class="capture-gallery" aria-label="${t('Captures du projet','Project screenshots')}"><div class="gallery-topline"><span>${p.galleryLabel?esc(local(p.galleryLabel)):t('DANS L’APPLICATION','INSIDE THE APPLICATION')}</span><span>${p.shots.length} ${t(p.shots.length>1?'vues':'vue',p.shots.length>1?'views':'view')}</span></div><button type="button" class="gallery-expand" data-gallery-expand aria-label="${t('Agrandir la capture','Enlarge screenshot')}"><img id="gallery-image" alt=""><span class="expand-hint">⤢ ${t('Agrandir','Enlarge')}</span></button><div class="gallery-caption"><p id="gallery-caption" aria-live="polite"></p><div class="gallery-arrows" ${p.shots.length<2?'hidden':''}><button type="button" data-gallery-step="-1" aria-label="${t('Capture précédente','Previous screenshot')}">←</button><span id="gallery-count"></span><button type="button" data-gallery-step="1" aria-label="${t('Capture suivante','Next screenshot')}">→</button></div></div><div class="gallery-thumbs" ${p.shots.length<2?'hidden':''}>${p.shots.map((shot,i)=>`<button type="button" data-gallery-index="${i}" aria-label="${esc(local(shot.label))}" aria-pressed="false"><img src="${shot.preview}" alt="" width="${shot.width}" height="${shot.height}" loading="lazy"><span>${String(i+1).padStart(2,'0')}</span></button>`).join('')}</div></section>`;
}
function dialogContents(p){
$('#dialog-content').innerHTML=`<div class="dialog-body"><div class="eyebrow">${esc(local(p.kind))}</div><h2 id="dialog-title">${esc(local(p.title))}</h2><p>${esc(local(p.intro))}</p>${projectGallery(p)}<div class="dialog-columns"><div><h3>${t('Le besoin','The need')}</h3><p>${esc(local(p.context))}</p></div><div><h3>${t('Ma contribution','My contribution')}</h3><ul class="contribution-list">${p.contributions.map(point=>`<li>${esc(local(point))}</li>`).join('')}</ul></div></div><div class="dialog-outcome"><h3>${t('Résultats & enseignements','Results & lessons')}</h3><p>${esc(local(p.outcome))}</p></div><div class="project-stack">${p.stack.map(x=>`<span>${esc(x)}</span>`).join('')}</div>${projectLinks(p)}${p.captureNote?`<p class="visual-note">${esc(local(p.captureNote))}</p>`:''}</div>`;
if(p.shots)selectShot(selectedShot);
}
function selectShot(index){
if(!openProject?.shots)return;
selectedShot=Math.max(0,Math.min(index,openProject.shots.length-1));
const shot=openProject.shots[selectedShot],img=$('#gallery-image');
img.src=shot.src;img.alt=local(shot.label);img.width=shot.width;img.height=shot.height;
$('#gallery-caption').textContent=local(shot.label);
$('#gallery-count').textContent=`${selectedShot+1} / ${openProject.shots.length}`;
$$('[data-gallery-index]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.galleryIndex)===selectedShot)));
$$('[data-gallery-step]').forEach(button=>button.disabled=Number(button.dataset.galleryStep)<0?selectedShot===0:selectedShot===openProject.shots.length-1);
if($('#image-viewer').open)renderViewer();
}
$('#project-dialog').addEventListener('click',event=>{
const thumb=event.target.closest('[data-gallery-index]'),step=event.target.closest('[data-gallery-step]');
if(thumb)selectShot(Number(thumb.dataset.galleryIndex));
if(step)selectShot(selectedShot+Number(step.dataset.galleryStep));
if(event.target.closest('[data-gallery-expand]')){renderViewer();$('#image-viewer').showModal();$('#viewer-close').focus();}
});
$('#project-dialog').addEventListener('keydown',event=>{
if(!event.target.closest('.capture-gallery')||!['ArrowLeft','ArrowRight'].includes(event.key))return;
event.preventDefault();selectShot(selectedShot+(event.key==='ArrowRight'?1:-1));
});
function renderViewer(){
const shot=openProject.shots[selectedShot],viewer=$('#image-viewer');
viewer.classList.remove('is-zoomed');$('#viewer-zoom').setAttribute('aria-pressed','false');
$('#viewer-title').textContent=local(openProject.title);
$('#viewer-image').src=shot.src;$('#viewer-image').alt=local(shot.label);
$('#viewer-caption').textContent=`${selectedShot+1} / ${openProject.shots.length} — ${local(shot.label)}`;
$('#viewer-original').href=shot.original;
$('#viewer-original').textContent=t('Ouvrir l’original ↗','Open original ↗');
$('#viewer-zoom').textContent=t('Zoom','Zoom');
$('#viewer-close').setAttribute('aria-label',t('Fermer l’image','Close image'));
$('#viewer-prev').setAttribute('aria-label',t('Capture précédente','Previous screenshot'));
$('#viewer-next').setAttribute('aria-label',t('Capture suivante','Next screenshot'));
$('#viewer-prev').disabled=selectedShot===0;$('#viewer-next').disabled=selectedShot===openProject.shots.length-1;
$('#viewer-stage').scrollTo(0,0);
}
$('#viewer-close').addEventListener('click',()=>$('#image-viewer').close());
$('#viewer-prev').addEventListener('click',()=>selectShot(selectedShot-1));
$('#viewer-next').addEventListener('click',()=>selectShot(selectedShot+1));
$('#viewer-zoom').addEventListener('click',()=>{const zoomed=$('#image-viewer').classList.toggle('is-zoomed');$('#viewer-zoom').setAttribute('aria-pressed',String(zoomed));});
$('#image-viewer').addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight'].includes(event.key)&&!event.target.closest('#viewer-stage')){event.preventDefault();event.stopPropagation();selectShot(selectedShot+(event.key==='ArrowRight'?1:-1));}});
$('#image-viewer').addEventListener('click',event=>{if(event.target===$('#image-viewer'))$('#image-viewer').close();});
$('#image-viewer').addEventListener('close',()=>{$('[data-gallery-expand]')?.focus();});

function showProject(id){selectedShot=0;openProject=projects.find(p=>p.id===id);dialogContents(openProject);$('#project-dialog').showModal();document.body.classList.add('modal-open');$('#project-dialog').scrollTop=0;$('.dialog-close').focus()}
$('.dialog-close').addEventListener('click',()=>$('#project-dialog').close());
$('#project-dialog').addEventListener('click',e=>{if(e.target===$('#project-dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close()}});
$('#project-dialog').addEventListener('close',()=>{document.body.classList.remove('modal-open');if(openProject)$(`[data-project="${openProject.id}"]`)?.focus();openProject=null});
function syncThemeButton(){const dark=document.documentElement.dataset.theme!=='light';const label=dark?t('Activer le mode clair','Switch to light mode'):t('Activer le mode sombre','Switch to dark mode');$('#theme-toggle').setAttribute('aria-label',label);$('#theme-toggle').title=label;$('#theme-meta').content=dark?'#07080b':'#fafafb'}
$('#theme-toggle').addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=next;try{localStorage.setItem('af-theme',next)}catch{}syncThemeButton()});
function syncMenuLabel(){const expanded=$('.menu-toggle').getAttribute('aria-expanded')==='true';$('.menu-toggle').setAttribute('aria-label',expanded?t('Fermer le menu','Close menu'):t('Ouvrir le menu','Open menu'))}
function setLanguage(lang){language=lang;document.documentElement.lang=lang;$$('[data-fr][data-en]').forEach(el=>{el.innerHTML=el.dataset[lang]});$$('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));$('.dialog-close').setAttribute('aria-label',t('Fermer le projet','Close project'));$('#copy-email').setAttribute('aria-label',t('Copier l’adresse e-mail','Copy email address'));$('.filters').setAttribute('aria-label',t('Filtrer les projets','Filter projects'));$('.desktop-nav').setAttribute('aria-label',t('Navigation principale','Main navigation'));$('#mobile-nav').setAttribute('aria-label',t('Navigation mobile','Mobile navigation'));$('.wordmark').setAttribute('aria-label',t('Assia Ferjani — accueil','Assia Ferjani — home'));document.title=t('Assia Ferjani — Développement Full Stack & Data Science','Assia Ferjani — Full Stack Development & Data Science');renderProjects();renderJourney();syncThemeButton();syncMenuLabel();if(openProject)dialogContents(openProject);try{localStorage.setItem('af-language',lang)}catch{}}
$$('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
$$('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;$$('[data-filter]').forEach(x=>{const active=x===b;x.classList.toggle('active',active);x.setAttribute('aria-pressed',String(active))});renderProjects()}));
function closeMenu(){$('#mobile-nav').hidden=true;$('.menu-toggle').setAttribute('aria-expanded','false');syncMenuLabel()}
$('.menu-toggle').addEventListener('click',()=>{const expanded=$('.menu-toggle').getAttribute('aria-expanded')==='true';$('.menu-toggle').setAttribute('aria-expanded',String(!expanded));$('#mobile-nav').hidden=expanded;syncMenuLabel()});
$$('#mobile-nav a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});matchMedia('(min-width:861px)').addEventListener('change',e=>{if(e.matches)closeMenu()});
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>$('#toast').classList.remove('visible'),3000)}
$('#copy-email').addEventListener('click',async()=>{try{await navigator.clipboard.writeText('assiaferjani123@gmail.com');toast(t('Adresse e-mail copiée.','Email address copied.'))}catch{toast(t('E-mail : assiaferjani123@gmail.com','Email: assiaferjani123@gmail.com'))}});
$('#year').textContent=new Date().getFullYear();setLanguage(language);
