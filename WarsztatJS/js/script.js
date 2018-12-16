'use strict';
//stworzyc 2 prf + buddn, nadac im id 
//-- pobrac kazdy paragraf i button do zmiennych (kazdy do swojej) 
//-- napisac funkcje ustawTlo() - ES6
//- do buttona podpiac zdarzenie click - ustawTlo
// w funkcji napisać kod zmieniajacy kolor tla paragrafow


let paragraf1 = document.getElementById('par1');
let paragraf2 = document.getElementById('par2');
let button = document.getElementById('buttonTlo');

//console.log(paragraf1+paragraf2+button);

const ustawTlo = () => {
    paragraf1.style.backgroundColor = 'yellow';
    paragraf2.style.backgroundColor = 'red';
}

//console.log(ustawTlo);

button.addEventListener ('click', ustawTlo);

