$(document).ready(function() {
  

  // smooth scroll  
  $("a[href^='#']").on("click", function(e){
    e.preventDefault();
    const target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top}
        , 800, 'linear');
  });


  // init slick slider
  $('.our-clients').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,    
  });


});
