import { Tamagatchi } from './tamagatchi.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

document.getElementById('begin').addEventListener('Click', function() {

    let nameOfSlime = document.querySelector('input').value;

    if(!/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/.test(nameOfSlime)){
        alert('Nom invalide');
        return;
    }

    let newTamagatchi = new Tamagatchi(nameOfSlime);
    const jaune = document.querySelector('jaune');
    const orange = document.querySelector('orange');
    const rouge = document.querySelector('rouge');
    
        
});