// 'use strict';
// wrapujemy w funkcję, zeby się zaladowalo po otworzeniu przegladarki
$(function () {
   $("#button").click(function () {
      $.ajax({
         url: "https://jsonplaceholder.typicode.com/users",
         dataType: 'json',
         success: function (resultJSON) {
            //console.log(resultJSON);
            let pierwszyUzytkownik = resultJSON[0];
            let paragraf = document.createElement("p");

            $(paragraf).html(`
            Id: ${pierwszyUzytkownik.id}, <br>
            Name: ${pierwszyUzytkownik.email}, <br>
            Email: ${pierwszyUzytkownik.website}, <br>
            Phone: ${pierwszyUzytkownik.phone}
            `)

            $("body").append(paragraf);

         },
         onerror: function (msg) {
            console.log(msg);
         }
      });
   })
});



// $.ajax({
//    url: "https://jsonplaceholder.typicode.com/users",
//    dataType: 'json',
//    success: function (resultJSON) {
//    //console.log(resultJSON);
//    },
//    onerror: function (msg) {
//   // console.log(msg);
//    }
//    });


//    //tu wywyołujemy funkcję
// function pobierzDane {
//    $.ajax({
//       type: "GET", 
//       url: "https://jsonplaceholder.typicode.com/users", 
//       onSuccess: function(data){
//          var response =JSON.parse(data);


//          var pierwszyUzytkownik = response[0]; //odwołujemy się do tablicy
//          //console.log(pierwszyUzytkownik.name);  //właściwość po kropce

//          var paragraf = document.createElement("p");
//          paragraf.innerHTML = "Id: " + pierwszyUzytkownik.id + ",<br /> Name: " + pierwszyUzytkownik.name + ",<br />  Email: " + pierwszyUzytkownik.email + ",<br />  Www: " + pierwszyUzytkownik.website; 

//          document.body.appendChild(paragraf);

//        //   console.log(paragraf);
//       }
//     }
// }

// //document.getElementById("button").addEventListener("click", pobierz);

// //lub

// //document.getElementById("button").onclick = pobierz