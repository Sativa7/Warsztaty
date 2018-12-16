'use strict';
// 1 Tomek polubil Twoje zdjecie
// 2 Tomek i Asia polubili Twoje zdjęcie
// 3 Tomek, Asia i Kasia polubili twoje zdjęcie
// "3 i więcej" Tomek, Asia i 3 inne osoby polubiły Twoje zdjęcie

let likes = ["Tomek", "Ania"];
//console.log(likes);

const lajkiZTablicy = (likes) => {

      if (likes.length=== 0) {
      console.log('Nikt nie polubił Twojego zdjęcia');}
      else if (likes.length === 1) {
         console.log(likes[0] + ' polubił Twoje zdjęcie');
      } else if (likes.length === 2) {
         console.log(likes[0] + ', ' + likes[1] + ' polubiło Twoje zdjęcie.');
   
   }
   return;
}

lajkiZTablicy(likes);


//function likes(names) {

}