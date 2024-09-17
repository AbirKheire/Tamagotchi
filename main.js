import { Tamagatchi } from './tamagatchi.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


document.getElementById('begin').addEventListener('Click', function() {
//document.addEventListener('DOMContentLoaded', function() {
  const nameForm = document.getElementById('name');
  const stats = document.getElementById('stats');
  const info = document.getElementById('info');
  


  const nameDisplay = document.querySelector('.nameDisplay');
  const hungerBar = document.getElementById('hunger-bar');
  const playBar = document.getElementById('play-bar');
  const sleepBar = document.getElementById('sleep-bar');
  const dead = document.getElementById('dead');


  let nameOfSlime = document.querySelector('input').value;
  const jaune = document.querySelector('jaune');
  const orange = document.querySelector('orange');
  const rouge = document.querySelector('rouge');

  const hungerLevelElem = document.getElementById('progress-food');
  const sportLevelElem = document.getElementById('progress-sport');
  const healtLevelElem = document.getElementById('progress-health');

  if(!/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/.test(nameOfSlime)){
      alert('Nom invalide');
      return;
  }


  
  //nameForm.addEventListener('submit', function(event) {
    //event.preventDefault();

    stats.style.display = 'block';
    info.style.display = 'none';

    //let name = enterName.value;
    
    let newTamagatchi = new Tamagatchi(nameOfSlime);
    // hungerLevelElem.textContent = newTamagatchi.foodLevel;
    // healtLevelElem.textContent = newTamagatchi.sleepLevel;
    // sportLevelElem.textContent = newTamagatchi.playLevel;
    newTamagatchi.hungerDrain();
    newTamagatchi.sleepDrain();
    newTamagatchi.playDrain();

    //nameDisplay.textContent = newTamagatchi.name;

    function updateBars() {
      
      let hungerLevelElemUpdateBars = hungerLevelElem.querySelectorAll('.progress-block');

      //hungerLevelElemUpdateBars.forEach((block) => block.classList.remove(''));

      for(let i = 0; i<newTamagatchi.foodLevel; i++){
        hungerLevelElemUpdateBars[i].classList.add('');
      }

      let healtLevelElemUpdateBars = healtLevelElem.querySelectorAll('.progress-block');

      //healtLevelElemUpdateBars.forEach((block) => block.classList.remove(''));

      for(let i = 0; i<newTamagatchi.healthLevel; i++){
        hungerLevelElemUpdateBars[i].classList.add('');
      }

      let sportLevelElemUpdateBars = sportLevelElem.querySelectorAll('.progress-block');

      //sportLevelElemUpdateBars.forEach((block) => block.classList.remove(''));

      for(let i = 0; i<newTamagatchi.foodLevel; i++){
        hungerLevelElemUpdateBars[i].classList.add('');
      }

    }

    let drain = setInterval(function() {
      hungerLevelElem.textContent = newTamagatchi.foodLevel;
      healtLevelElem.textContent = newTamagatchi.sleepLevel;
      sportLevelElem.textContent = newTamagatchi.playLevel;
      hungerBar.style.width = newTamagatchi.foodLevel + '%';
      playBar.style.width = newTamagatchi.playLevel + '%';
      sleepBar.style.width = newTamagatchi.sleepLevel + '%';

      if (newTamagatchi.didTamagatchiDie()) {
        dead.style.display = 'block';
        stats.style.display = 'none';
        clearInterval(drain);
      }
    }, 1000);

    jaune.addEventListener('click', function() {
      newTamagatchi.feed();
      updateBars();
    });
  
    orange.addEventListener('click', function() {
      newTamagatchi.sport();
      updateBars();
    });
  
    orange.addEventListener('click', function() {
      newTamagatchi.sport();
      updateBars();
    });
    
    // Bouton "Reset"
    document.getElementById('reset').addEventListener('click', function() {
      dead.style.display = 'none';
    });
    
});
