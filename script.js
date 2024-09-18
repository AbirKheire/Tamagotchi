const totalBlocks = 8; 
let activeBlocksFood = 6;
let activeBlocksSport = 6;
let activeBlocksHealth = 6;

// Sélectionne les éléments DOM correspondant aux barres de progression
const food = document.getElementById('progress-food');
const sport = document.getElementById('progress-sport');
const health = document.getElementById('progress-health');

// Fonction initiale pour mettre à jour toutes les barres de progression
function initProgress() {
    updateProgress(food, activeBlocksFood);   // Met à jour la barre de progression pour "food"
    updateProgress(sport, activeBlocksSport); // Met à jour la barre de progression pour "sport"
    updateProgress(health, activeBlocksHealth); // Met à jour la barre de progression pour "health"
}

// Lorsque la page est complètement chargée, initialise les barres de progression
document.addEventListener('DOMContentLoaded', initProgress);

/*************************************** Boutons **************************************************************/

// Fonction qui met à jour la barre de progression spécifique en fonction du nombre de blocs actifs
function updateProgress(element, activeBlocks) {
    element.innerHTML = ''; // Efface la progression actuelle avant d'ajouter les nouveaux blocs

    // Détermine la couleur des blocs en fonction du nombre de blocs actifs (vert si > 2, rouge si <= 2)
    const progressColor = activeBlocks > 2 ? 'green' : 'red';
    element.style.borderColor = progressColor; // Change la couleur de la bordure en fonction de la condition

    // Boucle pour ajouter chaque bloc dans la barre de progression
    for (let i = 0; i < totalBlocks; i++) {
        const block = document.createElement('div'); // Crée un nouvel élément bloc
        block.classList.add('progress-block'); // Ajoute la classe CSS pour styliser le bloc

        // Si le bloc est actif (i < activeBlocks), on lui ajoute la classe 'active' et on lui donne la bonne couleur
        if (i < activeBlocks) {
            block.classList.add('active');
            block.style.backgroundColor = progressColor; // Applique la couleur au bloc actif
        }

        // Ajoute le bloc à la barre de progression (élément parent)
        element.appendChild(block);
    }
}

// Fonction qui augmente le nombre de blocs actifs pour la barre "food"
function feed() {
    if (activeBlocksFood < totalBlocks) { // Vérifie que le nombre de blocs actifs est inférieur au maximum
        activeBlocksFood += 1; // Incrémente le nombre de blocs actifs
        updateProgress(food, activeBlocksFood); // Met à jour la barre de progression "food"
    }
}

// Fonction qui augmente le nombre de blocs actifs pour la barre "sport"
function exercise() {
    if (activeBlocksSport < totalBlocks) { // Vérifie que le nombre de blocs actifs est inférieur au maximum
        activeBlocksSport += 1; // Incrémente le nombre de blocs actifs
        updateProgress(sport, activeBlocksSport); // Met à jour la barre de progression "sport"
    }
}

// Fonction qui augmente le nombre de blocs actifs pour la barre "health"
function heal() {
    if (activeBlocksHealth < totalBlocks) { // Vérifie que le nombre de blocs actifs est inférieur au maximum
        activeBlocksHealth += 1; // Incrémente le nombre de blocs actifs
        updateProgress(health, activeBlocksHealth); // Met à jour la barre de progression "health"
    }
}

/*************************************** Temps **************************************************************/

// Fonction qui affiche et met à jour l'heure actuelle toutes les secondes
function showTime() {
    let now = new Date(); // Crée un objet Date pour obtenir l'heure actuelle
    let time = now.toTimeString().split(' ')[0]; // Formate l'heure actuelle (HH:MM:SS)
    console.log(time); // Affiche l'heure dans la console
    setTimeout(showTime, 1000); // Rappelle cette fonction toutes les secondes pour mettre à jour l'heure
}

// Fonction qui diminue progressivement les blocs actifs toutes les 30 minutes
function decreaseFeed() {
    if (activeBlocksFood > 0) activeBlocksFood--; // Diminue les blocs actifs pour "food" si > 0
    if (activeBlocksSport > 0) activeBlocksSport--; // Diminue les blocs actifs pour "sport" si > 0
    if (activeBlocksHealth > 0) activeBlocksHealth--; // Diminue les blocs actifs pour "health" si > 0

    // Met à jour toutes les barres de progression après la diminution des blocs actifs
    updateProgress(food, activeBlocksFood);
    updateProgress(sport, activeBlocksSport);
    updateProgress(health, activeBlocksHealth);

    setTimeout(decreaseFeed, 10000); // Diminue chaque 20 secondes
}

// Lance la fonction pour afficher l'heure
showTime();

// Lance la fonction pour diminuer les blocs actifs toutes les 30 minutes
decreaseFeed();


// const totalBlocks = 8; 
// let activeBlocksFood = 6;
// let activeBlocksSport = 6;
// let activeBlocksHealth = 6;


// const food = document.getElementById('progress-food');
// const sport = document.getElementById('progress-sport');
// const health = document.getElementById('progress-health');


// function initProgress() {
//     updateProgress(food, activeBlocksFood);
//     updateProgress(sport, activeBlocksSport);
//     updateProgress(health, activeBlocksHealth);
// }

// document.addEventListener('DOMContentLoaded', initProgress);


// /***************************************bouton**************************************************************/

// function updateProgress(element, activeBlocks,active) {
//     element.innerHTML = ''; // Clear current progress
//     for (let i = 0; i < totalBlocks; i++) {
//         const block = document.createElement('div');
//         block.classList.add('progress-block');
//         if (i < activeBlocks) {
//             block.classList.add('active');
//         }
//         element.appendChild(block);
//     }
// }

// function feed() {
//     if (activeBlocksFood < totalBlocks) {
//         activeBlocksFood += 1;
//         updateProgress(food, activeBlocksFood,activeVert);
//     }
// }

// function exercise() {
//     if (activeBlocksSport < totalBlocks) {
//         activeBlocksSport += 1;
//         updateProgress(sport, activeBlocksSport,activeVert);
//     }
// }

// function heal() {
//     if (activeBlocksHealth < totalBlocks) {
//         activeBlocksHealth += 1;
//         updateProgress(health, activeBlocksHealth,activeVert);
//     }
// }


// /***************************************temps**************************************************************/

// function showTime() {
//     let now = new Date();
//     let time = now.toTimeString().split(' ')[0]; // Simplified time formatting
//     console.log(time);
//     setTimeout(showTime, 1000); // Update the time every second
// }



// function decreaseFeed() {
//     if (activeBlocksFood > 0) activeBlocksFood--;
//     if (activeBlocksSport > 0) activeBlocksSport--;
//     if (activeBlocksHealth > 0) activeBlocksHealth--;

//     updateProgress(food, activeBlocksFood);
//     updateProgress(sport, activeBlocksSport);
//     updateProgress(health, activeBlocksHealth);

//     setTimeout(decreaseFeed, 18000); // Decrease every 30 minutes
// }

// showTime();
// decreaseFeed();




// // function showTime() {
// //     let now = new Date();
// //     let hours = now.getHours();
// //     let minutes = now.getMinutes();
// //     let seconds = now.getSeconds();
// //     // Format time as HH:MM:SS
// //     let time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// //     console.log(time);
// //     setTimeout(showTime, 1000); // Update the time every second
// // }

// // showTime();

