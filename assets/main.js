'use strict'
$(document).ready(function() {

  var navbar = $('.mainNavbar');

  $('#fullpage').fullpage({
   sectionsColor: ['#222722', '#fefefe', '#ccddff', '#222', '#d2d2f7'],
   anchors: ['portfolio', 'about', 'contact', 'footer'],
   menu: '#menu',
   paddingTop: '58px',
   controlArrows: true,
   easingcss3: 'ease-in-out',
   css3: true,
   verticalCentered: true,
   lazyLoading: true,
   fixedElements: '.mainNavbar',
   slidesNavigation: false,
   responsiveWidth: 991.98,
   menu: '.mainNavbar',
   onLeave: function(index, nextIndex, direction) {
     if(index !== 1 && nextIndex === 1) {
       navbar.addClass('navbar-dark');
       navbar.removeClass('navbar-light');
     }
   },
   afterLoad: function(anchorLink, index) {
     if(index !== 1) {
       navbar.removeClass('navbar-dark');
       navbar.addClass('navbar-light');
     }
   },
 });

   // OffCanvas
   $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })

  // particles.js
  Particles.init({selector: '.background', color: '#ffffff', connectParticles: true});
});
