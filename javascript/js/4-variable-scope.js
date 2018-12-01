let imie = "Klaudia";

const dodajNazwisko = () => {
    let nazwisko = "Nowak";
    let imieNazwisko = imie + " " + nazwisko;

    console.log(imieNazwisko)
}

console.log(imie);
dodajNazwisko();


let imiePobraneZFormularza = "Alicja";

const dodajNazwisko2 = (imie) => {
    let nazwisko = "kowalska";
    let imieNazwisko = imie + " " + nazwisko;
     console.log(imieNazwisko);
}

dodajNazwisko2(imiePobraneZFormularza);