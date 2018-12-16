//musi być uzyta pętla, bo tylko pętlą mozna pobrac wszystkich uzytkownikow
//1 - wyswietlic dane z requestu w konsoli: fetch + ajax
// 2 - wrzycic na strone wszystkich uzytkownikow
// 3 - 


window.onscroll = () => {
      //sprawdzamy, czy wysokosc na scrollu nie jest lub nie chce byc wieksza, niz wysokosc calego okna
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
         console.log("window.innerHeight + windows.scrollY", window.innerHeight + window.scrollY);
         fetch("https://jsonplaceholder.typicode.com/users") // to co onSuccess
            .then(response => response.json())
            .then(response => {
                  //console.log(response);

                  response.forEach(user => {
                     let uzytkownik = document.createElement("div");

                     uzytkownik.innerHTML = `
            <p>ID: ${user.id}</p>
            <p>Name: ${user.name}</p>
            <p>www: ${user.website}</p>
            <p>------------------------ </p>
            `;
                     document.body.appendChild(uzytkownik)
                  })
               })
               .catch(err => console.log("Oooops, coś poszło nie tak", err));
            };
         };


         // let pierwszyUzytkownik = response[0]; //odwołujemy się do tablicy
         // console.log(pierwszyUzytkownik.name); //właściwość po kropce

         // let paragraf = document.createElement("p");


         // paragraf.innerHTML =`
         // ID: ${pierwszyUzytkownik.id}, <br>
         // Name: ${pierwszyUzytkownik.email}, <br>
         // www: ${pierwszyUzytkownik.website}, <br>
         // `;

         // document.body.appendChild(paragraf);

      //})
  // .catch(err => console.log("Oooops, coś poszło nie tak", err));