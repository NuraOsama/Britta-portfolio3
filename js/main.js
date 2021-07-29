(function ($) { 
    "use strict";

    $(document).ready(function() {


      var scrollLink = $('.scrolly');
      
      // Smooth scrolling
      scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
          scrollTop: $(this.hash).offset().top
        }, 1000 );
      });
      
  
      var scrollLink = $('.scroll');
      
      // Smooth scrolling
      scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
          scrollTop: $(this.hash).offset().top
        }, 1000 );
      });
      
      // Active link switching
      $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
        
        scrollLink.each(function() {
          
          var sectionOffset = $(this.hash).offset().top - 20;
          
          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        })
        
      })
      
    })

//about owl-carousel
  $('.owl1').owlCarousel({
    animateOut: 'fadeOut',
    loop:true,
    items:1,
    lazyLoad:true,
   smartSpeed:500,
   
  })
  //sticky nav bar
  $(document).ready(function () {
  
    var $sticky = $('.sticky');
    var stickyOffsetTop = $sticky.offset().top;
  
    $(window).scroll(function (e) {
        e.preventDefault();
  
        var scrollTop = $(window).scrollTop();
  
        if (scrollTop > stickyOffsetTop) {
            $sticky.addClass('is-fixed');
            $(".navbar-nav").fadeOut()
        } else {
            $sticky.removeClass('is-fixed');
            $(".navbar-nav").fadeIn()

        }
    });
  });
  //side hover
  //first sidebar
  $(".first_inline").hover(function(){
    $(".first_sidenavbar").toggleClass("active");
  
  }); 
  
   $(".first_sidenavbar").hover(function(){
    $(this).toggleClass("active");
  
 });  
  //second sidebar
$(".second_inline").click(function(){
  $(".second_sidenavbar").toggleClass("active");
  $(this).toggleClass("active");

}); 

 $(".second_sidenavbar").click(function(){
  $(this).toggleClass("active");
  $(".second_inline").toggleClass("active");


});  

//promo image
$(".promo_image").hover(function(){
  $(".hover_image").toggleClass("active");

});  


//fancybox video
$('[data-fancybox]').fancybox({
  youtube : {
      controls : 0,
      showinfo : 0
  }
});

//counter
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 30000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
//lightgallery
$(document).ready(function() {
  $('#lightgallery').lightGallery({
    pager: true,
    thumbnail:true,
    useLeft:false	

  });
});
$(document).ready(function() {
  var $lightgallery = $('#lightgallery');
  $lightgallery.lightGallery();
  var data = $lightgallery.data('lightGallery');
  
  $lightgallery.on('onBeforeSlide.lg', function(event, prevIndex, index){
    var img = data.$items.eq(index).attr('data-src');
    $('.lg-backdrop').css('background-image', 'url('+img+')');
  });
});

//testimonials owl-carousel
$('.owl2').owlCarousel({
  loop:true,
  autoplay:true,
  items:1,
  margin:10,
  lazyLoad:true,
  smartSpeed:500,
 
})

})(jQuery);