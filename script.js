console.log('jhashhah');
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

   document.querySelector('.logo');
   $('.js--section-highlight').waypoint(
      function(direction) {
         if (direction == 'down') {
            $('nav').addClass('sticky');
         } else {
            $('nav').removeClass('sticky');
         }
      },
      { offset: '70px' }
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
