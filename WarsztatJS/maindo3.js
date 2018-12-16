'use strict';

let wszystkieZgody = document.getElementById('wszystkie-zgody');
let zgodaMarketingowa1 = document.getElementById('zgoda-marketingowa-1');
let zgodaMarketingowa2 = document.getElementById('zgoda-marketingowa-2');
let imieInput = document.getElementById('name');
let emailInput = document.getElementById('email');
//jak pola są pobrane, mona pisac obsluge validacji


wszystkieZgody.addEventListener.('change', () => {

    zgodaMarketingowa1.checked = wszystkieZgody.checked;
    zgodaMarketingowa2.checked = wszystkieZgody.checked;
    zgodaMarketingowa1.disabled = wszystkieZgody.checked;
    zgodaMarketingowa2.disabled = wszystkieZgody.checked;

});

formularz.addEventListener('submit', (e)) => {
    e.preventDefault();
    console.log('dziala');
}

formularz.addEventListener('submit')

const waliduj = (e) => {
    e.preventDefault();

    if (imieInput.nodeValue.trim() == '') {
        console.log('Uzupełnij pole: Imie i Nazwisko');
        saBledy=true;}
        
    }
}