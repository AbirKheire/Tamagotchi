//import { Tamagotchi } from './tamagotchi.js';

console.log('reussi')

document.getElementById('begin').addEventListener('click', function() {
  
  let nameOfSlime = document.querySelector('input').value;
  
  const jaune = document.querySelector('.jaune');
  const orange = document.querySelector('.orange');  
  const rouge = document.querySelector('.rouge');
  
  const hungerLevelElem = document.getElementById('progress-food');
  const sportLevelElem = document.getElementById('progress-sport');
  const healthLevelElem = document.getElementById('progress-health');

  // Vérification du nom du Slime
  if(!/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/.test(nameOfSlime)){
      alert('Nom invalide');
      return;
  }

  let newTamagotchi = new Tamagotchi(nameOfSlime);
  
  // Drains automatiques pour chaque niveau
  newTamagotchi.hungerDrain();
  newTamagotchi.healthDrain();
  newTamagotchi.sportDrain();

  

  let drain = setInterval(function() {
    // Mise à jour des blocs de nourriture
    let hungerLevelBlocks = hungerLevelElem.querySelectorAll('.progress-block');
    hungerLevelBlocks.forEach((block, index) => {
      block.classList.remove('');  // On supprime les anciennes classes
      if (index < newTamagotchi.foodLevel) {
        if (newTamagotchi.foodLevel <=8 ) {
          block.classList.add('');
        }
      }
    });
  
    // Mise à jour des blocs de sport
    let sportLevelBlocks = sportLevelElem.querySelectorAll('.progress-block');
    sportLevelBlocks.forEach((block, index) => {
      block.classList.remove('');
      if (index < newTamagotchi.sportLevel) {
        if (newTamagotchi.sportLevel <= 8) {
          block.classList.add('');
        }
      }
    });
  
    // Mise à jour des blocs de santé
    let healthLevelBlocks = healthLevelElem.querySelectorAll('.progress-block');
    healthLevelBlocks.forEach((block, index) => {
      block.classList.remove('');
      if (index < newTamagotchi.healthLevel) {
        if (newTamagotchi.healthLevel <= 8) {
          block.classList.add('');
        }
      }
    });
  
    // Vérification si le Tamagotchi est mort
    if (newTamagotchi.didTamagotchiDie()) {
      clearInterval(drain);
      document.querySelectorAll('.progress-block').forEach((block) => block.classList.remove('yellow', 'orange', 'red'));
      newTamagotchi = null;
      alert('fin de la partie');
      return;
    }
  }, 1000);
  
  // Événements sur les boutons pour augmenter les niveaux
  jaune.addEventListener('click', function() {
    newTamagotchi.feed();
    updateBars();  // Mise à jour des blocs après interaction
  });

  orange.addEventListener('click', function() {
    newTamagotchi.sport();
    updateBars();
  });

  rouge.addEventListener('click', function() {
    newTamagotchi.health();
    updateBars();
  });

  
  document.getElementById('reset').addEventListener('click', function() {
    document.querySelectorAll('.progress-block').forEach((block) => block.classList.remove('yellow', 'orange', 'red'));
    newTamagotchi = null;
    alert('fin de la partie');
    return;
  });
});
