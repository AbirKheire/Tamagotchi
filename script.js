const totalBlocks = 7; 
let activeBlocksFood = 6;
let activeBlocksSport = 6;
let activeBlocksHealth = 6;

const food = document.getElementById('progress-food');
const sport = document.getElementById('progress-sport');
const health = document.getElementById('progress-health');


function initProgress() {
    updateProgress(food, activeBlocksFood);
    updateProgress(sport, activeBlocksSport);
    updateProgress(health, activeBlocksHealth);
}

document.addEventListener('DOMContentLoaded', initProgress);


/***************************************bouton**************************************************************/

function updateProgress(element, activeBlocks) {
    element.innerHTML = ''; // Clear current progress
    for (let i = 0; i < totalBlocks; i++) {
        const block = document.createElement('div');
        block.classList.add('progress-block');
        if (i < activeBlocks) {
            block.classList.add('active');
        }
        element.appendChild(block);
    }
}

function feed() {
    if (activeBlocksFood < totalBlocks) {
        activeBlocksFood += 1;
        updateProgress(food, activeBlocksFood);
    }
}

function exercise() {
    if (activeBlocksSport < totalBlocks) {
        activeBlocksSport += 1;
        updateProgress(sport, activeBlocksSport);
    }
}

function heal() {
    if (activeBlocksHealth < totalBlocks) {
        activeBlocksHealth += 1;
        updateProgress(health, activeBlocksHealth);
    }
}


/***************************************temps**************************************************************/

function showTime() {
    let now = new Date();
    let time = now.toTimeString().split(' ')[0]; // Simplified time formatting
    console.log(time);
    setTimeout(showTime, 1000); // Update the time every second
}



function decreaseFeed() {
    if (activeBlocksFood > 0) activeBlocksFood--;
    if (activeBlocksSport > 0) activeBlocksSport--;
    if (activeBlocksHealth > 0) activeBlocksHealth--;

    updateProgress(food, activeBlocksFood);
    updateProgress(sport, activeBlocksSport);
    updateProgress(health, activeBlocksHealth);

    setTimeout(decreaseFeed, 18000); // Decrease every 30 minutes
}

showTime();
decreaseFeed();




// function showTime() {
//     let now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     // Format time as HH:MM:SS
//     let time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//     console.log(time);
//     setTimeout(showTime, 1000); // Update the time every second
// }

// showTime();

