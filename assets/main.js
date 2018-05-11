$(document).ready(function() {
    var navbar = $('.mainNavbar');

   $('#fullpage').fullpage({
       sectionsColor: ['#222722', '#fefefe', '#ccddff', '#222', '#d2d2f7'],
       anchors: ['portfolio', 'about', 'contact', 'footer'],
       menu: '#menu',
       paddingTop: '58px',
       controlArrows: true,
       easingcss3: 'ease-in-out',
       verticalCentered: true,
       onLeave: function(index, nextIndex, direction) {
           if(index !== 1 && nextIndex === 1) {
               navbar.addClass('dark')
           }
       },
       afterLoad: function(anchorLink, index) {
           if(index !== 1) {
               navbar.removeClass('dark')
           }
       },
   });
});
