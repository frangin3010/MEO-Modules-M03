document.addEventListener('DOMContentLoaded', () => {

    // --- BIBLIOTHÈQUE DE QUIZ ---
    // C'est ici que vous ajouterez vos futurs modules.
    const allQuizzes = {
        'M01': {
            title: 'MEO-M01 : Théorie des organisations',
            questions: [
                {
                    section: "Chapitre I : Concepts des Organisations",
                    question: "Selon la définition de Henry Mintzberg, l'organisation est avant tout :",
                    options: { a: "Un ensemble de moyens structurés pour atteindre des objectifs", b: "Le lieu d'exercice du pouvoir et de la hiérarchie", c: "Une action collective à la poursuite de la réalisation d'une mission commune", d: "Une discipline située entre l'économie et la sociologie" },
                    reponse: "c",
                    explication: "Pour Henry Mintzberg (1989), et de façon plus simple, \"L'organisation se définit comme une action collective à la poursuite de la réalisation d'une mission commune\".",
                    page: 6
                },
                {
                    question: "Laquelle de ces propositions ne correspond pas à la définition d'une organisation ?",
                    options: { a: "Un ensemble d'individus regroupés", b: "Un objectif commun", c: "Des ressources et moyens mis en commun", d: "Une absence totale de hiérarchie et de règles" },
                    reponse: "d",
                    explication: "Une organisation suppose un objectif commun, un regroupement d'individus et la mise en commun de moyens, généralement dans un cadre structuré (hiérarchie, règles).",
                    page: 6
                },
                {
                    question: "La théorie des organisations est née principalement au début du XXe siècle, en réponse à :",
                    options: { a: "La première révolution industrielle et l'invention de la machine à vapeur", b: "La seconde révolution industrielle et le besoin d'organiser les grandes entreprises", c: "L'émergence de l'informatique et de la bureautique", d: "La mondialisation des échanges économiques" },
                    reponse: "b",
                    explication: "La théorie des organisations est née au début du XXe siècle, au cours de la seconde révolution industrielle caractérisée par le règne absolu de la machine... Il naît alors un besoin d'organisation du travail.",
                    page: 7
                },
                {
                    question: "Qui sont les trois grands auteurs cités comme appartenant à l'école classique des organisations ?",
                    options: { a: "Elton Mayo, Abraham Maslow et Douglas McGregor", b: "Henri Fayol, Frederic Winslow Taylor et Max Weber", c: "Michel Crozier, Erhard Friedberg et Jean Daniel Reynaud", d: "Henry Ford, Burns et Stalker" },
                    reponse: "b",
                    explication: "De grands auteurs comme Henri Fayol (1841-1925) et Frederic Winslow Taylor (1856-1915), ou encore Max Weber (1864-1920), qui appartiennent à l'école classique des organisations, vont poser les premières bases...",
                    page: 7
                },
                {
                    section: "Chapitre II : Historique et Évolution",
                    question: "Dans le classement de W. R. Scott, l'axe horizontal de l'évolution des théories représente le passage :",
                    options: { a: "De l'approche rationnelle à l'approche sociale", b: "Du système fermé au système ouvert", c: "De l'individu à la structure", d: "De la pratique à la théorie" },
                    reponse: "b",
                    explication: "1. L'axe horizontal : du système fermé au système ouvert. Il représente une approche « systémique » : Le système fermé... Le système ouvert...",
                    page: 10
                },
                {
                    question: "L'approche « rationnelle », qui recherche l'efficacité technique et économique par la rationalisation du travail, correspond à quel axe thématique ?",
                    options: { a: "L'axe horizontal", b: "L'axe systémique", c: "L'axe vertical", d: "L'axe social" },
                    reponse: "c",
                    explication: "2. L'axe vertical : de l'approche « rationnelle » à l'approche « sociale »... L'approche « rationnelle » conduit à la rationalisation du travail et correspond à une recherche d'efficacité technique et économique de l'entreprise.",
                    page: 10
                },
                {
                    question: "Quelle école de pensée, fondée par des ingénieurs, correspond à la première phase (1900-1930) visant à 'organiser pour produire efficacement' ?",
                    options: { a: "L'école des relations humaines", b: "L'école de la contingence", c: "L'école classique", d: "L'école sociologique" },
                    reponse: "c",
                    explication: "1. La première phase (1900 - 1930): organiser pour produire efficacement. Elle correspond à l'école de pensée dite classique.",
                    page: 10
                },
                {
                    question: "L'école des relations humaines (1930-1960) a été fondée principalement par des :",
                    options: { a: "Ingénieurs", b: "Économistes", c: "Sociologues et psychologues", d: "Chefs militaires" },
                    reponse: "c",
                    explication: "La deuxième phase (1930 - 1960)... correspond à l'école des relations humaines, fondée par des sociologues et des psychologues.",
                    page: 11
                },
                {
                    question: "L'école systémique de la contingence (1960) abandonne quel postulat fondamental des écoles précédentes ?",
                    options: { a: "La division du travail", b: "La hiérarchie des besoins", c: "Le principe de l'unité de commandement", d: "L'idée du « the one best way » (la meilleure façon unique de faire)" },
                    reponse: "d",
                    explication: "L'école de la contingence ou systémique abandonne définitivement le préalable, longtemps dominant, du « the one best way » des écoles : classique et des relations humaines.",
                    page: 12
                },
                {
                    section: "Chapitre III : Types et Modèles d'Organisation",
                    question: "Dans l'école classique, l'entreprise est considérée comme :",
                    options: { a: "Un système social complexe", b: "Un acteur stratégique", c: "Une machine, dont les ouvriers sont l'un des rouages", d: "Un système ouvert en interaction avec son environnement" },
                    reponse: "c",
                    explication: "L'entreprise est alors considérée comme une machine, dont les ouvriers sont l'un des rouages.",
                    page: 14
                },
                {
                    question: "Quel principe de l'Organisation Scientifique du Travail (OST) de F. W. Taylor consiste à séparer le travail de conception (ingénieurs) du travail d'exécution (ouvriers) ?",
                    options: { a: "La division horizontale des tâches", b: "Le salaire au rendement", c: "La division verticale du travail", d: "La hiérarchie fonctionnelle" },
                    reponse: "c",
                    explication: "1. La division verticale du travail. C'est mettre la bonne personne à la bonne place en séparant le travail intellectuel de conception des ingénieurs... du travail d'exécution des ouvriers...",
                    page: 15
                },
                {
                    question: "Henri Fayol, contrairement à Taylor, centre son analyse sur :",
                    options: { a: "L'organisation de l'atelier de production", b: "Le métier de dirigeant et la fonction d'administration", c: "La psychologie des ouvriers", d: "Les relations informelles dans les groupes" },
                    reponse: "b",
                    explication: "Henri Fayol, contrairement à Taylor, centre son analyse sur le métier de dirigeant... et sur la fonction d'administration, c'est-à-dire de management.",
                    page: 15
                },
                {
                    question: "Parmi les 14 principes de gestion de Fayol, lequel est 'l'union du personnel' ?",
                    options: { a: "L'équité", b: "L'initiative", c: "La stabilité du personnel", d: "L'esprit de corps" },
                    reponse: "d",
                    explication: "Le principe N°14, 'L'union du personnel fait la force', est aussi appelé l'esprit de corps.",
                    page: 20
                },
                {
                    question: "Selon Max Weber, quelle forme d'autorité est fondée sur des règles juridiques écrites et la compétence, où l'on obéit à la fonction et non à la personne ?",
                    options: { a: "La légitimité traditionnelle", b: "La légitimité charismatique", c: "La légitimité rationnelle et légale", d: "La légitimité bureaucratique" },
                    reponse: "c",
                    explication: "c) La légitimité rationnelle et légale... le leader exerce son autorité sur la base des règles juridiques formalisées par écrit... C'est la fonction qui est investie d'une autorité et non la personne.",
                    page: 17
                },
                {
                    question: "Laquelle de ces propositions N'EST PAS une caractéristique de la bureaucratie wébérienne ?",
                    options: { a: "La division du travail clairement définie", b: "Le caractère impersonnel des relations", c: "Des règles et règlements normalisés", d: "Le recrutement basé sur les relations personnelles" },
                    reponse: "d",
                    explication: "La bureaucratie de Weber repose sur une sélection du personnel fondée sur la formation et les connaissances techniques, vérifiées par des tests, et non sur des relations.",
                    page: 17
                },
                {
                    question: "Parmi les 6 fonctions essentielles de l'entreprise identifiées par Henri Fayol, laquelle englobe la prévoyance, l'organisation, le commandement, la coordination et le contrôle (POCCC) ?",
                    options: { a: "La fonction technique", b: "La fonction commerciale", c: "La fonction administrative", d: "La fonction de sécurité" },
                    reponse: "c",
                    explication: "6) fonction administrative (prévoyance, organisation, commandement, coordination et contrôle.",
                    page: 19
                },
                {
                    question: "Quel principe fondamental de gestion de Henri Fayol s'oppose à la hiérarchie fonctionnelle de Taylor en stipulant qu'un agent ne doit recevoir des ordres que d'un seul chef ?",
                    options: { a: "L'unité de direction", b: "La subordination de l'intérêt particulier à l'intérêt général", c: "L'unité de commandement", d: "La division du travail" },
                    reponse: "c",
                    explication: "4) L'unité de commandement : pour une action quelconque, un agent ne doit recevoir des ordres que d'un seul chef ;",
                    page: 20
                },
                {
                    question: "Lequel de ces principes N'EST PAS un des trois grands principes du Fordisme ?",
                    options: { a: "Le travail à la chaîne continue", b: "La standardisation", c: "La flexibilité des tâches", d: "Le salaire 'Five dollars a day'" },
                    reponse: "c",
                    explication: "Ce modèle... est fondé sur les trois grands principes suivants : Premier principe : le travail à la chaine continue... Deuxième principe : la standardisation... Troisième principe : Five dollars a day.",
                    page: 21
                },
                {
                    question: "L'école des relations humaines s'est développée en réaction à quelle école ?",
                    options: { a: "L'école de la contingence", b: "L'école classique rationaliste", c: "L'école sociologique", d: "L'école systémique" },
                    reponse: "b",
                    explication: "L'école des relations humaines se développe à la fin des années 1930, en réaction à l'école classique rationaliste (déshumanisation du travail...)",
                    page: 23
                },
                {
                    question: "Quelle est la principale conclusion de l'expérience de Hawthorne menée par Elton Mayo ?",
                    options: { a: "L'amélioration des conditions matérielles (éclairage) augmente mécaniquement la productivité.", b: "L'importance fondamentale du climat psychologique et des relations sociales sur la performance.", c: "La motivation des employés est exclusivement financière.", d: "La structure formelle de l'organisation est plus importante que l'organisation informelle." },
                    reponse: "b",
                    explication: "E. Mayo découvre, après de longues recherches... l'importance fondamentale du climat psychologique sur le comportement et la performance des travailleurs.",
                    page: 24
                },
                {
                    question: "La Théorie Y de Douglas McGregor propose une vision optimiste de l'homme au travail, postulant que :",
                    options: { a: "L'individu moyen éprouve une aversion innée pour le travail.", b: "L'homme doit être contrôlé et menacé de sanctions pour travailler.", c: "L'effort au travail est aussi naturel que le jeu ou le repos.", d: "L'individu préfère être dirigé et éviter les responsabilités." },
                    reponse: "c",
                    explication: "Théorie Y : hypothèses optimistes de l'être humain vis-à-vis du travail. L'effort au travail est aussi naturel que l'effort au jeu ou au plaisir du repos.",
                    page: 26
                },
                {
                    question: "Dans la pyramide des besoins d'Abraham Maslow, lequel se situe tout au sommet ?",
                    options: { a: "Les besoins physiologiques", b: "Les besoins de sécurité", c: "Les besoins de reconnaissance", d: "Les besoins d'accomplissement" },
                    reponse: "d",
                    explication: "La pyramide des besoins de Maslow place les 'Besoins d'accomplissement' au niveau 1, soit le sommet.",
                    page: 27
                },
                {
                    question: "Selon la théorie des deux facteurs de Herzberg, un 'facteur de motivation' est un élément qui :",
                    options: { a: "Empêche l'insatisfaction s'il est présent (ex: un bon salaire)", b: "Augmente la satisfaction et motive s'il est présent (ex: la reconnaissance, l'évolution de carrière)", c: "Est neutre et n'a aucun impact sur l'employé", d: "Crée de l'insatisfaction s'il est absent, mais ne motive pas s'il est présent" },
                    reponse: "b",
                    explication: "Les 'facteurs de satisfaction' (ou motivation) peuvent augmenter le degré de satisfaction et motiver. Ils sont liés au développement et à l'épanouissement.",
                    page: 21
                },
                {
                    question: "L'école néo-classique, avec des auteurs comme Peter Drucker, met l'accent sur :",
                    options: { a: "Le retour aux principes stricts du Taylorisme", b: "La psychologie individuelle de chaque employé", c: "Des approches plus pragmatiques comme la direction par objectifs (DPO) et la décentralisation", d: "L'analyse des systèmes ouverts" },
                    reponse: "c",
                    explication: "L'école néo-classique est fondée sur des postulats comme la maximisation du profit, la décentralisation des décisions et la direction par objectif (DPO).",
                    page: 25
                },
                {
                    question: "Qu'est-ce que la 'décentralisation coordonnée' proposée par Alfred Sloan ?",
                    options: { a: "Une centralisation de toutes les fonctions de l'entreprise", b: "Laisser une autonomie aux divisions, jugées sur leur rentabilité, tout en centralisant certaines fonctions (finance, juridique)", c: "Donner une autonomie totale à chaque employé", d: "Fusionner toutes les divisions en une seule" },
                    reponse: "b",
                    explication: "La théorie de la décentralisation coordonnée repose sur l'autonomie laissée aux divisions (jugées sur la rentabilité) et la centralisation de certaines fonctions comme les finances, le juridique, la publicité...",
                    page: 25
                },
                {
                    question: "L'école socio-technique intègre les individus et la technique en créant :",
                    options: { a: "Des postes de travail plus spécialisés", b: "Des chaînes de montage plus rapides", c: "Des groupes autonomes de travail responsables de la production d'une entité", d: "Une hiérarchie plus stricte" },
                    reponse: "c",
                    explication: "L'organisation sociotechnique intègre les individus et la technique dans un modèle caractérisé par la création de groupes autonomes de travail permettant d'accomplir des tâches.",
                    page: 27
                },
                {
                    question: "Selon la théorie des contingences structurelles de Burns et Stalker, une organisation 'organique' est adaptée à quel type d'environnement ?",
                    options: { a: "Un environnement stable avec peu de changements", b: "Un environnement instable avec des changements technologiques et de marché", c: "Un environnement où la hiérarchie est très importante", d: "Un environnement où les tâches sont standardisées" },
                    reponse: "b",
                    explication: "Les organisations organiques, à structure souple pour un environnement dit instable.",
                    page: 30
                },
                {
                    question: "Selon Greiner, la croissance d'une entreprise passe par une série de phases, chacune se terminant par :",
                    options: { a: "Une période de stabilité", b: "Une augmentation de la rentabilité", c: "Une crise à surmonter pour passer à la phase suivante", d: "Une réorganisation complète" },
                    reponse: "c",
                    explication: "L'entreprise passe par une série de phases. Chaque phase se caractérise par une crise à surmonter pour passer à la phase suivante (crise de leadership, d'autonomie, de contrôle...).",
                    page: 28
                },
                {
                    question: "Selon Henry Mintzberg, une 'adhocratie' est une structure particulièrement adaptée pour :",
                    options: { a: "Les organisations de petite taille comme les PME", b: "Les administrations publiques avec des activités standardisées", c: "Les structures par projet tournées vers l'innovation (ex: la Nasa)", d: "Les entreprises multinationales avec des activités hétérogènes" },
                    reponse: "c",
                    explication: "L'adhocratie, coordonnée par la collaboration, particulièrement adaptée aux structures par projet tournées vers l'innovation (par exemple : la Nasa...)",
                    page: 31
                },
                {
                    question: "Quel est le postulat central de l'analyse stratégique de Crozier et Friedberg ?",
                    options: { a: "L'homme subit passivement la pression de l'organisation.", b: "L'homme est un acteur qui dispose d'une marge de liberté et utilise des stratégies et des jeux de pouvoir.", c: "L'organisation est un système purement rationnel et prévisible.", d: "La structure de l'organisation est déterminée uniquement par son environnement." },
                    reponse: "b",
                    explication: "Selon cette théorie, l'homme ne subit pas passivement la pression de l'organisation... Bien au contraire, la sociologie des organisations prend appui sur un individu qui est un acteur qui structure le champ dans lequel il évolue.",
                    page: 34
                },
                {
                    question: "Dans l'analyse de Crozier, le pouvoir est lié à la maîtrise d'une :",
                    options: { a: "Compétence facilement remplaçable", b: "Zone d'incertitude", c: "Règle organisationnelle claire", d: "Relation hiérarchique directe" },
                    reponse: "b",
                    explication: "Ces quatre sources de pouvoir (connaissance, relations, communication, règles) renvoient à la maîtrise d'une zone d'incertitude, condition d'existence du pouvoir.",
                    page: 30
                }
            ]
        },

        //Module 02

        'M02': {
            title: 'MEO-M02 : Gouvernance des organisations',
            questions: [
                {
                    section: "Chapitre I : Notion de gouvernance",
                    question: "D'où le terme 'gouvernance' tire-t-il son origine étymologique ?",
                    options: { a: "Du verbe latin 'gubernare' signifiant diriger", b: "Du verbe grec 'kubernân' signifiant 'piloter un navire ou un char'", c: "D'un terme médiéval anglais signifiant 'gérer les terres'", d: "Du mot français 'gouvernement'" },
                    reponse: "b",
                    explication: "Le terme « gouvernance » tire ses origines du verbe grec kubernân qui signifie « piloter un navire ou un char », utilisé métaphoriquement par Platon.",
                    page: 7
                },
                {
                    question: "Dans les années 1980, le concept de 'corporate governance' a été développé initialement par :",
                    options: { a: "Les politologues", b: "Les sociologues", c: "Les économistes", d: "Les juristes" },
                    reponse: "c",
                    explication: "Le terme gouvernance est développé chez les économistes qui explorent l'idée de « corporate governance ».",
                    page: 8
                },
                {
                    question: "Qu'est-ce que la 'bonne gouvernance' selon la perspective de la Banque Mondiale ?",
                    options: { a: "Un outil pour imposer une politique unique à tous les pays", b: "Un concept purement théorique sans application pratique", c: "Un cadre normatif impliquant un État de droit, la transparence et la responsabilité", d: "Laisser le marché s'autoréguler sans aucune intervention" },
                    reponse: "c",
                    explication: "La 'bonne gouvernance' repose sur des leviers comme l'état de droit, des lois qui structurent la société, le respect des lois et la lutte contre l'impunité.",
                    page: 13
                },
                {
                    question: "La 'gouvernance des organisations' est un courant qui étudie :",
                    options: { a: "Uniquement le pilotage hiérarchique et vertical", b: "Les mécanismes de coordination non hiérarchique et le pilotage horizontal", c: "Exclusivement les relations entre États", d: "La gestion des ressources humaines uniquement" },
                    reponse: "b",
                    explication: "Ce courant analyse les mécanismes de contrôle et les institutions qui facilitent la coordination, l'arbitrage et la cohésion par un pilotage plus « horizontal » que « vertical ».",
                    page: 14
                },
                {
                    question: "La 'gouvernance mondiale' (governance without government) s'intéresse principalement à :",
                    options: { a: "La création d'un gouvernement mondial unique", b: "La résolution de problèmes de coordination en dehors de l'autorité centrale d'un État", c: "La gestion des entreprises multinationales", d: "La politique intérieure des États" },
                    reponse: "b",
                    explication: "C'est un système de règles destiné à résoudre des problèmes en dehors de l'autorité d'un État. Elle permet d'appréhender l'élaboration d'accords pour résoudre des problèmes de coordination.",
                    page: "14-15"
                },
                {
                    section: "Chapitre II : Dispositif institutionnel et organisationnel",
                    question: "Sur quel principe fondamental repose le dispositif institutionnel de la gouvernance entre les États ?",
                    options: { a: "Le principe de la force militaire", b: "Le principe de la souveraineté des États", c: "Le principe de la domination économique", d: "Le principe de non-coopération" },
                    reponse: "b",
                    explication: "Il est utile d'évoquer deux principes fondamentaux sur lesquels reposent ces dispositifs. Il s'agit de la souveraineté des Etats (II.1) et le système politique de la démocratie et de l'état de droit (II.2).",
                    page: 18
                },
                {
                    question: "Quels sont les trois piliers des pouvoirs dans un État de droit ?",
                    options: { a: "L'armée, la police et la justice", b: "Le Président, le Premier Ministre et le Parlement", c: "Le pouvoir économique, le pouvoir social et le pouvoir culturel", d: "Le pouvoir exécutif, le pouvoir législatif et le pouvoir judiciaire" },
                    reponse: "d",
                    explication: "Le dispositif au niveau des Etats repose sur les constitutions, et les trois piliers des pouvoirs exécutif, législatif et judiciaire.",
                    page: 19
                },
                {
                    question: "Au niveau international, quel système principal sert de cadre à la gouvernance ?",
                    options: { a: "Le système de l'Union Européenne", b: "Le système des accords commerciaux régionaux", c: "Le système des Nations Unies (ONU)", d: "Le système du G20" },
                    reponse: "c",
                    explication: "Au niveau international, le dispositif institutionnel et organisationnel de la gouvernance repose sur le système des nations unies, l'ONU.",
                    page: 21
                },
                {
                    question: "Quel organe de l'ONU est chargé de veiller sur la paix et la sécurité mondiales ?",
                    options: { a: "L'Assemblée générale", b: "Le Conseil de Sécurité", c: "Le Conseil Economique et Social", d: "La Cour Pénale Internationale de Justice" },
                    reponse: "b",
                    explication: "Le Conseil de Sécurité, organe exécutif chargé de veiller sur la paix et la sécurité mondiales.",
                    page: 21
                },
                {
                    question: "Quelle institution est citée comme un acteur technique majeur dans le dispositif de gouvernance internationale ?",
                    options: { a: "Le Comité International Olympique", b: "L'Organisation Internationale du Travail (OIT/BIT)", c: "Médecins Sans Frontières", d: "Amnesty International" },
                    reponse: "b",
                    explication: "Dans le domaine technique : l'Organisation Internationale du Travail/Bureau International du Travail (OIT/BIT), l'AIEA, l'OMM, etc.",
                    page: 21
                },
                {
                    section: "Chapitre III : Activités et fonctionnement des organisations",
                    question: "Parmi les trois catégories principales d'organisations, laquelle a pour but de partager des bénéfices ?",
                    options: { a: "Les administrations publiques", b: "Les entreprises publiques ou privées", c: "Les associations", d: "Les ONG" },
                    reponse: "b",
                    explication: "L'organisation poursuit la réalisation de profits. Les associations, elles, ont un but autre que de partager des bénéfices.",
                    page: 24
                },
                {
                    question: "La fonction d'une entreprise qui 'réfléchit sur ce que les clients veulent' est la fonction :",
                    options: { a: "Production", b: "Logistique", c: "Ressources humaines", d: "Marketing et Ventes" },
                    reponse: "d",
                    explication: "Fonction Marketing et Ventes : elle réfléchit sur ce que les clients veulent et sur la façon de leur vendre les produits ou services de l'entreprise.",
                    page: 25
                },
                {
                    question: "Une structure organisationnelle où un exécutant peut recevoir des ordres de plusieurs responsables spécialisés est une structure :",
                    options: { a: "Hiérarchique linéaire", b: "Hiérarchico-fonctionnelle (avec staff)", c: "Fonctionnelle", d: "Matricielle" },
                    reponse: "c",
                    explication: "Dans la structure fonctionnelle, plusieurs responsables (A, B) assurent le commandement, chacun dans son domaine. Un exécutant (C, D, E ou F) peut recevoir des ordres des différents responsables.",
                    page: 26
                },
                {
                    question: "Qu'est-ce qu'une matrice RACI ?",
                    options: { a: "Un type d'organigramme en étoile", b: "Un outil pour visualiser la hiérarchie de l'entreprise", c: "Une matrice qui représente les rôles et responsabilités des acteurs sur un projet (Responsible, Accountable, Consulted, Informed)", d: "Un schéma des flux financiers" },
                    reponse: "c",
                    explication: "La matrice RACI représente les rôles et responsabilités : R=Responsible, A=Accountable, C=Consulted, I=Informed.",
                    page: 27
                },
                {
                    question: "Dans le processus de gestion de l'information, l'étape qui suit 'La collecte de l'information' est :",
                    options: { a: "Le stockage des informations", b: "Le traitement et l'édition", c: "La transmission ou diffusion", d: "La saisie des informations" },
                    reponse: "d",
                    explication: "L'étape 2, après la collecte (1), est 'La saisie des informations' sur un support en vue de leur traitement.",
                    page: 30
                },
                {
                    question: "Comment se définit le secteur tertiaire ?",
                    options: { a: "Il regroupe l'exploitation des ressources naturelles (agriculture, pêche)", b: "Il regroupe la transformation des matières premières (industries)", c: "Il se définit par complémentarité avec les secteurs primaire et secondaire", d: "Il concerne uniquement les activités liées à l'innovation et au numérique" },
                    reponse: "c",
                    explication: "Le secteur tertiaire se définit par complémentarité avec les activités agricoles et industrielles (secteurs primaire et secondaire).",
                    page: 31
                },
                {
                    section: "Chapitre IV : Systèmes de gouvernance",
                    question: "La gouvernance d'entreprise se définit comme un système pour :",
                    options: { a: "Maximiser les profits à court terme uniquement", b: "Diriger et contrôler l'entreprise en protégeant les intérêts des parties prenantes", c: "Gérer uniquement les relations avec les syndicats", d: "Mettre en place des réglementations gouvernementales" },
                    reponse: "b",
                    explication: "La gouvernance d'entreprise se définit comme un système déployé dans l'objectif de diriger et de contrôler l'entreprise de la manière la plus optimale, tout en protégeant les intérêts des parties prenantes.",
                    page: 34
                },
                {
                    question: "La gouvernance partenariale, ou modèle 'stakeholders', prend en compte les intérêts :",
                    options: { a: "Uniquement de l'actionnariat (shareholders)", b: "Uniquement des dirigeants", c: "De l'ensemble des parties prenantes (employés, clients, environnement...)", d: "Uniquement de l'État" },
                    reponse: "c",
                    explication: "La gouvernance partenariale, aussi nommée modèle stakeholders, tient compte de l'ensemble des parties prenantes et de leurs intérêts.",
                    page: 35
                },
                {
                    question: "Lequel de ces éléments est un principe clé de la gouvernance d'entreprise ?",
                    options: { a: "L'opacité totale", b: "L'indépendance des administrateurs et la transparence", c: "La centralisation absolue du pouvoir", d: "L'absence de reddition de comptes" },
                    reponse: "b",
                    explication: "Les principes incluent l'indépendance des administrateurs, la transparence, la reddition de compte, l'intégrité, etc.",
                    page: 36
                },
                {
                    question: "La 'bonne gouvernance' d'État comprend des composantes comme :",
                    options: { a: "L'opacité des procédures et la centralisation du savoir", b: "La participation effective, le pluralisme politique et la lutte contre la corruption", c: "Le non-respect de l'environnement et l'iniquité", d: "L'absence de responsabilité des institutions" },
                    reponse: "b",
                    explication: "La « bonne gouvernance » comprend : le plein respect des droits de l'homme, la participation effective, les partenariats multipartites, le pluralisme politique, la transparence, la lutte contre la corruption, etc.",
                    page: 38
                },
                {
                    question: "Quelle est l'une des caractéristiques de la gouvernance coloniale en Afrique de l'Ouest, selon Olivier De Sardan ?",
                    options: { a: "Une démocratie participative", b: "Une gouvernance despotique marquée par une bureaucratie du mépris et la corruption", c: "Une transparence totale des comptes publics", d: "Un respect total des traditions locales" },
                    reponse: "b",
                    explication: "La gouvernance ouest-africaine serait la résultante d'une gouvernance coloniale caractérisée par une gouvernance despotique marquée par une bureaucratie du mépris, les élections truquées, la corruption, etc.",
                    page: 40
                },
                {
                    question: "Une critique adressée à la notion de gouvernance est qu'elle fait du réseau à la fois :",
                    options: { a: "Une force et une faiblesse", b: "Un problème et une solution", c: "Un outil et un objectif", d: "Un coût et un bénéfice" },
                    reponse: "b",
                    explication: "...la gouvernance fait du réseau à la fois un problème (fragmentation) et une solution ('mise en réseau' des acteurs).",
                    page: 41
                },
                {
                    section: "Chapitre V : Influences internes et externes",
                    question: "Que signifie le terme 'partie prenante' (stakeholder) ?",
                    options: { a: "Uniquement les actionnaires de l'entreprise", b: "Uniquement les employés", c: "Toute personne ou groupe ayant un intérêt dans le fonctionnement et les résultats de l'entreprise", d: "Uniquement les concurrents" },
                    reponse: "c",
                    explication: "Il s'agit des personnes physiques ou morales, groupes d'individus... qui ont chacune, un quelconque intérêt dans son fonctionnement et ses résultats.",
                    page: 45
                },
                {
                    question: "Lesquels de ces acteurs sont des parties prenantes INTERNES ?",
                    options: { a: "Les clients et les fournisseurs", b: "L'État et les associations", c: "Les dirigeants, les salariés et les syndicats", d: "Les concurrents et les créanciers" },
                    reponse: "c",
                    explication: "Les parties prenantes internes sont constituées des Dirigeants, des Managers, des Salariés, des Actionnaires... et des syndicats.",
                    page: 46
                },
                {
                    question: "Quel est le rôle principal des syndicats en tant que partie prenante interne ?",
                    options: { a: "Définir la stratégie globale de l'entreprise", b: "Appliquer la stratégie décidée par les dirigeants", c: "Représenter les actionnaires", d: "Agir comme un contre-pouvoir attentif aux intérêts des salariés" },
                    reponse: "d",
                    explication: "Ils sont attentifs aux intérêts des salariés, les syndicats ont un rôle de contre-pouvoir au sein de la structure.",
                    page: 47
                },
                {
                    question: "Lequel de ces acteurs est une partie prenante EXTERNE ?",
                    options: { a: "Les managers", b: "Les salariés", c: "Les clients et les fournisseurs", d: "Le comité de direction" },
                    reponse: "c",
                    explication: "Les parties prenantes externes incluent les Clients, les Utilisateurs, les Fournisseurs, les Concurrents, les Créanciers, l'Etat, etc.",
                    page: 48
                },
                {
                    question: "Quelle est la première étape d'une stratégie de management des parties prenantes ?",
                    options: { a: "Mettre immédiatement en place un plan de gestion", b: "Instaurer une communication intensive", c: "Établir une étude diagnostique pour identifier et cartographier les parties prenantes", d: "Analyser les influences des acteurs" },
                    reponse: "c",
                    explication: "Une telle stratégie consistera à : 1. Etablir une étude diagnostique, un état des lieux des parties prenantes en présence, une cartographie.",
                    page: 50
                },
                {
                    section: "Chapitre VI : Interactions des acteurs de l'écosystème",
                    question: "Le concept d'écosystème des organisations désigne :",
                    options: { a: "Uniquement les concurrents d'un même secteur", b: "Une communauté d'acteurs hétérogènes (entreprises, institutions, clients...) poursuivant une vision stratégique commune", c: "L'environnement naturel autour de l'entreprise", d: "Le marché boursier" },
                    reponse: "b",
                    explication: "Le concept d'écosystème des organisations désigne une communauté d'acteurs (entreprises, organisations, institutions, fournisseurs, clients, actionnaires...), issus de domaines d'activités différents, qui poursuivent une vision stratégique commune.",
                    page: 52
                },
                {
                    question: "Pour une grande entreprise, la stratégie d'implantation répond principalement à deux soucis. Lesquels ?",
                    options: { a: "L'image de marque et la satisfaction des employés", b: "La réduction des coûts et la volonté d'innover", c: "La proximité des concurrents et le respect de l'environnement", d: "L'accès aux loisirs et à la culture" },
                    reponse: "b",
                    explication: "Pour une grande entreprise, la stratégie d'implantation répond à deux soucis, la réduction des coûts et la volonté d'innover.",
                    page: 53
                },
                {
                    question: "Qu'est-ce qu'une 'grappe d'entreprises' ou 'cluster' ?",
                    options: { a: "Une seule grande entreprise qui domine un marché", b: "Un réseau d'entreprises, souvent des PME, qui s'associent avec d'autres acteurs d'une filière sur un territoire", c: "Un regroupement informel de concurrents pour fixer les prix", d: "Les filiales d'une multinationale" },
                    reponse: "b",
                    explication: "Une grappe d'entreprises ou « cluster » est un réseau d'entreprises qui s'associent à l'ensemble des acteurs d'une filière (autres entreprises, centres de formation, laboratoires, etc.).",
                    page: 55
                }
            ]
        },
        
        //Module 03
        'M03': {
            title: 'MEO-M03 : Accord Canada-États-Unis–Mexique (ACEUM)',
            questions: [
                // CHAPITRE I
                {
                    section: "Chapitre I : Historique du libre-échange nord-américain à partir de l'ALENA",
                    question: "De quel accord précédent l'ALÉNA était-il principalement une extension ?",
                    options: { a: "Le traité de Maastricht", b: "L'Accord de libre-échange (ALE) entre le Canada et les États-Unis", c: "L'Accord général sur les tarifs douaniers et le commerce (GATT)", d: "Le MERCOSUR" },
                    reponse: "b",
                    explication: "L'ALÉNA résultait de l'extension d'un accord précédent qui ne concernait que le Canada et les États-Unis : l'ALE (« Accord de libre-échange »), dont il avait repris une bonne partie des principes.",
                    page: 3
                },
                {
                    question: "Quel contraste économique majeur existait entre le Mexique et ses partenaires au début de l'ALÉNA ?",
                    options: { a: "Le Mexique avait une population beaucoup plus faible.", b: "Le revenu par habitant au Mexique était significativement inférieur (environ 4 000 $) à celui du Canada et des États-Unis (plus de 20 000 $).", c: "Le Mexique était un pays d'immigration, tandis que les autres étaient des pays d'émigration.", d: "La culture mexicaine était moins ancienne que celle des États-Unis." },
                    reponse: "b",
                    explication: "Les États-Unis et le Canada avaient largement dépassé les 20 000 dollars par habitant, le Mexique était lui dans la zone des 4 000 dollars par habitant.",
                    page: 3
                },
                {
                    question: "Quelle était la principale motivation du Canada en rejoignant l'ALÉNA ?",
                    options: { a: "Créer une monnaie commune nord-américaine.", b: "Augmenter sa dépendance commerciale envers les États-Unis.", c: "Sortir de sa dépendance commerciale avec les États-Unis en trouvant de nouveaux débouchés.", d: "Attirer des investissements pour développer l'emploi sur son territoire." },
                    reponse: "c",
                    explication: "Réalisant 80 % de son commerce extérieur avec les États-Unis, le Canada souhaitait sortir de cette dépendance et trouver d'autres débouchés que celui de son grand voisin.",
                    page: 4
                },
                {
                    question: "Quelle était la motivation principale du Mexique pour adhérer à l'ALÉNA ?",
                    options: { a: "Mettre en œuvre une politique d'expansion du commerce international.", b: "Créer un contrepoids à l'Union européenne.", c: "Rechercher des investissements pour développer l'emploi sur son territoire et devenir un 'carrefour des Amériques'.", d: "Réduire sa dépendance commerciale envers l'Amérique latine." },
                    reponse: "c",
                    explication: "Le Mexique recherchait des investissements qui lui permettraient de développer l'emploi sur son territoire. [...] De plus, le Mexique cherchait à accroître son rôle géographique de « carrefour des Amériques ».",
                    page: 4
                },
                {
                    question: "Quand l'ALÉNA est-il entré en vigueur ?",
                    options: { a: "Le 10 juin 1990", b: "Le 17 décembre 1992", c: "Le 1er janvier 1994", d: "Le 7 février 1992" },
                    reponse: "c",
                    explication: "Le 1er janvier 1994 : Entrée en vigueur de l'ALENA.",
                    page: 5
                },
                {
                    question: "Parmi les propositions suivantes, quel était l'un des objectifs principaux de l'ALÉNA ?",
                    options: { a: "Instaurer un marché commun avec des institutions supranationales.", b: "Assurer la libre circulation des personnes entre les trois pays.", c: "Harmoniser complètement les législations sociales et fiscales.", d: "Éliminer les barrières douanières et faciliter les échanges transfrontaliers de biens et de services." },
                    reponse: "d",
                    explication: "L'ALENA avait pour objectifs : D) Éliminer les barrières douanières et faciliter les échanges transfrontaliers des biens et des services",
                    page: 5
                },
                {
                    question: "Quel principe de l'ALÉNA garantissait que les produits et investisseurs d'un pays membre soient traités de la même manière que les produits et investisseurs nationaux ?",
                    options: { a: "L'accès garanti au marché", b: "La propriété intellectuelle", c: "Le traitement national", d: "L'élimination des droits de douane" },
                    reponse: "c",
                    explication: "Traitement national : Le Canada, les États-Unis et le Mexique traitent les produits, les services et les investisseurs des deux autres parties de la même façon que les leurs.",
                    page: 6
                },
                {
                    question: "Comment étaient réglés les différends concernant les mesures antidumping sous l'ALÉNA ?",
                    options: { a: "Par les tribunaux nationaux du pays importateur.", b: "Par des groupes spéciaux binationaux, et non par des tribunaux nationaux.", c: "Par la Cour internationale de Justice.", d: "Par la Commission du libre-échange directement." },
                    reponse: "b",
                    explication: "Ce sont des groupes spéciaux binationaux et non des tribunaux nationaux qui réglaient les différends ou déterminaient les voies de recours contre les mesures antidumpings ou compensatoires.",
                    page: 6
                },
                {
                    question: "Quelle institution, composée de représentants ministériels, était chargée de superviser l'application générale de l'ALÉNA ?",
                    options: { a: "Le Secrétariat de l'ALÉNA", b: "La Commission du libre-échange", c: "Le Comité consultatif public mixte", d: "Les Coordonnateurs de l'ALÉNA" },
                    reponse: "b",
                    explication: "Commission du libre-échange. Composée de représentants ministériels des trois pays membres de l'ALENA. Supervise l'application de l'Accord...",
                    page: 7
                },
                {
                    question: "Quel était le rôle du Secrétariat de l'ALÉNA ?",
                    options: { a: "Superviser les travaux des comités et des groupes de travail.", b: "Négocier les amendements à l'accord.", c: "Administrer les dispositions relatives au règlement des différends prévues aux chapitres 14, 19 et 20.", d: "Formuler des conseils sur les questions environnementales." },
                    reponse: "c",
                    explication: "est chargé de l'administration des dispositions relatives au règlement des différends et des mécanismes de règlement des différends prévus aux chapitres 14, 19 et 20 de l'Accord...",
                    page: 7
                },
                // CHAPITRE II
                {
                    section: "Chapitre II : L'ACEUM",
                    question: "À quelle date l'ACEUM est-il entré en vigueur ?",
                    options: { a: "31 octobre 2018", b: "30 novembre 2018", c: "1er juillet 2020", d: "1er janvier 2020" },
                    reponse: "c",
                    explication: "L'ACÉUM est entré en vigueur le 1er juillet 2020, conformément au Protocole de 2018 visant à remplacer l'ALÉNA par l'ACÉUM.",
                    page: 10
                },
                {
                    question: "Outre le renforcement des liens économiques, quel objectif l'ACEUM vise-t-il spécifiquement pour s'adapter au monde moderne ?",
                    options: { a: "Créer une union monétaire.", b: "Être un accord de grande qualité adapté au XXIème siècle.", c: "Intégrer tous les pays d'Amérique latine.", d: "Remplacer l'Organisation Mondiale du Commerce." },
                    reponse: "b",
                    explication: "...remplacer l'Accord de libre-échange nord-américain de 1994 et être un accord de grande qualité adapté au XXIème siècle pour soutenir des échanges commerciaux mutuellement avantageux...",
                    page: 10
                },
                {
                    question: "Quel est l'un des nouveaux objectifs de l'ACEUM qui n'était pas explicitement mis en avant dans l'ALÉNA ?",
                    options: { a: "Faciliter le commerce entre les parties.", b: "Promouvoir la protection et le respect des droits des travailleurs.", c: "Augmenter les occasions d'investissement.", d: "Éliminer les barrières douanières." },
                    reponse: "b",
                    explication: "promouvoir la protection et le respect des droits des travailleurs, l'amélioration des conditions de travail, ainsi que le renforcement de la coopération...",
                    page: 11
                },
                {
                    question: "Quelle est la durée de validité initiale de l'ACEUM avant qu'une reconduction ne soit nécessaire ?",
                    options: { a: "10 ans", b: "16 ans", c: "20 ans", d: "Indéfinie" },
                    reponse: "b",
                    explication: "Le présent accord prend fin 16 ans après la date de son entrée en vigueur, à moins que chacune des Parties ne confirme qu'elle souhaite qu'il soit reconduit pour une nouvelle période de 16 ans...",
                    page: 12
                },
                {
                    question: "À quelle fréquence les parties doivent-elles procéder à un 'examen conjoint' du fonctionnement de l'accord ?",
                    options: { a: "Tous les deux ans", b: "Tous les cinq ans", c: "Tous les six ans", d: "Tous les dix ans" },
                    reponse: "c",
                    explication: "Au plus tard à la date du sixième anniversaire de l'entrée en vigueur du présent accord, la Commission se réunit pour procéder à un « examen conjoint » du fonctionnement du présent accord...",
                    page: 12
                },
                {
                    question: "Que se passe-t-il si une seule partie se retire de l'ACEUM ?",
                    options: { a: "L'accord est entièrement dissous pour tout le monde.", b: "L'accord demeure en vigueur pour les deux autres parties.", c: "Des sanctions économiques sont appliquées à la partie qui se retire.", d: "Le retrait n'est pas autorisé avant la fin des 16 ans." },
                    reponse: "b",
                    explication: "En cas de retrait d'une Partie, le présent accord demeure en vigueur pour les autres Parties.",
                    page: 13
                },
                {
                    question: "Par rapport à l'ALÉNA, comment l'ACEUM a-t-il amélioré les possibilités de modification de l'accord ?",
                    options: { a: "Il interdit toute modification pour garantir la stabilité.", b: "Il prévoit explicitement que les Parties peuvent amender l'accord (article 34.3) et permet à la Commission de modifier les tarifs douaniers.", c: "Seul un bref article (2202 dans l'ALÉNA) permettait des modifications.", d: "b et c sont corrects." },
                    reponse: "d",
                    explication: "L'ALÉNA ne prévoyait pas sa renégociation et seul le bref article 2202 indiquait... L'ACÉUM est plus explicite... Son article 34.3 prévoit que les Parties peuvent convenir d'amender l'accord...",
                    page: 14
                },
                {
                    question: "Quel nouveau chapitre de l'ACEUM réaffirme le droit de propriété inaliénable du Mexique sur ses hydrocarbures ?",
                    options: { a: "Chapitre 6", b: "Chapitre 8", c: "Chapitre 12", d: "Chapitre 19" },
                    reponse: "b",
                    explication: "Le chapitre 8 porte sur « la reconnaissance du droit de propriété direct, inaliénable et imprescriptible des États-Unis du Mexique sur les hydrocarbures ».",
                    page: "14-15"
                },
                {
                    question: "Lequel de ces thèmes est couvert par un nouveau chapitre dans l'ACEUM, alors qu'il était absent de l'ALÉNA ?",
                    options: { a: "L'agriculture", b: "Le commerce numérique (chapitre 19)", c: "Les produits textiles", d: "L'investissement" },
                    reponse: "b",
                    explication: "D'autres chapitres dignes de mention sont consacrés à des thèmes qui n'étaient pas couverts par l'ALÉNA [...] le commerce numérique (chapitre 19)...",
                    page: 15
                },
                {
                    question: "Dans le secteur laitier, quel pourcentage du marché canadien le Canada a-t-il concédé en franchise aux États-Unis ?",
                    options: { a: "1,59 %", b: "3,59 %", c: "5,00 %", d: "10,00 %" },
                    reponse: "b",
                    explication: "Ces concessions équivalent à 3,59 % du marché laitier canadien...",
                    page: 17
                },
                {
                    question: "Que stipule l'ACEUM concernant l'imposition de droits de douane sur les 'produits numériques' ?",
                    options: { a: "Elle est autorisée pour tous les types de produits.", b: "Elle est autorisée uniquement pour les logiciels.", c: "Elle est prohibée, à l'exception de la taxation intérieure d'un État.", d: "Elle est fixée à un taux commun de 5%." },
                    reponse: "c",
                    explication: "l'ACÉUM prohibe l'imposition de droits de douane sur les transmissions électroniques, exception faite de la taxation intérieure d'un État.",
                    page: 18
                },
                {
                    question: "Quelle contrainte l'ACEUM impose-t-il aux États concernant la localisation des installations informatiques des entreprises étrangères ?",
                    options: { a: "Il oblige les entreprises à stocker leurs données localement.", b: "Il empêche les Parties d'exiger l'utilisation ou la localisation d'installations informatiques sur leur territoire pour exercer une activité commerciale.", c: "Il encourage la localisation des serveurs pour des raisons de sécurité.", d: "Il n'impose aucune contrainte à ce sujet." },
                    reponse: "b",
                    explication: "l'ACÉUM empêche les Parties d'assujettir l'exercice d'activités commerciales des entreprises étrangères à l'utilisation ou la localisation d'installations informatiques sur le territoire national.",
                    page: 18
                },
                {
                    question: "Quelle est la nouvelle exigence de contenu en valeur régionale (CVR) pour les véhicules légers ?",
                    options: { a: "62,5 %", b: "70 %", c: "75 %", d: "100 %" },
                    reponse: "c",
                    explication: "...relevant le seuil de contenu en valeur régionale de 62,5 % prévu par l'ALÉNA à 75% en vertu de l'AEUMC...",
                    page: 19
                },
                {
                    question: "Quelle nouvelle règle l'ACEUM introduit-il concernant le salaire des ouvriers dans le secteur automobile ?",
                    options: { a: "Le salaire minimum doit être de 10 USD de l'heure.", b: "40% à 45% du contenu des véhicules doit provenir d'usines où le salaire est d'au moins 16 USD de l'heure.", c: "Tous les ouvriers du secteur doivent gagner au moins 20 USD de l'heure.", d: "Le salaire horaire moyen doit être identique dans les trois pays." },
                    reponse: "b",
                    explication: "...40% des automobiles (45% des camions et véhicules lourds) devront être fabriqués ou assemblés par une main d'œuvre dont le salaire horaire moyen est au moins de 16 USD...",
                    page: 19
                },
                {
                    question: "Quelle nouvelle exigence l'ACEUM impose-t-il concernant l'origine de l'aluminium et du verre dans le secteur automobile ?",
                    options: { a: "50% doit provenir de la région nord-américaine.", b: "70% de l'aluminium et du verre doit provenir de la région nord-américaine.", c: "100% doit provenir de la région nord-américaine.", d: "Aucune exigence spécifique n'est mentionnée." },
                    reponse: "b",
                    explication: "exigeant que 70% de l'aluminium et du verre utilisés dans la production de l'automobile proviennent de la région nord-américaine.",
                    page: 19
                },
                {
                    question: "Quelle est la nouvelle durée de protection des droits d'auteur pour les œuvres littéraires et artistiques ?",
                    options: { a: "50 ans après la mort de l'auteur.", b: "La vie de l'auteur plus 70 ans.", c: "95 ans à partir de la publication.", d: "La vie de l'auteur plus 50 ans." },
                    reponse: "b",
                    explication: "Ainsi, dans l'ACEUM, les droits d'auteur correspondant à la vie de l'auteur ont été relevés à 70 ans pour ce qui est des œuvres littéraires et artistiques...",
                    page: 21
                },
                {
                    question: "Qu'est-ce que l'ACEUM a introduit pour renforcer la protection des travailleurs ?",
                    options: { a: "La création d'une agence de l'emploi nord-américaine.", b: "L'interdiction d'importer des biens produits par le travail forcé et la création d'un Conseil du travail.", c: "La mise en place d'un salaire minimum unique pour les trois pays.", d: "La liberté totale de circulation des travailleurs." },
                    reponse: "b",
                    explication: "interdit l'importation de biens produits par le travail forcé [...] créé un Conseil du travail composé de représentants des gouvernements de chaque Etat...",
                    page: 22
                },
                {
                    question: "Comment l'ACEUM simplifie-t-il la procédure de certification d'origine ?",
                    options: { a: "En supprimant totalement la certification.", b: "En introduisant un mécanisme d'auto-certification par l'exportateur, le producteur ou l'importateur.", c: "En exigeant une certification par une autorité gouvernementale unique.", d: "En imposant des inspections physiques pour chaque envoi." },
                    reponse: "b",
                    explication: "...la simplification de la procédure de certification d'origine en introduisant un mécanisme d'auto-certification pouvant être effectué par l'exportateur, le producteur ou l'importateur.",
                    page: 22
                },
                {
                    question: "Quelle est la particularité du chapitre sur les marchés publics dans l'ACEUM ?",
                    options: { a: "Il s'applique de manière identique aux trois pays.", b: "Il renforce les obligations pour les trois pays par rapport à l'ALÉNA.", c: "Les dispositions ne lient que les États-Unis et le Mexique, le Canada ayant choisi de s'exclure de ce chapitre.", d: "Il a été complètement supprimé." },
                    reponse: "c",
                    explication: "Le chapitre 13 marque toutefois une nette rupture avec l'ALÉNA : les dispositions applicables aux marchés publics ne lient que les États-Unis et le Mexique. [...] le Canada a préféré s'exclure de ce pan important de l'accord régional.",
                    page: 23
                },
                {
                    question: "Quelle position le Canada a-t-il adoptée concernant le mécanisme de règlement des différends entre investisseurs et États (ISDS) ?",
                    options: { a: "Il a renforcé le mécanisme.", b: "Il a choisi de se retirer de ce mécanisme.", c: "Il a étendu le mécanisme à tous les secteurs.", d: "Il a maintenu le mécanisme tel qu'il existait dans l'ALÉNA." },
                    reponse: "b",
                    explication: "Il a tout de même choisi de se retirer du mécanisme de règlement des différends prévu à ce chapitre.",
                    page: 24
                },
                {
                    question: "Quel mécanisme de l'ALÉNA, jugé essentiel par le Canada, a été maintenu dans l'ACEUM pour les différends sur les droits antidumping ?",
                    options: { a: "L'arbitrage investisseur-État du chapitre 11.", b: "Le recours aux tribunaux nationaux.", c: "La procédure de règlement des différends interétatiques du chapitre 20.", d: "La procédure d'examen par un groupe spécial binational (ancien chapitre 19)." },
                    reponse: "d",
                    explication: "L'ACÉUM reconduit à la section D de son chapitre 10 la procédure qui permet l'examen par un groupe spécial binational des différends relatifs aux droits antidumping et compensateurs.",
                    page: 25
                },
                {
                    question: "Que prévoit la 'clause sur la Chine' (article 32.10) si un pays membre conclut un accord de libre-échange avec un pays 'n'ayant pas une économie de marché' ?",
                    options: { a: "Rien, chaque pays est souverain.", b: "L'accord doit être approuvé par les deux autres membres.", c: "Les autres parties peuvent mettre fin à l'ACEUM et le remplacer par un accord bilatéral.", d: "Des droits de douane punitifs sont automatiquement appliqués." },
                    reponse: "c",
                    explication: "...« [s]i une Partie conclut un accord de libre-échange avec un pays n'ayant pas une économie de marché, les autres Parties pourront mettre fin au présent accord moyennant un préavis de six mois, et remplacer le présent accord par un accord bilatéral entre elles ».",
                    page: 26
                }
            ]
        },
        'M04': {
            title: 'MEO-M04 : Environnement Juridique des Affaires',
            questions: [
                {
                    section: "Première Partie : Cohabitation des Normes",
                    question: "Quelle organisation a pour vocation d'harmoniser les législations de ses États membres dans des domaines comme les activités de banque, de change et de concurrence ?",
                    options: { a: "L'OAPI", b: "La CIMA", c: "L'UEMOA", d: "La CIPRES" },
                    reponse: "c",
                    explication: "L'organisation UEMOA... a aussi pour vocation d'harmoniser les législations de ses Etats membres... notamment les pratiques anticoncurrentielles, des changes et dans le domaine des banques etc.",
                    page: 4
                },
                {
                    question: "Le Règlement n°02/18/CEMAC/UMAC/CM concerne principalement :",
                    options: { a: "Le droit des assurances", b: "La propriété intellectuelle", c: "La réglementation des changes dans la CEMAC", d: "Le droit de la concurrence dans l'UEMOA" },
                    reponse: "c",
                    explication: "Les règles CEMAC relatives à la réglementation des changes sont très similaires à celles de l'UEMOA ; ce règlement qui date de 2018 (Règlement n°02/18/CEMAC/UMAC/CM du 21 décembre 2018 portant réglementation des changes dans la CEMAC)...",
                    page: 6
                },
                {
                    question: "L'OAPI (Organisation Africaine de la Propriété Intellectuelle) a pour mission de protéger et publier des droits concernant :",
                    options: { a: "Uniquement le droit des assurances", b: "Uniquement le droit bancaire", c: "Les brevets d'invention, les marques, les modèles industriels et le droit d'auteur", d: "Les contrats de transport de marchandises" },
                    reponse: "c",
                    explication: "Cette réglementation concerne respectivement : les brevets d'invention ; les modèles d'utilité ; les marques de produit ou de service ; les dessins ou modèles industriels... le droit d'auteur...",
                    page: 7
                },
                {
                    question: "La législation unique des assurances CIMA (Conférence Interafricaine des Marchés d'Assurances) s'applique à :",
                    options: { a: "Toutes les assurances, y compris maritimes et fluviales", b: "Uniquement aux sociétés de réassurance", c: "Uniquement aux assurances maritimes et fluviales", d: "Aux assurances terrestres, à l'exclusion des assurances maritimes et fluviales" },
                    reponse: "d",
                    explication: "La législation des assurances ne s'applique qu'aux assurances terrestres à l'exclusion des assurances maritimes et fluviales.",
                    page: 8
                },
                {
                    question: "Quel est l'objectif principal du traité de l'OHADA ?",
                    options: { a: "Créer une monnaie unique pour l'Afrique", b: "Harmoniser le droit des affaires pour garantir la sécurité juridique et judiciaire", c: "Gérer la propriété intellectuelle au niveau continental", d: "Réglementer le secteur des assurances maritimes" },
                    reponse: "b",
                    explication: "L'OHADA vise à harmoniser le droit des affaires en Afrique pour restaurer la confiance des investisseurs et garantir la sécurité juridique et judiciaire des activités économiques.",
                    page: 10
                },
                {
                    question: "Combien d'États membres l'OHADA comprend-elle actuellement ?",
                    options: { a: "14 États", b: "17 États", c: "10 États", d: "21 États" },
                    reponse: "b",
                    explication: "...née en 1993, l'OHADA comprend actuellement 17 Etats...",
                    page: 10
                },
                {
                    question: "Comment s'appellent les lois produites par l'OHADA qui couvrent divers domaines du droit des affaires ?",
                    options: { a: "Les Règlements communautaires", b: "Les Directives", c: "Les Actes uniformes", d: "Les Traités constitutifs" },
                    reponse: "c",
                    explication: "Les lois qu'elle sécrète sont appelées « actes uniformes » et elles couvrent un certain nombre de domaines du droit des affaires.",
                    page: 10
                },
                {
                    question: "Lequel de ces domaines N'EST PAS couvert par un Acte uniforme de l'OHADA ?",
                    options: { a: "Le droit commercial général", b: "Le droit des sociétés commerciales", c: "Le droit fiscal", d: "Le droit de l'arbitrage" },
                    reponse: "c",
                    explication: "Le droit fiscal n'est pas cité parmi les domaines d'application des actes uniformes de l'OHADA. Les autres domaines (droit commercial, sociétés, arbitrage, etc.) sont explicitement mentionnés.",
                    page: "10-11"
                },
                {
                    question: "Quelle institution du système OHADA est compétente pour adopter et modifier les actes uniformes ?",
                    options: { a: "La Conférence des chefs d'Etat et de Gouvernement", b: "La Cour Commune de Justice et d'Arbitrage (CCJA)", c: "Le Secrétariat Permanent", d: "Le Conseil des Ministres" },
                    reponse: "d",
                    explication: "Le conseil des Ministres... Celui-ci est notamment compétent pour adopter, modifier les actes uniformes et déterminer le domaine du droit des affaires.",
                    page: 12
                },
                {
                    question: "La Cour Commune de Justice et d'Arbitrage (CCJA) a pour principale vocation de :",
                    options: { a: "Juger les affaires pénales liées au droit des affaires", b: "Former les magistrats des États membres", c: "Se substituer aux Cours nationales de cassation pour unifier l'interprétation du droit uniforme", d: "Proposer des projets d'Actes uniformes au Conseil des Ministres" },
                    reponse: "c",
                    explication: "La CCJA... a pour vocation de substituer aux Cours nationales de cassation afin d'unifier l'interprétation du droit uniforme par les juridictions de fond...",
                    page: 12
                },
                {
                    question: "Au sein de l'OHADA, quel est le rôle de l'ERSUMA (École Régionale Supérieure de la Magistrature) ?",
                    options: { a: "Rédiger les projets d'Actes uniformes", b: "Assurer la formation et le perfectionnement des magistrats et auxiliaires de justice", c: "Juger les litiges en dernière instance", d: "Gérer l'immatriculation des entreprises au RCCM" },
                    reponse: "b",
                    explication: "L'ERSUMA, basée à Porto-Novo, est l'institution en charge de la formation, du perfectionnement et de la recherche en droit des affaires unifié.",
                    page: 12
                },
                {
                    section: "Deuxième Partie : Les Acteurs",
                    question: "Selon l'Acte uniforme OHADA portant droit commercial général, qui est le nouvel acteur juridique apparu en 2010 ?",
                    options: { a: "L'artisan", b: "Le commerçant", c: "L'entreprenant", d: "L'agriculteur" },
                    reponse: "c",
                    explication: "Avec l'entrée en vigueur du nouvel acte uniforme portant droit commercial général du 15 décembre 2010, il y a l'entrée en scène d'un nouvel acteur dans le monde des affaires qui est l'entreprenant.",
                    page: 15
                },
                {
                    question: "Comment l'Acte uniforme définit-il l'entreprenant ?",
                    options: { a: "Une personne qui accomplit des actes de commerce par nature", b: "Un professionnel, personne physique, qui exerce une activité professionnelle civile", c: "Un dirigeant de société anonyme", d: "Un artisan qui emploie plus de 10 personnes" },
                    reponse: "b",
                    explication: "L'entreprenant est une personne physique qui, sur simple déclaration, exerce une activité professionnelle civile, artisanale ou agricole. Il est distinct du commerçant.",
                    page: 15
                },
                {
                    question: "Quelle est la principale différence entre un artisan et un commerçant ?",
                    options: { a: "L'artisan est immatriculé au RCCM, le commerçant au Répertoire des métiers", b: "L'artisan vit de son travail manuel, le commerçant tire profit d'actes de commerce", c: "L'artisan ne peut pas avoir de fonds de commerce", d: "Le commerçant relève des juridictions civiles, l'artisan des juridictions commerciales" },
                    reponse: "b",
                    explication: "Celui-ci [l'artisan] vit de son travail manuel alors que le commerçant trouve son profit dans l'accomplissement d'actes de commerce.",
                    page: 14
                },
                {
                    question: "Selon l'article 2 de l'Acte uniforme OHADA, comment est défini le commerçant ?",
                    options: { a: "Celui qui exerce une activité manuelle de manière indépendante", b: "Celui qui fait de l'accomplissement des actes de commerce par nature sa profession", c: "Toute personne physique dirigeant une entreprise", d: "Celui qui est inscrit au Répertoire des métiers" },
                    reponse: "b",
                    explication: "Le commerçant est défini par son activité : selon l'article 2 de l'acte uniforme portant droit commercial général : « Est commerçant celui qui fait de l'accomplissement des actes de commerce par nature sa profession ».",
                    page: 16
                },
                {
                    question: "Quelle est l'une des obligations principales du commerçant en vertu du droit OHADA ?",
                    options: { a: "Avoir un diplôme en gestion", b: "S'immatriculer au Registre du Commerce et du Crédit Mobilier (RCCM)", c: "Ne travailler qu'avec des fournisseurs de la zone OHADA", d: "Publier ses comptes dans un journal chaque mois" },
                    reponse: "b",
                    explication: "Tout commerçant a l'obligation de s'immatriculer au RCCM, ce qui lui confère la personnalité juridique et atteste de sa qualité de commerçant.",
                    page: 17
                },
                {
                    question: "Lequel de ces éléments est un exemple d'incompatibilité avec l'exercice de la profession de commerçant ?",
                    options: { a: "Être actionnaire dans une société anonyme", b: "Être un franchisé", c: "Être un fonctionnaire", d: "Être un mineur émancipé" },
                    reponse: "c",
                    explication: "L'article 9 du même acte uniforme prévoit des incompatibilités... notamment ; -les fonctionnaires et personnels des collectivités publiques...",
                    page: 17
                },
                {
                    question: "Selon l'Acte uniforme OHADA, qu'est-ce qu'une société commerciale ?",
                    options: { a: "Toute activité générant un bénéfice", b: "Un contrat par lequel deux ou plusieurs personnes affectent des biens à une activité pour partager le bénéfice", c: "Une entreprise individuelle dotée de la personnalité morale", d: "Toute organisation immatriculée au RCCM" },
                    reponse: "b",
                    explication: "...« la société commerciale est créée par deux ou plusieurs personnes qui conviennent, par un contrat, d'affecter à une activité des biens en numéraire ou en nature, dans le but de partager le bénéfice... »",
                    page: 18
                },
                {
                    question: "Comment se nomme la volonté commune des associés de collaborer activement à la poursuite de l'œuvre commune ?",
                    options: { a: "Le capital social", b: "L'intuitu personae", c: "L'affectio societatis", d: "L'objet social" },
                    reponse: "c",
                    explication: "L'affectio societatis est l'intention de s'associer, de collaborer sur un pied d'égalité au succès de l'entreprise commune. C'est un élément essentiel du contrat de société.",
                    page: 18
                },
                {
                    question: "Quel type d'apport ne compte pas dans la détermination du capital social ?",
                    options: { a: "L'apport en numéraire", b: "L'apport en nature", c: "L'apport en industrie", d: "L'apport en jouissance" },
                    reponse: "c",
                    explication: "On dit qu'il y a apport en industrie lorsque l'associé apporte... son expertise, son intelligence ou encore sa force de travail... il ne compte pas pour la détermination du capital social.",
                    page: 20
                },
                {
                    question: "Qu'est-ce qu'un apport en nature ?",
                    options: { a: "Un apport d'une somme d'argent", b: "Un apport de connaissances techniques", c: "Un apport d'un bien autre qu'une somme d'argent (immeuble, fonds de commerce, brevet...)", d: "Un apport de force de travail" },
                    reponse: "c",
                    explication: "L'apport en nature est l'apport de tout bien autre que de l'argent. Il doit faire l'objet d'une évaluation par un commissaire aux apports.",
                    page: 20
                },
                {
                    question: "Qu'est-ce qu'une clause léonine ?",
                    options: { a: "Une clause qui répartit les bénéfices de manière égale entre tous les associés", b: "Une clause qui prive un associé de tout droit aux bénéfices ou le met à l'abri des pertes", c: "Une clause qui donne tous les pouvoirs au gérant", d: "Une clause qui prévoit la dissolution de la société en cas de conflit" },
                    reponse: "b",
                    explication: "Ce sont des clauses privant un ou plusieurs associés de tout droit aux bénéfices ou les mettant à l'abri de toute contribution aux pertes. Elles sont réputées non écrites.",
                    page: 21
                },
                {
                    question: "Une société commerciale acquiert la personnalité juridique à compter de :",
                    options: { a: "La signature des statuts", b: "La première assemblée générale", c: "Son immatriculation au RCCM", d: "La libération totale du capital social" },
                    reponse: "c",
                    explication: "À la faveur de l'adoption des actes uniformes « toute société jouit de la personnalité juridique à compter de son immatriculation au RCCM ».",
                    page: 21
                },
                {
                    question: "Quelle est la principale caractéristique d'une société de personnes comme la SNC ?",
                    options: { a: "Les parts sociales sont librement cessibles", b: "La responsabilité des associés est limitée à leurs apports", c: "La considération de la personne de l'associé est essentielle (intuitu personae)", d: "Le nombre d'associés est illimité" },
                    reponse: "c",
                    explication: "Dans les sociétés de personnes, la considération de l'associé est essentielle. Les parts sociales ne sont pas librement cessibles. Ce sont des sociétés à fort intuitu personae...",
                    page: 23
                },
                {
                    question: "Quelle est la principale caractéristique d'une société de capitaux comme la SA ?",
                    options: { a: "Les associés sont indéfiniment et solidairement responsables des dettes", b: "La personne de l'associé est plus importante que ses apports", c: "Les titres (actions) sont en principe librement négociables et la responsabilité est limitée aux apports", d: "Elle ne peut être constituée que par 2 associés maximum" },
                    reponse: "c",
                    explication: "Dans les sociétés de capitaux (SA, SAS), la considération des capitaux apportés est essentielle. Les actions sont librement cessibles et la responsabilité des actionnaires est limitée à leurs apports.",
                    page: 23
                },
                {
                    question: "Dans une Société à Responsabilité Limitée (SARL), la responsabilité des associés est :",
                    options: { a: "Indéfinie et solidaire sur leurs biens personnels", b: "Limitée au montant de leurs apports", c: "Nulle, car seul le gérant est responsable", d: "Définie par le juge au cas par cas" },
                    reponse: "b",
                    explication: "La SARL est une société dans laquelle la responsabilité des associés pour les dettes sociales est limitée au montant de leurs apports.",
                    page: 26
                },
                {
                    question: "Quelle forme de société offre une grande liberté statutaire pour organiser sa direction et son fonctionnement ?",
                    options: { a: "La Société en Nom Collectif (SNC)", b: "La Société Anonyme (SA)", c: "La Société par Actions Simplifiée (SAS)", d: "La Société en Commandite Simple (SCS)" },
                    reponse: "c",
                    explication: "La SAS est une forme de société très prisée pour sa souplesse, offrant une grande liberté aux associés pour organiser les règles de fonctionnement dans les statuts.",
                    page: 28
                },
                {
                    question: "Quelle Assemblée Générale est seule habilitée à modifier les statuts d'une société ?",
                    options: { a: "L'Assemblée Générale Ordinaire (AGO)", b: "L'Assemblée Générale Extraordinaire (AGE)", c: "L'Assemblée Générale Spéciale", d: "L'Assemblée constitutive" },
                    reponse: "b",
                    explication: "L'Assemblée Générale extraordinaire est seule habilitée à modifier les statuts dans toutes leurs dispositions (augmentation de capital, changement d'objet social, etc.).",
                    page: 30
                },
                {
                    question: "Quel est le rôle principal de l'Assemblée Générale Ordinaire (AGO) ?",
                    options: { a: "Modifier la forme juridique de la société", b: "Approuver les comptes annuels, décider de l'affectation du résultat et nommer les dirigeants", c: "Décider de la fusion avec une autre société", d: "Transférer le siège social à l'étranger" },
                    reponse: "b",
                    explication: "L'AGO est réunie au moins une fois par an pour statuer sur les comptes de l'exercice écoulé, décider de la distribution de dividendes, et nommer ou révoquer les organes de gestion.",
                    page: 30
                },
                {
                    question: "Quel est le rôle essentiel d'un commissaire aux comptes dans une société anonyme ?",
                    options: { a: "Conseiller les dirigeants sur les opportunités de gestion", b: "Représenter les actionnaires au conseil d'administration", c: "Vérifier la légalité des actes des dirigeants et la conformité de la comptabilité", d: "Déclencher la procédure de redressement judiciaire" },
                    reponse: "c",
                    explication: "Son rôle essentiel est de vérifier que les actes des dirigeants ont été pris dans la légalité... le commissaire aux comptes a pour mission de vérifier les valeurs et les documents comptables... et de contrôler la conformité de sa comptabilité...",
                    page: 32
                },
                {
                    question: "La 'procédure d'alerte' déclenchée par le commissaire aux comptes a pour but :",
                    options: { a: "De dénoncer la société aux autorités fiscales", b: "D'attirer l'attention des dirigeants sur des faits de nature à compromettre la continuité de l'exploitation", c: "De lancer un audit de qualité", d: "De préparer l'assemblée générale ordinaire" },
                    reponse: "b",
                    explication: "En cas de difficultés, le commissaire aux comptes a l'obligation de déclencher une procédure d'alerte pour informer les dirigeants des risques pesant sur la pérennité de l'entreprise.",
                    page: 33
                }
            ]
        },

        //Module 05

'M05': {
            title: 'MEO-M05 : Notion de management',
            questions: [
                {
                    section: "Chapitre 1 : Généralités du management",
                    question: "D'après le cours, le management est défini comme :",
                    options: { a: "L'ensemble des connaissances concernant l'organisation et la gestion des organisations", b: "L'art de faire tourner un cheval dans un manège", c: "Uniquement l'administration au sens de Fayol", d: "Une science exacte permettant de prédire les résultats" },
                    reponse: "a",
                    explication: "Le management est l'ensemble des connaissances concernant l'organisation et la gestion des organisations. Le mot vient de l'anglais 'manager' qui veut dire gérer, diriger.",
                    page: 6
                },
                {
                    question: "Le management oscille entre deux pôles qui lui donnent ses spécificités. Lesquels ?",
                    options: { a: "Le profit et la perte", b: "Le long terme et le court terme", c: "La théorie et la pratique", d: "La hiérarchie et l'autonomie" },
                    reponse: "c",
                    explication: "En tant que science, le management oscille entre plusieurs pôles qui le caractérisent... une alternance entre théorie et pratique.",
                    page: 6
                },
                {
                    question: "Parmi les enjeux du management, lequel vise à limiter le départ des salariés ?",
                    options: { a: "L'optimisation des résultats", b: "La cohésion d'équipe", c: "Le développement de la performance", d: "La fidélisation de l'équipe" },
                    reponse: "d",
                    explication: "Un des enjeux du management est la fidélisation de l'équipe : en prenant en compte les valeurs de chaque salarié, le manager a tout intérêt à fidéliser son équipe afin de limiter le turn-over.",
                    page: 7
                },
                {
                    question: "Quelles sont les deux finalités principales du management retenues dans le cours ?",
                    options: { a: "La finalité politique et la finalité culturelle", b: "La finalité technologique et la finalité environnementale", c: "La finalité économique et la finalité sociale", d: "La finalité financière exclusive" },
                    reponse: "c",
                    explication: "Dans le management, on peut retenir une finalité économique (produire des biens/services) et sociale (création d'emplois et leur pérennité).",
                    page: 7
                },
                {
                    question: "Quel avantage du management est directement lié à un meilleur climat social et de meilleures conditions de travail ?",
                    options: { a: "Plus de croissance", b: "Moins de turnover et d'absentéisme", c: "Plus de recrutement de clients", d: "Un gain de temps pour le manager" },
                    reponse: "b",
                    explication: "Le premier avantage est qu'il va permettre de réduire le turnover et l'absentéisme des équipes... grâce à une meilleure ambiance et de meilleures conditions de travail.",
                    page: 8
                },
                {
                    question: "Selon le cours, sur quelles deux composantes indissociables le management repose-t-il ?",
                    options: { a: "Le marketing et la finance", b: "Les ressources humaines et la production", c: "La stratégie et l'organisation", d: "L'innovation et le contrôle" },
                    reponse: "c",
                    explication: "Le management repose plus que jamais sur deux composantes indissociables : la stratégie et l'organisation. L'une est externe (environnement), l'autre interne.",
                    page: 10
                },
                {
                    question: "Selon Henri Fayol, les 5 fonctions de l'administration (management) sont résumées par l'acronyme POCCC. Que signifie le 'P' ?",
                    options: { a: "Planification", b: "Prévoyance", c: "Production", d: "Personnel" },
                    reponse: "b",
                    explication: "Henri Fayol décrit l'administration à partir de cinq éléments : Prévoyance, Organisation, Commandement, Coordination et Contrôle (POCCC).",
                    page: 11
                },
                {
                    question: "Quelle est la différence fondamentale entre l'efficacité et l'efficience ?",
                    options: { a: "L'efficacité est d'atteindre l'objectif, l'efficience est de le faire en optimisant les ressources", b: "L'efficience est d'atteindre l'objectif, l'efficacité est de le faire en optimisant les ressources", c: "Il n'y a aucune différence, les deux termes sont synonymes", d: "L'efficacité concerne les objectifs à long terme, l'efficience les objectifs à court terme" },
                    reponse: "a",
                    explication: "On distingue efficacité et efficience : l'efficacité, qui consiste à atteindre l'objectif fixé ; l'efficience, qui consiste à atteindre cet objectif en optimisant les ressources mobilisées.",
                    page: 12
                },
                {
                    section: "Chapitre 2 : Évolution historique de la pensée managériale",
                    question: "Le Taylorisme (ou Management Scientifique du Travail) repose sur quel principe majeur ?",
                    options: { a: "L'autonomie totale des ouvriers", b: "La division verticale du travail (séparation conception/exécution)", c: "La polyvalence des tâches pour chaque employé", d: "La prise de décision par consensus" },
                    reponse: "b",
                    explication: "Le Taylorisme est fondé sur la division verticale du travail : Partager la responsabilité entre les ouvriers (exécution) et les dirigeants (conception, supervision).",
                    page: 15
                },
                {
                    question: "Parmi les 14 principes de Fayol, lequel stipule qu'un subordonné ne doit recevoir d'instructions que d'un seul supérieur ?",
                    options: { a: "La discipline", b: "L'unité de direction", c: "L'ordre", d: "L'unité de commandement" },
                    reponse: "d",
                    explication: "L'unité de commandement : ce principe, hérité de l'organisation des armées, signifie qu'un subordonné ne reçoit des instructions que de la part d'un seul supérieur.",
                    page: 16
                },
                {
                    question: "Selon Max Weber, sur quel type de légitimité repose l'autorité dans une organisation bureaucratique moderne ?",
                    options: { a: "La légitimité charismatique (fondée sur les dons du leader)", b: "La légitimité traditionnelle (fondée sur la coutume)", c: "La légitimité rationnelle-légale (fondée sur des règles écrites)", d: "La légitimité par la force" },
                    reponse: "c",
                    explication: "Dans l'organisation proposée par Weber, l'autorité est fondée sur la légitimité rationnelle-légale, basée sur la croyance en la validité d'un statut légal et de règles établies.",
                    page: 18
                },
                {
                    question: "L'école des relations humaines, avec Elton Mayo, est née en réaction à :",
                    options: { a: "L'école de la contingence", b: "L'école sociologique", c: "L'école de la prise de décision", d: "Aux excès du Taylorisme et à la déshumanisation du travail" },
                    reponse: "d",
                    explication: "L'école des relations humaines s'est développée en réaction aux excès du taylorisme qui dans sa recherche de la productivité a engendré des comportements contraires à ses objectifs.",
                    page: 19
                },
                {
                    question: "L'effet Hawthorne, mis en évidence par Elton Mayo, démontre que la productivité est influencée par :",
                    options: { a: "Uniquement l'amélioration de l'éclairage", b: "Le niveau du salaire au rendement", c: "Des facteurs psychosociaux, comme le sentiment d'être observé et valorisé", d: "La stricte application des règles" },
                    reponse: "c",
                    explication: "Mayo en déduit que la simple connaissance par un individu qu'il est sujet d'observation modifie son comportement. C'est ce qu'on appelle « effet Hawthorne ».",
                    page: 19
                },
                {
                    question: "Dans la pyramide de Maslow, quel besoin doit être satisfait avant de pouvoir chercher à satisfaire le besoin d'appartenance ?",
                    options: { a: "Le besoin d'accomplissement", b: "Le besoin d'estime", c: "Le besoin de sécurité", d: "Aucun, l'ordre n'est pas important" },
                    reponse: "c",
                    explication: "Un individu cherche d'abord à satisfaire le besoin le plus vital. Le besoin de sécurité (niveau 2) doit être satisfait avant le besoin d'appartenance (niveau 3).",
                    page: 20
                },
                {
                    question: "D'après la théorie de Herzberg, comment sont qualifiés les facteurs qui, s'ils sont absents, créent de l'insatisfaction (ex: salaire, conditions de travail) ?",
                    options: { a: "Facteurs de motivation", b: "Facteurs de satisfaction", c: "Facteurs d'hygiène", d: "Facteurs de performance" },
                    reponse: "c",
                    explication: "Herzberg qualifie de 'facteurs d'hygiène' les éléments (salaire, sécurité, etc.) qui ne sont pas une source de motivation mais dont l'absence peut empêcher l'insatisfaction.",
                    page: 21
                },
                {
                    question: "La Théorie Y de Douglas McGregor suppose que l'individu moyen :",
                    options: { a: "Éprouve une aversion innée pour le travail", b: "Préfère être dirigé et éviter les responsabilités", c: "Peut considérer l'effort au travail comme aussi naturel que le jeu ou le repos", d: "Doit être contrôlé et menacé de sanctions pour être productif" },
                    reponse: "c",
                    explication: "La Théorie Y propose des hypothèses optimistes : L'effort au travail est aussi naturel que l'effort au jeu ou au plaisir du repos.",
                    page: 21
                },
                {
                    question: "Selon Rensis Likert, quel style de management est caractérisé par une confiance absolue envers les équipes et favorise les décisions collectives ?",
                    options: { a: "Le style autoritaire exploiteur", b: "Le style autoritaire paternaliste", c: "Le style consultatif", d: "Le style participatif" },
                    reponse: "d",
                    explication: "Le style participatif : il est caractérisé par une confiance absolue envers les équipes de travail ce qui conduit à prendre des décisions collectives et à favoriser l'élaboration de rapports de coopération.",
                    page: 23
                },
                {
                    question: "L'école de la prise de décision, avec H.A. Simon, introduit le concept de :",
                    options: { a: "Rationalité absolue de l'homo economicus", b: "Rationalité limitée, où le décideur cherche une solution 'satisfaisante' et non 'optimale'", c: "Prise de décision basée uniquement sur l'intuition", d: "Élimination totale de l'incertitude" },
                    reponse: "b",
                    explication: "Pour H.A. Simon, la rationalité est limitée par l'information disponible et les capacités du décideur, qui adopte une solution qui satisfait son critère sans chercher l'optimum.",
                    page: 24
                },
                {
                    question: "La Direction Participative Par Objectifs (DPPO) est un processus de management qui repose sur :",
                    options: { a: "Des objectifs imposés par la direction sans discussion", b: "Des objectifs vagues et non quantifiés", c: "Des objectifs négociés, quantifiés et datés, fixés en concertation entre hiérarchie et subordonnés", d: "L'absence totale d'objectifs pour favoriser la créativité" },
                    reponse: "c",
                    explication: "La DPPO est un processus de concertation établi entre la hiérarchie et les subordonnés dans le but de fixer des objectifs négociés de travail qui seront quantifiés et datés.",
                    page: 26
                },
                {
                    question: "La théorie de la contingence structurelle rompt avec les courants précédents en affirmant que :",
                    options: { a: "Il existe une seule et unique meilleure façon d'organiser une entreprise ('one best way')", b: "La structure de l'entreprise est indépendante de son environnement", c: "Il n'y a pas de structure idéale, mais autant de 'best way' qu'il existe de contextes différents", d: "La motivation des employés est le seul facteur important" },
                    reponse: "c",
                    explication: "Les théories de la contingence se caractérisent par leur rupture avec... l'existence d'une seule forme structurelle meilleure... pour donner comme alternative le principe selon lequel il n'y a pas de structure d'organisation idéale, mais autant de « best way » qu'il existe de contextes différents.",
                    page: 27
                },
                {
                    question: "Selon Burns et Stalker, une structure de type 'mécaniste' convient mieux à un environnement :",
                    options: { a: "Stable", b: "Instable et changeant", c: "Innovant", d: "Hautement compétitif" },
                    reponse: "a",
                    explication: "La structure d'organisation de type mécaniste... convient mieux de ce fait à un environnement stable.",
                    page: 29
                },
                {
                    question: "Qu'est-ce que la Théorie Z de William Ouchi ?",
                    options: { a: "Une théorie opposée à la théorie Y de McGregor", b: "Une synthèse des caractéristiques des entreprises japonaises et occidentales, fondée sur la loyauté et la confiance", c: "Un modèle de management purement autocratique", d: "Une théorie basée sur la fin du management" },
                    reponse: "b",
                    explication: "La théorie Z de William Ouchi s'appuie sur une synthèse des caractéristiques des entreprises japonaises et occidentales... Elle est fondée sur des valeurs, telles que : la loyauté, la fidélité, l'amitié et la confiance.",
                    page: 31
                },
                {
                    section: "Chapitre 3 : Types et styles de management",
                    question: "Quelle est la principale différence entre le management stratégique et le management opérationnel ?",
                    options: { a: "Le stratégique concerne le court terme, l'opérationnel le long terme", b: "Le stratégique engage l'organisation sur le moyen/long terme, l'opérationnel concerne la gestion courante", c: "Le stratégique est géré par la hiérarchie intermédiaire, l'opérationnel par la direction générale", d: "Il n'y a pas de différence notable" },
                    reponse: "b",
                    explication: "Le management stratégique engage l'organisation sur le moyen et le long terme. Le management opérationnel concerne la gestion courante de l'entreprise... avec des objectifs fixés à court et moyen terme.",
                    page: "32-33"
                },
                {
                    question: "Le style de management directif est particulièrement adapté pour un collaborateur qui est :",
                    options: { a: "Très expérimenté et autonome", b: "Compétent et très motivé", c: "Très inexpérimenté et peu autonome ('hésitant')", d: "Expert dans son domaine et force de proposition" },
                    reponse: "c",
                    explication: "Il est important d'être directif lorsque votre collaborateur a une très faible autonomie : il est très inexpérimenté dans sa fonction/mission, et il est ‘hésitant’.",
                    page: 34
                },
                {
                    question: "Un manager qui entraîne ses collaborateurs à se dépasser et fait parler sa créativité en proposant de nouvelles idées adopte un style :",
                    options: { a: "Directif", b: "Persuasif", c: "Participatif", d: "Délégatif" },
                    reponse: "b",
                    explication: "Le manager persuasif est celui qui entraîne ses collaborateurs à se dépasser, à faire toujours plus que ce dont ils s'estiment capables, et fait parler sa créativité en proposant toujours de nouvelles idées.",
                    page: 35
                },
                {
                    question: "Lequel de ces principes est à la base du management participatif ?",
                    options: { a: "La centralisation de toutes les décisions", b: "La limitation de la communication pour éviter les désaccords", c: "La délégation et la concertation pour rendre les collaborateurs autonomes", d: "L'imposition d'un mode de fonctionnement unique" },
                    reponse: "c",
                    explication: "Un des grands principes du management participatif est la délégation et la concertation : il faut rendre les collaborateurs autonomes, leur permettre de travailler à leur façon, les responsabiliser et les consulter.",
                    page: 35
                },
                {
                    question: "Le management délégatif est basé principalement sur :",
                    options: { a: "Le contrôle constant et les instructions précises", b: "La persuasion et la motivation par le discours", c: "La responsabilisation, la confiance et l'évaluation des résultats", d: "La prise de décision en groupe" },
                    reponse: "c",
                    explication: "Le management délégatif est basé sur la responsabilisation et la confiance, la déléguation et l'évaluation de ses collaborateurs. Il indique les missions et les résultats à obtenir en laissant la liberté des méthodes.",
                    page: 36
                },
                {
                    section: "Chapitre 4 : Outils de management",
                    question: "La méthode des '5, 10, 15, 30' est un outil qui sert à :",
                    options: { a: "Calculer la rentabilité d'un projet", b: "Planifier le temps à accorder aux collaborateurs (par jour, semaine, mois, trimestre)", c: "Mesurer la satisfaction client", d: "Définir les objectifs stratégiques de l'entreprise" },
                    reponse: "b",
                    explication: "Cette méthode présente tout simplement le temps qu'il est conseillé d'accorder à vos collaborateurs. 5 minutes par jour, 10 minutes par semaine, 15 minutes par mois et 30 minutes par trimestre.",
                    page: 38
                },
                {
                    question: "La 'grille socio-dynamique' ou 'carte des acteurs' a pour principal objectif de :",
                    options: { a: "Mesurer la performance financière des équipes", b: "Identifier le niveau d'adhésion des partenaires d'un projet", c: "Planifier les congés des collaborateurs", d: "Réaliser l'organigramme de l'entreprise" },
                    reponse: "b",
                    explication: "Cet outil, issu de la Socio-dynamique, permet d'identifier le niveau d'adhésion des partenaires (collaborateurs impactés) d'un projet.",
                    page: 38
                },
                {
                    question: "L'écoute active, concept développé à partir des travaux de Carl Rogers, consiste principalement à :",
                    options: { a: "Parler plus que son interlocuteur pour le convaincre", b: "Se concentrer sur l'autre pour comprendre, interpréter et évaluer ce qu'il dit, en utilisant la reformulation", c: "Écouter sans jamais poser de questions", d: "Donner immédiatement son avis et une solution" },
                    reponse: "b",
                    explication: "L'écoute active est une façon structurée d'écouter son interlocuteur... votre attention se porte sur l'autre personne pour vous permettre de comprendre, d'interpréter et d'évaluer ce qu'elle vous dit.",
                    page: 39
                },
                {
                    question: "Le Visual Management (Gestion par la vue) a pour objectif de :",
                    options: { a: "Rendre la communication plus complexe et détaillée", b: "Limiter l'accès à l'information aux seuls managers", c: "Faciliter la transmission d'informations entre toutes les parties prenantes de manière simple et visible", d: "Remplacer tous les outils numériques par des tableaux papier" },
                    reponse: "c",
                    explication: "Le management visuel... a pour objectif de faciliter la transmission d'informations entre toutes les parties prenantes et pour chaque niveau hiérarchique.",
                    page: 41
                }
            ]
        },

        //Module 06

'M06': {
            title: 'MEO-M06 : Systèmes de Management (Qualité, Env., SST)',
            questions: [
                // --- CHAPITRE 1 : SMQ ---
                {
                    section: "Chapitre 1 : Le Système de Management de la Qualité (SMQ)",
                    question: "Selon le cours, quelle est la définition principale de la qualité ?",
                    options: { a: "Un produit de luxe à un prix élevé", b: "La conformité d'un produit ou service aux attentes implicites et explicites d'un client", c: "L'absence totale de défauts, quel qu'en soit le coût", d: "La rapidité de production avant tout" },
                    reponse: "b",
                    explication: "La qualité est définie comme 'la conformité d'un produit, d'un service, d'une organisation par rapport aux attentes implicites et explicites d'un client'.",
                    page: "SMQ-2"
                },
                {
                    question: "Quel est l'objectif premier d'une démarche qualité ?",
                    options: { a: "Augmenter les salaires du personnel", b: "Obtenir une certification pour l'image", c: "Améliorer sans cesse les performances d'une structure", d: "Réduire le nombre de clients pour mieux les servir" },
                    reponse: "c",
                    explication: "Une démarche qualité a pour objectif premier d'améliorer sans cesse les performances d'une structure.",
                    page: "SMQ-5"
                },
                {
                    question: "Parmi les enjeux économiques de la qualité, on trouve :",
                    options: { a: "La motivation du personnel", b: "L'obligation de respecter les lois", c: "La diminution des coûts de non-qualité et la fidélisation des clients", d: "La protection de l'environnement" },
                    reponse: "c",
                    explication: "Les enjeux économiques incluent la compétitivité par la diminution des prix de revient et des coûts de non-qualité, ainsi que la fidélisation des clients et la capture de nouveaux marchés.",
                    page: "SMQ-7"
                },
                {
                    question: "Le principe de 'Leadership' (Responsabilité de la Direction) implique que la direction doit principalement :",
                    options: { a: "Réaliser elle-même toutes les tâches de contrôle", b: "Définir les orientations de l'organisme et assurer la disponibilité des ressources", c: "Se concentrer uniquement sur les bénéfices financiers", d: "Sanctionner le personnel à chaque erreur" },
                    reponse: "b",
                    explication: "La direction doit définir les orientations, assurer la disponibilité des ressources pour atteindre les objectifs et impliquer le personnel.",
                    page: "SMQ-12"
                },
                {
                    question: "Que signifie 'l'approche processus' dans le management de la qualité ?",
                    options: { a: "Gérer chaque service de l'entreprise de manière isolée", b: "Considérer l'activité comme un ensemble de sous-activités corrélées avec des données d'entrée et de sortie", c: "Suivre une procédure unique et rigide pour toutes les tâches", d: "Se focaliser uniquement sur le processus de vente" },
                    reponse: "b",
                    explication: "L'approche processus revient à considérer l'activité de l'organisme comme un ensemble de sous-activités corrélées, où chaque processus a des données d'entrée et de sortie.",
                    page: "SMQ-14"
                },
                {
                    question: "La 'roue de Deming', ou cycle PDCA, est un outil pour :",
                    options: { a: "L'analyse financière", b: "L'amélioration continue", c: "La gestion des ressources humaines", d: "La définition de la stratégie initiale" },
                    reponse: "b",
                    explication: "Le principe de l'amélioration continue est souvent représenté par un cycle d'actions, appelé 'roue de Deming' ou cycle PDCA : Plan, Do, Check, Act.",
                    page: "SMQ-15"
                },
                {
                    question: "Le principe de 'prise de décision fondée sur des preuves' vise à :",
                    options: { a: "Augmenter la part de l'intuition dans les décisions", b: "Réduire l'incertitude en s'appuyant sur des données objectives", c: "Prendre des décisions plus rapidement, même sans information", d: "Suivre systématiquement l'avis du plus haut gradé" },
                    reponse: "b",
                    explication: "L'idée de ce principe est de réduire l'incertitude inévitable lors des prises de décisions, en s'appuyant sur des données objectives pour comprendre les causes et les effets.",
                    page: "SMQ-17"
                },
                {
                    question: "Quelle est l'une des premières étapes clés de la mise en place d'une démarche qualité ?",
                    options: { a: "Mesurer immédiatement les performances", b: "Définir et communiquer la politique qualité de l'organisme", c: "Acheter un nouveau logiciel de gestion", d: "Former tout le personnel à l'audit" },
                    reponse: "b",
                    explication: "Les premières étapes incluent la définition de l'objet de l'organisme (1) et la définition et communication de la politique de l'organisme (2).",
                    page: "SMQ-19"
                },
                // --- CHAPITRE 2 : SME ---
                {
                    section: "Chapitre 2 : Le Système de Management de l'Environnement (SME)",
                    question: "Quel est l'objectif principal d'un Système de Management Environnemental (SME) ?",
                    options: { a: "Payer des amendes pour pouvoir polluer légalement", b: "Faciliter la gestion d'une entité pour estimer, réduire et maîtriser ses impacts sur l'environnement", c: "Augmenter la consommation d'énergie pour produire plus", d: "Uniquement rédiger un rapport annuel sur l'environnement" },
                    reponse: "b",
                    explication: "L'objectif du SME est de faciliter la gestion d'une entité et de lui permettre de s'organiser efficacement de façon à estimer, réduire et maîtriser ses impacts sur l'environnement.",
                    page: "SME-4"
                },
                {
                    question: "Quelle norme internationale prescrit les exigences relatives à un système de management environnemental ?",
                    options: { a: "ISO 9001", b: "ISO 45001", c: "ISO 14001", d: "ISO 27001" },
                    reponse: "c",
                    explication: "La norme ISO 14001 prescrit les exigences relatives à l'élaboration, la mise en œuvre, la mise à jour et l'évaluation d'un système de management environnemental.",
                    page: "SME-2"
                },
                {
                    question: "Quel enjeu financier est un moteur important pour la mise en place d'un SME ?",
                    options: { a: "Le coût croissant de réparation des dommages causés à l'environnement", b: "Les subventions garanties par l'État", c: "L'augmentation du prix des actions", d: "La réduction des salaires" },
                    reponse: "a",
                    explication: "Un des enjeux du management environnemental est financier. Les coûts de réparation des dommages causés sur l'environnement sont de plus en plus importants.",
                    page: "SME-5"
                },
                {
                    question: "La notion de 'préservation de l'environnement' est hétérogène. Lequel de ces enjeux est cité comme exemple dans le cours ?",
                    options: { a: "La satisfaction des clients", b: "La qualité de l'air et de l'eau", c: "La rentabilité financière", d: "La sécurité des employés" },
                    reponse: "b",
                    explication: "Les enjeux sont variables et hétérogènes : respect de la biodiversité, effet de serre, déforestation, qualité de l'eau, qualité de l'air, etc.",
                    page: "SME-7"
                },
                {
                    question: "Selon le cours, quel est le premier critère de la performance managériale pour 88% des managers ?",
                    options: { a: "Le climat social", b: "L'autonomie des collaborateurs", c: "L'excellence opérationnelle", d: "L'innovation" },
                    reponse: "c",
                    explication: "Logiquement, l'excellence opérationnelle est le premier critère de la performance managériale pour 88% des managers.",
                    page: "SME-8"
                },
                {
                    question: "Un des objectifs concrets d'un SME est de se conformer à :",
                    options: { a: "La demande des actionnaires", b: "La législation en vigueur", c: "Les pratiques des concurrents", d: "La tradition de l'entreprise" },
                    reponse: "b",
                    explication: "Un des points clés de l'objectif du SME est de 'Se conformer à la législation en vigueur'.",
                    page: "SME-11"
                },
                {
                    question: "Lequel de ces éléments est un avantage direct de la mise en place d'un SME ?",
                    options: { a: "L'augmentation garantie des ventes", b: "La simplification des processus de production", c: "La réduction des consommations d'énergie, d'eau et de matières premières", d: "L'élimination totale des risques" },
                    reponse: "c",
                    explication: "Parmi les avantages du SME, on trouve : maîtriser les risques sur l'environnement, réduire les consommations d'énergie, d'eau, de matières premières et maîtriser les coûts.",
                    page: "SME-12"
                },
                // --- CHAPITRE 3 : SMSST ---
                {
                    section: "Chapitre 3 : Le Système de Management de la Santé et Sécurité au Travail (SMSST)",
                    question: "Quel est le double objectif d'une démarche de prévention en Santé et Sécurité au Travail (SST) ?",
                    options: { a: "Augmenter la vitesse et la quantité de production", b: "Diminuer le nombre et la gravité des accidents, incidents et maladies professionnelles", c: "Réduire les salaires et les effectifs", d: "Satisfaire uniquement les exigences légales minimales" },
                    reponse: "b",
                    explication: "L'objectif est la diminution des accidents, incidents et maladies professionnelles en nombre et en gravité.",
                    page: "SMSST-4"
                },
                {
                    question: "Un SMSST est une démarche volontaire qui vise notamment à :",
                    options: { a: "Réagir aux changements après qu'ils se soient produits", b: "Augmenter les dysfonctionnements pour les identifier", c: "Anticiper les changements et augmenter la performance de l'entreprise en prévention", d: "Isoler la démarche SST des autres démarches de management" },
                    reponse: "c",
                    explication: "Le SMSST est une démarche volontaire qui vise à : anticiper les changements, augmenter la réactivité et la performance de l'entreprise dans la prévention des risques.",
                    page: "SMSST-5"
                },
                {
                    question: "En plus d'améliorer la santé des personnes, une démarche de prévention SST contribue aussi à :",
                    options: { a: "Complexifier l'organisation", b: "Améliorer l'efficacité, la qualité des prestations et la rentabilité de l'entreprise", c: "Augmenter la consommation de ressources", d: "Réduire la communication interne" },
                    reponse: "b",
                    explication: "Maîtriser l'environnement de travail contribue aussi à améliorer l'efficacité d'une entreprise, la qualité de ses prestations ainsi que sa rentabilité.",
                    page: "SMSST-7"
                },
                {
                    question: "La norme ISO 45001 vise à aider les organisations à :",
                    options: { a: "Améliorer la qualité de leurs produits", b: "Réduire leur impact environnemental", c: "Améliorer la sécurité de leurs employés et réduire les risques sur le lieu de travail", d: "Sécuriser leurs systèmes d'information" },
                    reponse: "c",
                    explication: "ISO 45001 est la norme élaborée par l'ISO pour les organisations soucieuses d'améliorer la sécurité de leurs employés, de réduire les risques sur le lieu de travail et de créer des conditions de travail meilleures et plus sûres.",
                    page: "SMSST-8"
                },
                {
                    question: "Quelle obligation légale l'employeur a-t-il concernant les risques professionnels ?",
                    options: { a: "Il doit informer oralement des risques les plus évidents", b: "Il peut ignorer les risques si aucun accident n'a eu lieu", c: "Il doit évaluer les risques sur chaque poste et les consigner dans un document", d: "Cette obligation ne concerne que les grandes entreprises" },
                    reponse: "c",
                    explication: "L'employeur doit évaluer les risques professionnels sur chaque poste de travail. Ces risques sont consignés dans un document.",
                    page: "SMSST-9"
                },
                {
                    question: "Le non-respect d'une obligation de sécurité met en jeu l'intégrité des collaborateurs, mais aussi :",
                    options: { a: "Uniquement la réputation du dirigeant", b: "Des éléments extérieurs à l'entreprise comme l'environnement ou les riverains", c: "Uniquement les bénéfices de l'entreprise", d: "La vitesse de la connexion internet" },
                    reponse: "b",
                    explication: "Le non-respect d'une obligation de sécurité met en jeu... mais aussi des éléments extérieurs à l'entreprise (environnement, riverains...).",
                    page: "SMSST-10"
                },
                {
                    question: "Un SMSST est une démarche qui doit être :",
                    options: { a: "Imposée par la force et sans explication", b: "Statique et ne jamais évoluer", c: "Participative et collaborative, impliquant tous les acteurs de l'entreprise", d: "Gérée uniquement par le directeur, sans impliquer les autres niveaux" },
                    reponse: "c",
                    explication: "Le schéma de développement d'un SMSST s'inscrit dans une dynamique de changement qui requiert de la pédagogie, une démarche participative et collaborative.",
                    page: "SMSST-12"
                },
                // --- CHAPITRE 4 : SMSI ---
                {
                    section: "Chapitre 4 : Le Système de Management de la Sécurité de l'Information (SMSI)",
                    question: "Que permet principalement un Système de Management de la Sécurité de l'Information (SMSI) ?",
                    options: { a: "Augmenter la vitesse des réseaux informatiques", b: "Gérer les risques relatifs à l'information au moyen de processus", c: "Archiver toutes les données de l'entreprise", d: "Contrôler l'utilisation d'internet par les employés" },
                    reponse: "b",
                    explication: "Le Système de Management de la Sécurité de l'Information (SMSI) permet de gérer les risques relatifs à l'information au moyen de processus, et définit les différentes responsabilités.",
                    page: "SMSI-4"
                },
                {
                    question: "La norme de référence pour la mise en place d'un SMSI est :",
                    options: { a: "ISO 9001", b: "ISO 14001", c: "ISO 45001", d: "ISO/IEC 27001" },
                    reponse: "d",
                    explication: "La norme ISO/IEC 27001 fournit aux entreprises... des lignes directrices pour l'établissement, la mise en œuvre... d'un système de management de la sécurité de l'information.",
                    page: "SMSI-4"
                },
                {
                    question: "Un SMSI vise à protéger l'intégrité des technologies contre quoi notamment ?",
                    options: { a: "Les pannes matérielles uniquement", b: "Les erreurs des utilisateurs uniquement", c: "Les cyberattaques, les dommages ou les menaces", d: "La lenteur du réseau" },
                    reponse: "c",
                    explication: "C'est un ensemble de stratégies de sécurité qui protègent l'intégrité des technologies de l'information... contre les cyberattaques, les dommages ou menaces.",
                    page: "SMSI-5"
                },
                {
                    question: "En plus de la protection des données sensibles, quel autre aspect crucial un SMSI doit-il prendre en compte ?",
                    options: { a: "La stratégie marketing", b: "La satisfaction des employés", c: "La continuité des opérations et la conformité réglementaire", d: "La gestion des fournisseurs" },
                    reponse: "c",
                    explication: "La continuité des opérations, la conformité réglementaire et la protection de la vie privée et de l'identité sont autant d'aspects cruciaux à prendre en compte pour minimiser les risques.",
                    page: "SMSI-6"
                },
                {
                    question: "Selon le cours, à quels niveaux l'information est-elle essentielle au processus de prise de décisions ?",
                    options: { a: "Uniquement au niveau stratégique", b: "Uniquement au niveau opérationnel", c: "Tant au niveau stratégique qu'au niveau opérationnel", d: "Uniquement pour le service marketing" },
                    reponse: "c",
                    explication: "L'information est essentielle au processus de prise de décisions tant au niveau stratégique qu'au niveau opérationnel.",
                    page: "SMSI-7"
                },
                {
                    question: "Quelles sont les deux finalités d'un Système d'Information (SI) ?",
                    options: { a: "Technique et financière", b: "Fonctionnelle et sociale", c: "Commerciale et juridique", d: "Stratégique et marketing" },
                    reponse: "b",
                    explication: "Le SI a deux finalités : fonctionnelle et sociale.",
                    page: "SMSI-8"
                },
                {
                    question: "Quels sont les trois objectifs fondamentaux de la sécurité de l'information (triade DIC) ?",
                    options: { a: "Données, Intégrité, Communication", b: "Disponibilité, Intégrité, Confidentialité", c: "Données, Informatique, Communication", d: "Disponibilité, Information, Contrôle" },
                    reponse: "b",
                    explication: "Les objectifs sont : La Disponibilité (maintenir le bon fonctionnement), L'Intégrité (garantir que les données sont correctes), La Confidentialité (rendre l'information inintelligible aux personnes non autorisées).",
                    page: "SMSI-10"
                },
                {
                    question: "L'atténuation des risques dans un SMSI permet de mettre en œuvre des mesures de sécurité pour protéger :",
                    options: { a: "Uniquement les biens matériels", b: "Uniquement les données informatiques", c: "Uniquement les personnes", d: "Les personnes, les biens ou l'environnement" },
                    reponse: "d",
                    explication: "L'atténuation des risques permet de mettre en œuvre des mesures de sécurité pour protéger les personnes, les biens ou l'environnement.",
                    page: "SMSI-11"
                },
                {
                    question: "Quelle est la première étape de la démarche de mise en œuvre d'un SMSI ?",
                    options: { a: "La planification des actions", b: "La politique de prévention", c: "L'analyse initiale", d: "La mesure de la performance" },
                    reponse: "c",
                    explication: "La première étape de la mise en œuvre est l'Étape 1 : Analyse initiale.",
                    page: "SMSI-13"
                },
                {
                    question: "La dernière étape de la démarche de mise en œuvre d'un SMSI est :",
                    options: { a: "L'organisation", b: "La mise en œuvre et le fonctionnement", c: "L'analyse initiale", d: "L'amélioration du système de management" },
                    reponse: "d",
                    explication: "La dernière étape (Étape 7) est l'Amélioration du système de management.",
                    page: "SMSI-13"
                }
            ]
        },
        
        // Vous pourrez ajouter 'M05', etc. ici
     
    };

    // --- LOGIQUE DE L'APPLICATION ---

    // --- Références aux éléments HTML ---
    const quizSelect = document.getElementById('quiz-select');
    const quizContent = document.getElementById('quiz-content');
    const initialMessage = document.getElementById('initial-message');
    const courseTitle = document.getElementById('course-title');
    const quizContainer = document.getElementById('quiz-container');
    const submitBtn = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result-container');
    const historyScoresContainer = document.getElementById('history-scores');
    const userInput = document.getElementById('user-name');
    const MAX_HISTORY = 5;

    // --- Variables d'état pour suivre le quiz actuel ---
    let currentQuizData = [];
    let currentModuleId = '';

    // --- Fonctions de gestion de l'historique (dépendantes du module) ---
    function getHistoryKey() {
        return `multiUserQuizHistory_${currentModuleId}`;
    }

    function getFullHistory() {
        try {
            const history = localStorage.getItem(getHistoryKey());
            return history ? JSON.parse(history) : {};
        } catch (e) {
            console.error("Erreur lors de la lecture de l'historique :", e);
            return {};
        }
    }

    function saveScore(userName, score) {
        if (!userName || userName.trim() === '' || !currentModuleId) return;
        const fullHistory = getFullHistory();
        if (!fullHistory[userName]) {
            fullHistory[userName] = [];
        }
        const userHistory = fullHistory[userName];
        
        const newEntry = {
            score: score,
            total: currentQuizData.length,
            date: new Date().toLocaleString('fr-FR')
        };
        userHistory.unshift(newEntry);
        if (userHistory.length > MAX_HISTORY) {
            userHistory.pop();
        }
        
        localStorage.setItem(getHistoryKey(), JSON.stringify(fullHistory));
    }

    function loadUserHistory(userName) {
        historyScoresContainer.innerHTML = '';
        if (!currentModuleId) return;

        const fullHistory = getFullHistory();
        const userHistory = (userName && fullHistory[userName]) ? fullHistory[userName] : [];
        
        if (userHistory.length === 0) {
            historyScoresContainer.innerHTML = `<p>Aucune tentative pour <strong>${userName || 'cet utilisateur'}</strong> sur ce module.</p>`;
            return;
        }
        userHistory.forEach(entry => {
            const scoreCard = document.createElement('div');
            scoreCard.className = 'score-card';
            scoreCard.innerHTML = `
                <span class="score-value">${entry.score} / ${entry.total}</span>
                <span class="score-date">${entry.date}</span>
            `;
            historyScoresContainer.appendChild(scoreCard);
        });
    }

    // --- Fonctions du Quiz ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function buildQuiz() {
        let currentSection = "";
        quizContainer.innerHTML = '';
        currentQuizData.forEach((item, index) => {
            if (item.section && item.section !== currentSection) {
                currentSection = item.section;
                const sectionTitle = document.createElement('h2');
                sectionTitle.className = 'section-title';
                sectionTitle.textContent = currentSection;
                quizContainer.appendChild(sectionTitle);
            }

            const questionBlock = document.createElement('div');
            questionBlock.className = 'question-block';
            questionBlock.id = 'question-' + index;

            const questionText = document.createElement('p');
            questionText.className = 'question-text';
            questionText.textContent = `${index + 1}. ${item.question}`;
            questionBlock.appendChild(questionText);
            
            const optionsArray = Object.entries(item.options);
            shuffleArray(optionsArray);

            const displayLetters = ['a', 'b', 'c', 'd'];
            optionsArray.forEach(([key, value], i) => {
                const label = document.createElement('label');
                label.className = 'option';
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'question' + index;
                radio.value = key;

                label.appendChild(radio);
                label.append(` ${displayLetters[i]}) ${value}`);
                questionBlock.appendChild(label);
            });
            quizContainer.appendChild(questionBlock);
        });
    }

    function showResults() {
        const userName = userInput.value.trim();
        let score = 0;
        
        currentQuizData.forEach((item, index) => {
            const questionBlock = document.getElementById('question-' + index);
            const selectedOption = questionBlock.querySelector(`input[name="question${index}"]:checked`);
            
            const oldExplanation = questionBlock.querySelector('.explanation');
            if (oldExplanation) oldExplanation.remove();
            
            questionBlock.querySelectorAll('.option').forEach(label => {
                label.classList.remove('correct', 'incorrect');
            });

            if (selectedOption) {
                const userAnswer = selectedOption.value;
                if (userAnswer === item.reponse) {
                    score++;
                    selectedOption.parentElement.classList.add('correct');
                } else {
                    selectedOption.parentElement.classList.add('incorrect');
                    const correctOptionInput = questionBlock.querySelector(`input[value="${item.reponse}"]`);
                    if (correctOptionInput) correctOptionInput.parentElement.classList.add('correct');
                }
            } else {
                const correctOptionInput = questionBlock.querySelector(`input[value="${item.reponse}"]`);
                if (correctOptionInput) correctOptionInput.parentElement.classList.add('correct');
            }
            
            const explanation = document.createElement('div');
            explanation.className = 'explanation';
            explanation.innerHTML = `<strong>Explication :</strong> ${item.explication} <em>(Page : ${item.page})</em>`;
            questionBlock.appendChild(explanation);
        });

        resultContainer.innerHTML = `Votre score : ${score} / ${currentQuizData.length}`;
        saveScore(userName, score);
        loadUserHistory(userName);
        submitBtn.textContent = "Réessayer le quiz";
    }

    function resetQuiz() {
        resultContainer.innerHTML = '';
        submitBtn.textContent = "Vérifier mes réponses";
        buildQuiz();
    }

    // --- Logique principale de l'application ---
    function populateDropdown() {
        for (const moduleId in allQuizzes) {
            const option = document.createElement('option');
            option.value = moduleId;
            option.textContent = allQuizzes[moduleId].title;
            quizSelect.appendChild(option);
        }
    }

    function loadModule(moduleId) {
        if (moduleId && allQuizzes[moduleId]) {
            currentModuleId = moduleId;
            currentQuizData = allQuizzes[moduleId].questions;
            courseTitle.textContent = allQuizzes[moduleId].title;
            
            initialMessage.style.display = 'none';
            quizContent.style.display = 'block';
            
            resetQuiz();
            loadUserHistory(userInput.value.trim());
        } else {
            currentModuleId = '';
            currentQuizData = [];
            initialMessage.style.display = 'block';
            quizContent.style.display = 'none';
        }
    }

    // --- Écouteurs d'événements ---
    quizSelect.addEventListener('change', (e) => {
        loadModule(e.target.value);
    });
    
    submitBtn.addEventListener('click', () => {
        if (submitBtn.textContent === "Réessayer le quiz") {
            resetQuiz();
        } else {
            showResults();
        }
    });

    userInput.addEventListener('input', () => {
        loadUserHistory(userInput.value.trim());
    });

    // --- Initialisation au chargement de la page ---
    populateDropdown();
});












