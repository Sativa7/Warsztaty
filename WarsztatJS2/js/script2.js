'use strict';

let form = document.getElementById('formularz');

// console.log(submit);

const showText = (e) => {
    e.preventDefault();
    
    let imie = document.getElementsByTagName('input')[0];
    let nazwisko = document.getElementsByTagName('input')[1];
    console.log(nazwisko.value);
    console.log(imie.value);
}

form.addEventListener('submit', showText);

