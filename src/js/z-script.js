// window.$ = window.jQuery =  require('jquery');
// window.slick =              require('./vendor/bower/slick');


jQuery(document).ready(function($){  

  /* hamburger */
  $('.hamburger').click(function(e) { 
      e.preventDefault();    
      $('.nav__wrapper').toggle();
  });
  $(window).resize(function(){
    if ($(window).width() > 540) {
      $('.nav__wrapper').show();
    } else {
      $('.nav__wrapper').hide();
    }
  });

  /* City list */
  $('.city__name').click(function(){
    $('.city__dropdown').toggle(); 
  });
  /* изменение названия, телефона и почты при выборе города */
  $('.city__item').on('click', function(){
    $(this).closest('.city').find('.city__name').html($(this).html());
    var emailWrapper = $(this).closest('.city').find('.city__email-wrapper');
    $(emailWrapper).html('<a class="city__email" target="_blank" href="mailto:'+$(this).data("email0")+'">'+$(this).data("email0")+'</a>');
    if ($(this).data("email1") !== undefined) {
      $('<a class="city__email" target="_blank" href="mailto:'+$(this).data("email1")+'">'+$(this).data("email1")+'</a>').appendTo($(emailWrapper));
    }
    var telWrapper = $(this).closest('.city').find('.city__tel-wrapper');
    var tel0 = $(this).data("tel0");
    $(telWrapper).html('<a class="city__tel" target="_blank" href="tel:+'+tel0+'">'+tel0+'</a>'); 
    if ($(this).data("tel1") !== undefined) {
      var tel1 = $(this).data("tel1"); 
      $('<a class="city__tel" target="_blank" href="tel:+'+tel1+'">'+tel1+'</a>').appendTo($(telWrapper));
    } 
    $('.city__dropdown').hide(); 
    return false;
  });

  /* плавный скролл наверх */
  $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $('.up').fadeIn();
      } else {
          $('.up').fadeOut();
      }
  });
  $('.up').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });





  /* галерея "отзывы" */
  $('.reviews__gallery').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* галерея "клиенты" */
  $('.banner__gallery').slick({
    infinite: true,
    slidesToShow: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  });

  /* Review in the modal window */
  $('.review-slide__img').click( function(e){ 
    e.preventDefault(); 
    $('body').css({"overflow-y":"hidden"});   
    $('.modal').show();
    $(this).closest('.review-slide').find('.review-slide__modal').clone().appendTo($('.modal'))
    .show()
    .animate({opacity: 1}, 200); 
  });
  /* Close the modal window */
  $('.modal__overlay').click( function(){ 
    $('body').css({"overflow-y":"auto"});
    $(this).closest('.modal').find('.review-slide__modal')
      .animate({opacity: 0}, 200,  
        function(){
          $(this).remove();
          $('.modal').fadeOut(400);
        }
      );
  }); 

  /* 404 - sticky footer */
  // var footerHeight = $('.footer').outerHeight();
  // if ($(window).height() >= $('body').height()){
  //   $('body').addClass('body--full-screen');
  //   $('body').css('padding-bottom', footerHeight+'px');
  //   $('.footer').addClass('footer--stuck-to-bottom');
  // }

    /* Map */
    $('.office__map').each(function (index, Element) {
        var map = new GMaps({
            el: Element,
            lat: 55.777494,
            lng: 37.643639,
            scrollwheel: false
        });
        map.addMarker({
            lat: 55.777494,
            lng: 37.643639,
        });
    });

});

