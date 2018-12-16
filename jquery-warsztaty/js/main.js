// sprawdzic podpiecie
//pobrac tablice i sprawdzic jej dlugość

//console.log("dziala");

$(function () {
   //console.log("query");

   let slideShow = $(".slide-show");
   let slideCount = $(".single-slide").length;
   let slideWidth = 100 / slideCount;
   let index = 0;

   //ustawiamy szerokosc kontenera dynamicznie
   slideShow.css("width", slideCount + "00%");
   //ustawiamy dynamicznie szerokosc i margines
   slideShow.find(".single-slide").each(function (indexTablicy) {
      //poniewaz wlasciwosci sa dwie, to wszystko umieszczamy w obiekcie - musimy tez zadeklarowac index tablicy
      $(this).css({
         width: slideWidth + "%",
         marginLeft: indexTablicy * slideWidth + "%"
      });
      //ustawilismy index0, więc na ten moment ^ wszystie mają margin 25%

      //nawigacja - obsługa zdarzen dla prawej i lewej strzalki
      $(".prev-slide").click(function () {
         slide(index - 1);
      });

      $(".next-slide").click(function () {
         slide(index + 1);
      });

      //główna funkcja slidera
      function slide(newSlideIndex) {
         if (newSlideIndex < 0 || newSlideIndex > slideCount-1) {
            return; //wychodzimy z funkcji, konczymy działanie.
         }

         let slideCaption = slideShow.find(".slide.caption").eq(newSlideIndex);
         //^^eq - pobiera dokładnie TEN index
         slideCaption.hide(); //chowamy napis

         let marginLeft = (newSlideIndex * (-100)) + "%";

         slideShow.animate({
            marginLeft: marginLeft
         }, 1000, function () { //dodajemy funkcję zwrotną tzw. callback
            slideCaption.show();
            index = newSlideIndex; //musimy nadpisywać index
         })

      }

   });


   //console.log(slideCount);

});