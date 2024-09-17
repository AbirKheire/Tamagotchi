import { Tamagatchi } from './tamagatchi.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

document.addEventListener('DOMContentLoaded', function() {
  const nameForm = document.getElementById('name');
  const stats = document.getElementById('stats');
  const info = document.getElementById('info');
  const enterName = document.getElementById('enterName');
  const hungerLevelElem = document.getElementById('hungerLevel');
  const sleepLevelElem = document.getElementById('sleepLevel');
  const playLevelElem = document.getElementById('playLevel');
  const nameDisplay = document.querySelector('.nameDisplay');
  const hungerBar = document.getElementById('hunger-bar');
  const playBar = document.getElementById('play-bar');
  const sleepBar = document.getElementById('sleep-bar');
  const dead = document.getElementById('dead');
  
  nameForm.addEventListener('submit', function(event) {
    event.preventDefault();

    stats.style.display = 'block';
    info.style.display = 'none';

    let name = enterName.value;
    let newTamagatchi = new Tamagatchi(name);
    hungerLevelElem.textContent = newTamagatchi.foodLevel;
    sleepLevelElem.textContent = newTamagatchi.sleepLevel;
    playLevelElem.textContent = newTamagatchi.playLevel;
    newTamagatchi.hungerDrain();
    newTamagatchi.sleepDrain();
    newTamagatchi.playDrain();

    nameDisplay.textContent = newTamagatchi.name;

    
    let drain = setInterval(function() {
      hungerLevelElem.textContent = newTamagatchi.foodLevel;
      sleepLevelElem.textContent = newTamagatchi.sleepLevel;
      playLevelElem.textContent = newTamagatchi.playLevel;
      hungerBar.style.width = newTamagatchi.foodLevel + '%';
      playBar.style.width = newTamagatchi.playLevel + '%';
      sleepBar.style.width = newTamagatchi.sleepLevel + '%';

      if (newTamagatchi.didTamagatchiDie()) {
        dead.style.display = 'block';
        stats.style.display = 'none';
        clearInterval(drain);
      }
    }, 1000);

    document.getElementById('eat').addEventListener('click', function() {
      newTamagatchi.feed();
    });

    document.getElementById('play').addEventListener('click', function() {
      newTamagatchi.play();
    });

    document.getElementById('sleep').addEventListener('click', function() {
      newTamagatchi.sleep();
    });

    document.getElementById('reset').addEventListener('click', function() {
      dead.style.display = 'none';
      info.style.display = 'block';
    });

    // Example if you need to add functionality to #food-bar
    // document.getElementById('food-bar').addEventListener('click', function() {
    //   // Add your functionality here
    // });
  });
});
