import { Tamagatchi } from './tamagatchi.js';

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

  let newTamagatchi = new Tamagatchi(nameOfSlime);
  
  // Drains automatiques pour chaque niveau
  newTamagatchi.hungerDrain();
  newTamagatchi.healthDrain();
  newTamagatchi.sportDrain();

  

  let drain = setInterval(function() {
    // Mise à jour des blocs de nourriture
    let hungerLevelBlocks = hungerLevelElem.querySelectorAll('.progress-block');
    hungerLevelBlocks.forEach((block, index) => {
      block.classList.remove('');  // On supprime les anciennes classes
      if (index < newTamagatchi.foodLevel) {
        if (newTamagatchi.foodLevel <=8 ) {
          block.classList.add('');
        }
      }
    });
  
    // Mise à jour des blocs de sport
    let sportLevelBlocks = sportLevelElem.querySelectorAll('.progress-block');
    sportLevelBlocks.forEach((block, index) => {
      block.classList.remove('');
      if (index < newTamagatchi.sportLevel) {
        if (newTamagatchi.sportLevel <= 8) {
          block.classList.add('');
        }
      }
    });
  
    // Mise à jour des blocs de santé
    let healthLevelBlocks = healthLevelElem.querySelectorAll('.progress-block');
    healthLevelBlocks.forEach((block, index) => {
      block.classList.remove('');
      if (index < newTamagatchi.healthLevel) {
        if (newTamagatchi.healthLevel <= 8) {
          block.classList.add('');
        }
      }
    });
  
    // Vérification si le Tamagotchi est mort
    if (newTamagatchi.didTamagatchiDie()) {
      clearInterval(drain);
      document.querySelectorAll('.progress-block').forEach((block) => block.classList.remove('yellow', 'orange', 'red'));
      newTamagatchi = null;
      alert('fin de la partie');
      return;
    }
  }, 1000);
  
  // Événements sur les boutons pour augmenter les niveaux
  jaune.addEventListener('click', function() {
    newTamagatchi.feed();
    updateBars();  // Mise à jour des blocs après interaction
  });

  orange.addEventListener('click', function() {
    newTamagatchi.sport();
    updateBars();
  });

  rouge.addEventListener('click', function() {
    newTamagatchi.health();
    updateBars();
  });

  
  document.getElementById('reset').addEventListener('click', function() {
    document.querySelectorAll('.progress-block').forEach((block) => block.classList.remove('yellow', 'orange', 'red'));
    newTamagatchi = null;
    alert('fin de la partie');
    return;
  });
});
