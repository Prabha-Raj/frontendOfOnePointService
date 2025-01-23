//Get the button:
$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $('#myBtn').fadeIn(200);
    } else {
    $('#myBtn').fadeOut(200);
    }
  });
  $('#myBtn').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 500);
  });


// Counter Js
  (function($) {'use strict';
    $('.count-num').rCounter();
  })(jQuery);
  

// testimonial Slider Js
$('#testimonial-slider').owlCarousel({
    loop:true,
    autoplaySpeed: 3000,
    margin:10,
    nav:false,
    dots: true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').mouseenter(function(){
  $('#tabs-nav li').removeClass('active');
 // $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});