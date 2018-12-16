'use strict';

// definicja funkcji ajax - tylko deklaracja funkcji
function ajax( ajaxOptions ) {
    
   // parametry połączenia i jego typu - definicja, aby było - zabezpieczamy suę przed rozwaleniem strony
   //tworzymy obiekt options i przypisujemy wszystkie wartości, których ew. będziemy potrzebowac - to jest podstawowy zestaw
   var options = {
       type: ajaxOptions.type || "POST", //operator OR, bo się zabezpieczamy przed błedami
       url: ajaxOptions.url || "",
       onComplete: ajaxOptions.onComplete || function () {},
       onError: ajaxOptions.onError || function () {},
       onSuccess: ajaxOptions.onSuccess || function () {},
       dataType: ajaxOptions.dataType || "text"
   };
   
   // funkcja sprawdzająca czy połączenie się udało? - funkca w funkcji trafia tu nasz http request - zwraca true lub false - 
   function httpSuccess( httpRequest ) {
       try {
           return (httpRequest.status >= 200 && httpRequest.status < 300 ||
            httpRequest.status == 304 || 
            navigator.userAgent.indexOf("Safari") >= 0 && typeof httpRequest.status == "undefined");    
       } catch (e) {
           return false;
       }
   }
   
   // utworzenie obiektu 
   var httpReq = new XMLHttpRequest();
   
   // otwarcie polaczenia obiekt ma open - i w tym momencie zostaje nawiązane połączenie - odczytujemy to w przeglądarce w zakładce networking
   httpReq.open(options.type, options.url, true);
   

   // jesli stan dokumentu zostal zmieniony -> httpReq.readyState
   // 0: połączenie nie nawiązane,
   // 1: połączenie nawiązane,
   // 2: żądanie odebrane,
   // 3: przetwarzanie,
   // 4: dane zwrócone i gotowe do użycia.
   httpReq.onreadystatechange = function() {
       
       // jeśli 4: dane zwrócone i gotowe do użycia - tutaj nasza funkcja juz trzyma dane
       if ( httpReq.readyState == 4 ) {
           
           // sprawdź status płączenia (tru/false z funkcji sprawdzającej połącznie)
           if ( httpSuccess( httpReq ) ) {
               
               // jesli dane w formacie XML to zworc obiekt returnXML, w przeciwnym wypadku responseText (JSON to tekst)
               var returnData = (options.dataType=="xml")? httpReq.responseXML : httpReq.responseText;
               
               
               // jeśli wszystko OK
               options.onSuccess( returnData );

           
               // zeruj obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
               httpReq = null;
               
           } else {
               
               // w przypadku błędu
               options.onError( httpReq.statusText );
           }
           
       }
   
   }
   
  httpReq.send();
}


//tu wywyołujemy funkcję
const pobierz = () => {
   ajax({
      type: "GET", 
      url: "https://jsonplaceholder.typicode.com/users", 
      onSuccess: function(data){
         var response =JSON.parse(data);
       
    
         var pierwszyUzytkownik = response[0]; //odwołujemy się do tablicy
         //console.log(pierwszyUzytkownik.name);  //właściwość po kropce
    
         var paragraf = document.createElement("p");


         // paragraf.innerHTML = "Id: " + pierwszyUzytkownik.id + ",<br /> Name: " + pierwszyUzytkownik.name + ",<br />  Email: " + pierwszyUzytkownik.email + ",<br />  Www: " + pierwszyUzytkownik.website +"<br>"+"Phone";

         //--------------INTERPOLACJA ES6 ^^^

         
         paragraf.innerHTML =`
         Id: ${pierwszyUzytkownik.id}, <br>
         Name: ${pierwszyUzytkownik.email}, <br>
         Email: ${pierwszyUzytkownik.website}, <br>
         Phone: ${pierwszyUzytkownik.phone}
         `;
    
         document.body.appendChild(paragraf);
    
       //   console.log(paragraf);
      }
    });
}

document.getElementById("button").addEventListener("click", pobierz);


