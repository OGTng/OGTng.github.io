$(function () {
    'use strict';

   // start navbar function
       $('.navbar ul li').on('click',function () {
        $(this).addClass('active').siblings().removeClass('active');
       });

         $(window).on('scroll',function ()
            {
                $(window).scrollTop() >= $('.navbar').height() ? $('.navbar').addClass('scrolling') : $('.navbar').removeClass('scrolling');
                $('.navbar').mouseenter(function () {  $('.navbar').removeClass('scrolling');  });
                $('.navbar').mouseleave(function () {
                $(window).scrollTop() >= $('.navbar').height() ? $('.navbar').addClass('scrolling') : $('.navbar').removeClass('scrolling');
                  
                });
            
        });

   // start tabs function
   
   $('.tabs .tabs-box ul li').on('click',function () {
      $($(this).data('tab')).removeClass('hidden').siblings().addClass('hidden');
      $(this).addClass('active').siblings().removeClass('active');
   });


     //start smooth scroll
     
          $(".navbar ul li a").click(function(){
                  $('html, body').animate({
                  scrollTop: $("#"+ $(this).data("a")).offset().top
               },1500);
          });



// start scroll to top With animations


$(window).scroll(function () {

        if ($(window).scrollTop() >= (50 + $('.social-media').offset().top)){
        $('.social-media i').addClass('wobble');
        }
        if($(window).scrollTop() >= $('.tabs').offset().top){

          $('.tabs .tabs-col').removeClass('vis').addClass('fadeInRight');
          $('.tabs .text-col').removeClass('vis').addClass('fadeInLeft');
          $('.tabs .imgs-col').removeClass('vis').addClass('fadeInDown');
         }

        if($(window).scrollTop() >= $('.sublist').offset().top){

         $('.sublist').removeClass('vis').addClass('fadeInLeft');
         }

        if($(window).scrollTop() >= $('.standerd').offset().top){

        $('.standerd').removeClass('vis').addClass('fadeInRight');
         }

          if($(window).scrollTop() >=  $('.awesome').offset().top) {

          $('.awesome').removeClass('vis').addClass('fadeInDown');
         }

         if($(window).scrollTop() >= $('.pricing-table').offset().top){

          $('.pricing-table .basic').removeClass('vis').addClass('fadeInRight');
          $('.pricing-table .professional').removeClass('vis').addClass('zoomIn');
          $('.pricing-table .enterprise').removeClass('vis').addClass('fadeInLeft');
         }


             if($(window).scrollTop() >= $('.what-say').offset().top){
            $('.what-say .one-com').removeClass('vis').addClass('bounceIn ');
            $('.what-say .two-com').removeClass('vis').addClass('bounceIn ');
            $('.what-say .three-com').removeClass('vis').addClass('bounceIn ');
        
         }

           if($(window).scrollTop() >= $('.stylesh').offset().top){
            $('.stylesh .content').removeClass('vis').addClass('zoomIn');
           
         }


        if($(window).scrollTop() >= $('.contact-us').offset().top){
            $('.contact-us .in').removeClass('vis').addClass('fadeInLeft');
            $('.contact-us .msg').removeClass('vis').addClass('fadeInRight');
           
         }
      
    if ($(window).scrollTop() >= 1000 ) {
        $('#scroll-top').show();

    }else{
      $('#scroll-top').hide();
    }


});


//btn scroll top

$('#scroll-top').click(function(){
  $('html, body').animate({
         scrollTop:$(window).scrollTop() == 0 
         },1500);
});




});