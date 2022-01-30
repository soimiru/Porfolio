$(document).ready(function () {

  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  let barScroll = false;

  function isScrolledIntoView(elem)
  {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
  
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
  
      return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
  }
  

  
  $('.barra').each(function () {
      $(this).find('.barra-progress').animate({
          width: $(this).attr('data-percent')
      }, 5000);
  });
  barScroll = true;
      
  
 
});


