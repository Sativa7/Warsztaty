function pomnozLiczby() {
    let liczba1 = 6;
    let liczba2 = 8;
    let liczba3 = 2;
    let wynik = 0;

    wynik = liczba1 * liczba2 * liczba3;

    console.log(wynik);
}

// ES5 FUNKCJA ------------------------------
// function pomnozLiczbyPar(liczba1, liczba2, liczba3) {
    
//     let wynik = 0;

//     wynik = liczba1 * liczba2 * liczba3;

//     console.log(wynik);
// }
//---------------------------------


// es5 drugi zapis -------------------
// const pomnozLiczbyParRet = function(liczba1, liczba2, liczba3) {
    
//     let wynik = 0;

//     wynik = liczba1 * liczba2 * liczba3;

//     return(wynik);
// }
// ---------------------------

//es6
const pomnozLiczbyParRet = (liczba1, liczba2, liczba3) => {
    let wynik = 0;
    wynik = liczba1 * liczba2 * liczba3;
    return wynik;
}

//jeśli jest jeden parametr to nie są potrzebne nawiasy przy nim - w es6
pomnozLiczby(); 
pomnozLiczby(); 
// pomnozLiczbyPar(2,4,6); 
console.log( pomnozLiczbyParRet(3,7,8)); 

let wynikDzialaniaFunkcji = pomnozLiczbyParRet(2,5,10);
console.log(wynikDzialaniaFunkcji);

let drugiWynikDzialaniaFunkcji = pomnozLiczbyParRet(2,4,5);
console.log(drugiWynikDzialaniaFunkcji);
//uruchomienie funkcji - wywolłanie bez parametrów - parametry dodaje się w nawiasach

// const pomnozLiczby = function () {

// }

// const es6PomnozLiczby = () => {

// }

let mnoznik1 = 7;
let mnoznik2 = 4;
let mnoznik3 = 5; // zmienne nazywamy inaczej, ni parametry funkcji (będzie działało, ale się pokiełbasi)

wynikDzialaniaFunkcji = pomnozLiczbyParRet(mnoznik1,mnoznik2,mnoznik3);
console.log(wynikDzialaniaFunkcji);

const mnozyRazy2 = mnozna1 => { return mnozna1*2 };
console.log (mnozyRazy2(8));
