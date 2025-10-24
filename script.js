// --- BASE DE DONNÉES DES QUESTIONS ---
const quizData = [
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
];

// --- LOGIQUE DE L'APPLICATION ---
document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const submitBtn = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result-container');
    let currentSection = "";

    // --- NOUVELLE FONCTION POUR MÉLANGER UN TABLEAU ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Echange les éléments
        }
    }

    function buildQuiz() {
        quizData.forEach((item, index) => {
            if (item.section && item.section !== currentSection) {
                currentSection = item.section;
                const sectionTitle = document.createElement('h2');
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
            
            // --- MODIFICATION ICI : On mélange les options avant de les afficher ---
            const optionsArray = Object.entries(item.options); // Convertit {a:'...', b:'...'} en [['a','...'], ['b','...']]
            shuffleArray(optionsArray); // On mélange le tableau

            optionsArray.forEach(([key, value]) => {
                const label = document.createElement('label');
                label.className = 'option';
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'question' + index;
                radio.value = key; // La valeur reste 'a', 'b', etc. pour la correction

                label.appendChild(radio);
                label.append(` ${value}`); // On affiche le texte de l'option
                questionBlock.appendChild(label);
            });
            quizContainer.appendChild(questionBlock);
        });
    }

    function showResults() {
        let score = 0;
        quizData.forEach((item, index) => {
            const questionBlock = document.getElementById('question-' + index);
            const selectedOption = questionBlock.querySelector(`input[name="question${index}"]:checked`);
            
            const oldExplanation = questionBlock.querySelector('.explanation');
            if(oldExplanation) oldExplanation.remove();
            
            questionBlock.querySelectorAll('.option').forEach(label => {
                label.classList.remove('correct', 'incorrect');
            });

            if (selectedOption) {
                const userAnswer = selectedOption.value;
                const correctLabel = selectedOption.parentElement;
                
                if (userAnswer === item.reponse) {
                    score++;
                    correctLabel.classList.add('correct');
                } else {
                    correctLabel.classList.add('incorrect');
                    const correctOptionInput = questionBlock.querySelector(`input[value="${item.reponse}"]`);
                    if(correctOptionInput) {
                        correctOptionInput.parentElement.classList.add('correct');
                    }
                }
            } else { // Si aucune réponse n'a été donnée, on montre quand même la bonne
                 const correctOptionInput = questionBlock.querySelector(`input[value="${item.reponse}"]`);
                 if(correctOptionInput) {
                    correctOptionInput.parentElement.classList.add('correct');
                }
            }
            
            const explanation = document.createElement('div');
            explanation.className = 'explanation';
            explanation.innerHTML = `<strong>Explication :</strong> ${item.explication} <em>(Page : ${item.page})</em>`;
            questionBlock.appendChild(explanation);
        });

        resultContainer.innerHTML = `Votre score : ${score} / ${quizData.length}`;
        submitBtn.textContent = "Réessayer le quiz";
    }

    submitBtn.addEventListener('click', () => {
        if(submitBtn.textContent === "Réessayer le quiz") {
            window.location.reload();
        } else {
            showResults();
        }
    });

    buildQuiz();
});
