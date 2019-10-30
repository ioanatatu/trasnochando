const lg = console.log;

// selecting all elements
const btnScrollToTop = document.getElementById('ScrollToTop');

/*
btnScrollToTop.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
   });
});
*/

$(document).ready(function() {
   $('.js--scroll-to-highlight').click(function() {
      $('html, body').animate(
         { scrollTop: $('.js--section-highlight').offset().top },
         1000
      );
   });
   $('.js--scroll-to-maestros').click(function() {
      $('html, body').animate(
         { scrollTop: $('.js--section-maestros').offset().top },
         1000
      );
   });
   $('.js--scroll-to-program').click(function() {
      $('html, body').animate(
         { scrollTop: $('.js--section-program').offset().top },
         1500
      );
   });

   $('.js--section-highlight').waypoint(
      function(direction) {
         if (direction == 'down') {
            $('nav').addClass('sticky');
            $('.sticky .nav').fadeTo('slow', 0.92);
         } else {
            $('.sticky .nav').css('opacity', '0');
            $('nav').removeClass('sticky');
            $('.nav').css('opacity', '1');
         }
      },
      { offset: '70px' }
   );

   $('.js--section-highlight').waypoint(
      function(direction) {
         if (direction == 'down') {
            $('#ScrollToTop').fadeTo('slow', 0.8);
         } else {
            // $('#ScrollToTop').fadeTo('slow', 0.8);
            $('#ScrollToTop').css('opacity', '0');
            $('.nav').css('opacity', '1');
         }
      },
      { offset: '300px' }
   );

   /* -------------------- SCROLL TO TOP BUTTON ----------------------------------- */
   btnScrollToTop.addEventListener('click', () => {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
   });
});

/* var waypoint = new Waypoint({
  element: document.getElementById('element-waypoint'),
  handler: function(direction) {
    notify(this.element.id + ' triggers at ' + this.triggerPoint)
  },
  offset: '75%'
})*/
