$(function(){
   
/*----------Скрипт для кнопок в меню--------------------------*/
    
   $(".bars").click(function(){
       
       $(this).addClass("none");
       
      $(".close").addClass("block"); 
      $(".close").removeClass("none"); 
       
   });
    
     $(".close").click(function(){
       
       $(this).addClass("none");
       
      $(".bars").addClass("block"); 
      $(".bars").removeClass("none"); 
       
   });
    
/*-------slick слайдер------------------------------------------------*/
    
/*-------Первый слайдер------------------------------------------------*/
    
 $('.slider_1').on(`init reInit`, function(event, slick) {
  $('.counter').text(1 + ' / ' + slick.slideCount);
})
$('.slider_1').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
  $('.counter').text(currentSlide + 1 + ' / ' + slick.slideCount);
})
    
    $(".slider_1").slick({
      arrows: true,
      dots: false,
      slidesToShow: 4,
      vertical: true,
      asNavFor: ".slider_2",
      autoplay: true,
      speed: 1000,
      easing: "linear",
      infinite: true,
      focusOnSelect: true,
      responsive:[
          {
             breakpoint: 551,
             settings: {
               slidesToShow: 3,
               vertical: false
             }
          },
          
          {
             breakpoint: 381,
             settings: {
               slidesToShow: 2,
               vertical: false
             }
          }
          
      ]

});  
    
    $(".slider_2").slick({
      arrows: false,
      dots: false,
      slidesToShow: 1,
      asNavFor: ".slider_1",
      adaptiveHeight: false

});  
    
    $('#slide_1').responsiveTabs({
    startCollapsed: 'accordion'
});
    
    $('#slide_2').responsiveTabs({
    startCollapsed: 'accordion'
});
    
    $('#slide_3').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_4').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_5').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_6').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_7').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_8').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_9').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_10').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_11').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_12').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_13').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_14').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_15').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_16').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_17').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_18').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_19').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_20').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_21').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_22').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_23').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_24').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_25').responsiveTabs({
    startCollapsed: 'accordion'
});
    
     $('#slide_26').responsiveTabs({
    startCollapsed: 'accordion'
});
    
    
    $(".link_1").click(function(){
        
      $(this).addClass("active");
      $(".link_2").removeClass("active");
      $(".link_3").removeClass("active");
        
    });
    
    $(".link_2").click(function(){
        
      $(this).addClass("active");
      $(".link_1").removeClass("active");
      $(".link_3").removeClass("active");
        
    });
    
    $(".link_3").click(function(){
        
      $(this).addClass("active");
      $(".link_1").removeClass("active");
      $(".link_2").removeClass("active");
        
    });
    
    $(".link_2_1").click(function(){
        
      $(this).addClass("active");
      $(".link_2_2").removeClass("active");
      $(".link_2_3").removeClass("active");
        
    });
    
    $(".link_2_2").click(function(){
        
      $(this).addClass("active");
      $(".link_2_1").removeClass("active");
      $(".link_2_3").removeClass("active");
        
    });
    
    $(".link_2_3").click(function(){
        
      $(this).addClass("active");
      $(".link_2_1").removeClass("active");
      $(".link_2_2").removeClass("active");
        
    });
    
    $(".link_3_1").click(function(){
        
      $(this).addClass("active");
      $(".link_3_2").removeClass("active");
      $(".link_3_3").removeClass("active");
        
    });
    
    $(".link_3_2").click(function(){
        
      $(this).addClass("active");
      $(".link_3_1").removeClass("active");
      $(".link_3_3").removeClass("active");
        
    });
    
    $(".link_3_3").click(function(){
        
      $(this).addClass("active");
      $(".link_3_1").removeClass("active");
      $(".link_3_2").removeClass("active");
        
    });
    
    $(".link_4_1").click(function(){
        
      $(this).addClass("active");
      $(".link_4_2").removeClass("active");
      $(".link_4_3").removeClass("active");
        
    });
    
    $(".link_4_2").click(function(){
        
      $(this).addClass("active");
      $(".link_4_1").removeClass("active");
      $(".link_4_3").removeClass("active");
        
    });
    
    $(".link_4_3").click(function(){
        
      $(this).addClass("active");
      $(".link_4_1").removeClass("active");
      $(".link_4_2").removeClass("active");
        
    });
    
    $(".link_5_1").click(function(){
        
      $(this).addClass("active");
      $(".link_5_2").removeClass("active");
      $(".link_5_3").removeClass("active");
        
    });
    
    $(".link_5_2").click(function(){
        
      $(this).addClass("active");
      $(".link_5_1").removeClass("active");
      $(".link_5_3").removeClass("active");
        
    });
    
    $(".link_5_3").click(function(){
        
      $(this).addClass("active");
      $(".link_5_1").removeClass("active");
      $(".link_5_2").removeClass("active");
        
    });
    
    $(".link_6_1").click(function(){
        
      $(this).addClass("active");
      $(".link_6_2").removeClass("active");
      $(".link_6_3").removeClass("active");
        
    });
    
    $(".link_6_2").click(function(){
        
      $(this).addClass("active");
      $(".link_6_1").removeClass("active");
      $(".link_6_3").removeClass("active");
        
    });
    
    $(".link_6_3").click(function(){
        
      $(this).addClass("active");
      $(".link_6_1").removeClass("active");
      $(".link_6_2").removeClass("active");
        
    });
    
     $(".link_7_1").click(function(){
        
      $(this).addClass("active");
      $(".link_7_2").removeClass("active");
      $(".link_7_3").removeClass("active");
        
    });
    
    $(".link_7_2").click(function(){
        
      $(this).addClass("active");
      $(".link_7_1").removeClass("active");
      $(".link_7_3").removeClass("active");
        
    });
    
    $(".link_7_3").click(function(){
        
      $(this).addClass("active");
      $(".link_7_1").removeClass("active");
      $(".link_7_2").removeClass("active");
        
    });
    
     $(".link_8_1").click(function(){
        
      $(this).addClass("active");
      $(".link_8_2").removeClass("active");
      $(".link_8_3").removeClass("active");
        
    });
    
    $(".link_8_2").click(function(){
        
      $(this).addClass("active");
      $(".link_8_1").removeClass("active");
      $(".link_8_3").removeClass("active");
        
    });
    
    $(".link_8_3").click(function(){
        
      $(this).addClass("active");
      $(".link_8_1").removeClass("active");
      $(".link_8_2").removeClass("active");
        
    });
    
     $(".link_9_1").click(function(){
        
      $(this).addClass("active");
      $(".link_9_2").removeClass("active");
      $(".link_9_3").removeClass("active");
        
    });
    
    $(".link_9_2").click(function(){
        
      $(this).addClass("active");
      $(".link_9_1").removeClass("active");
      $(".link_9_3").removeClass("active");
        
    });
    
    $(".link_9_3").click(function(){
        
      $(this).addClass("active");
      $(".link_9_1").removeClass("active");
      $(".link_9_2").removeClass("active");
        
    });
    
     $(".link_10_1").click(function(){
        
      $(this).addClass("active");
      $(".link_10_2").removeClass("active");
      $(".link_10_3").removeClass("active");
        
    });
    
    $(".link_10_2").click(function(){
        
      $(this).addClass("active");
      $(".link_10_1").removeClass("active");
      $(".link_10_3").removeClass("active");
        
    });
    
    $(".link_10_3").click(function(){
        
      $(this).addClass("active");
      $(".link_10_1").removeClass("active");
      $(".link_10_2").removeClass("active");
        
    });
    
    $(".link_11_1").click(function(){
        
      $(this).addClass("active");
      $(".link_11_2").removeClass("active");
      $(".link_11_3").removeClass("active");
        
    });
    
    $(".link_11_2").click(function(){
        
      $(this).addClass("active");
      $(".link_11_1").removeClass("active");
      $(".link_11_3").removeClass("active");
        
    });
    
    $(".link_11_3").click(function(){
        
      $(this).addClass("active");
      $(".link_11_1").removeClass("active");
      $(".link_11_2").removeClass("active");
        
    });
    
    $(".link_12_1").click(function(){
        
      $(this).addClass("active");
      $(".link_12_2").removeClass("active");
      $(".link_12_3").removeClass("active");
        
    });
    
    $(".link_12_2").click(function(){
        
      $(this).addClass("active");
      $(".link_12_1").removeClass("active");
      $(".link_12_3").removeClass("active");
        
    });
    
    $(".link_12_3").click(function(){
        
      $(this).addClass("active");
      $(".link_12_1").removeClass("active");
      $(".link_12_2").removeClass("active");
        
    });
    
    $(".link_13_1").click(function(){
        
      $(this).addClass("active");
      $(".link_13_2").removeClass("active");
      $(".link_13_3").removeClass("active");
        
    });
    
    $(".link_13_2").click(function(){
        
      $(this).addClass("active");
      $(".link_13_1").removeClass("active");
      $(".link_13_3").removeClass("active");
        
    });
    
    $(".link_13_3").click(function(){
        
      $(this).addClass("active");
      $(".link_13_1").removeClass("active");
      $(".link_13_2").removeClass("active");
        
    });
    
    $(".link_14_1").click(function(){
        
      $(this).addClass("active");
      $(".link_14_2").removeClass("active");
      $(".link_14_3").removeClass("active");
        
    });
    
    $(".link_14_2").click(function(){
        
      $(this).addClass("active");
      $(".link_14_1").removeClass("active");
      $(".link_14_3").removeClass("active");
        
    });
    
    $(".link_14_3").click(function(){
        
      $(this).addClass("active");
      $(".link_14_1").removeClass("active");
      $(".link_14_2").removeClass("active");
        
    });
    
    $(".link_15_1").click(function(){
        
      $(this).addClass("active");
      $(".link_15_2").removeClass("active");
      $(".link_15_3").removeClass("active");
        
    });
    
    $(".link_15_2").click(function(){
        
      $(this).addClass("active");
      $(".link_15_1").removeClass("active");
      $(".link_15_3").removeClass("active");
        
    });
    
    $(".link_15_3").click(function(){
        
      $(this).addClass("active");
      $(".link_15_1").removeClass("active");
      $(".link_15_2").removeClass("active");
        
    });
    
    $(".link_16_1").click(function(){
        
      $(this).addClass("active");
      $(".link_16_2").removeClass("active");
      $(".link_16_3").removeClass("active");
        
    });
    
    $(".link_16_2").click(function(){
        
      $(this).addClass("active");
      $(".link_16_1").removeClass("active");
      $(".link_16_3").removeClass("active");
        
    });
    
    $(".link_16_3").click(function(){
        
      $(this).addClass("active");
      $(".link_16_1").removeClass("active");
      $(".link_16_2").removeClass("active");
        
    });
    
    $(".link_17_1").click(function(){
        
      $(this).addClass("active");
      $(".link_17_2").removeClass("active");
      $(".link_17_3").removeClass("active");
        
    });
    
    $(".link_17_2").click(function(){
        
      $(this).addClass("active");
      $(".link_17_1").removeClass("active");
      $(".link_17_3").removeClass("active");
        
    });
    
    $(".link_17_3").click(function(){
        
      $(this).addClass("active");
      $(".link_17_1").removeClass("active");
      $(".link_17_2").removeClass("active");
        
    });
    
    $(".link_18_1").click(function(){
        
      $(this).addClass("active");
      $(".link_18_2").removeClass("active");
      $(".link_18_3").removeClass("active");
        
    });
    
    $(".link_18_2").click(function(){
        
      $(this).addClass("active");
      $(".link_18_1").removeClass("active");
      $(".link_18_3").removeClass("active");
        
    });
    
    $(".link_18_3").click(function(){
        
      $(this).addClass("active");
      $(".link_18_1").removeClass("active");
      $(".link_18_2").removeClass("active");
        
    });
    
    $(".link_19_1").click(function(){
        
      $(this).addClass("active");
      $(".link_19_2").removeClass("active");
      $(".link_19_3").removeClass("active");
        
    });
    
    $(".link_19_2").click(function(){
        
      $(this).addClass("active");
      $(".link_19_1").removeClass("active");
      $(".link_19_3").removeClass("active");
        
    });
    
    $(".link_19_3").click(function(){
        
      $(this).addClass("active");
      $(".link_19_1").removeClass("active");
      $(".link_19_2").removeClass("active");
        
    });
    
    $(".link_20_1").click(function(){
        
      $(this).addClass("active");
      $(".link_20_2").removeClass("active");
      $(".link_20_3").removeClass("active");
        
    });
    
    $(".link_20_2").click(function(){
        
      $(this).addClass("active");
      $(".link_20_1").removeClass("active");
      $(".link_20_3").removeClass("active");
        
    });
    
    $(".link_20_3").click(function(){
        
      $(this).addClass("active");
      $(".link_20_1").removeClass("active");
      $(".link_20_2").removeClass("active");
        
    });
    
    $(".link_21_1").click(function(){
        
      $(this).addClass("active");
      $(".link_21_2").removeClass("active");
      $(".link_21_3").removeClass("active");
        
    });
    
    $(".link_21_2").click(function(){
        
      $(this).addClass("active");
      $(".link_21_1").removeClass("active");
      $(".link_21_3").removeClass("active");
        
    });
    
    $(".link_21_3").click(function(){
        
      $(this).addClass("active");
      $(".link_21_1").removeClass("active");
      $(".link_21_2").removeClass("active");
        
    });
    
    $(".link_22_1").click(function(){
        
      $(this).addClass("active");
      $(".link_22_2").removeClass("active");
      $(".link_22_3").removeClass("active");
        
    });
    
    $(".link_22_2").click(function(){
        
      $(this).addClass("active");
      $(".link_22_1").removeClass("active");
      $(".link_22_3").removeClass("active");
        
    });
    
    $(".link_22_3").click(function(){
        
      $(this).addClass("active");
      $(".link_22_1").removeClass("active");
      $(".link_22_2").removeClass("active");
        
    });
    
    $(".link_23_1").click(function(){
        
      $(this).addClass("active");
      $(".link_23_2").removeClass("active");
      $(".link_23_3").removeClass("active");
        
    });
    
    $(".link_23_2").click(function(){
        
      $(this).addClass("active");
      $(".link_23_1").removeClass("active");
      $(".link_23_3").removeClass("active");
        
    });
    
    $(".link_23_3").click(function(){
        
      $(this).addClass("active");
      $(".link_23_1").removeClass("active");
      $(".link_23_2").removeClass("active");
        
    });
    
    $(".link_24_1").click(function(){
        
      $(this).addClass("active");
      $(".link_24_2").removeClass("active");
      $(".link_24_3").removeClass("active");
        
    });
    
    $(".link_24_2").click(function(){
        
      $(this).addClass("active");
      $(".link_24_1").removeClass("active");
      $(".link_24_3").removeClass("active");
        
    });
    
    $(".link_24_3").click(function(){
        
      $(this).addClass("active");
      $(".link_24_1").removeClass("active");
      $(".link_24_2").removeClass("active");
        
    });
    
    $(".link_25_1").click(function(){
        
      $(this).addClass("active");
      $(".link_25_2").removeClass("active");
      $(".link_25_3").removeClass("active");
        
    });
    
    $(".link_25_2").click(function(){
        
      $(this).addClass("active");
      $(".link_25_1").removeClass("active");
      $(".link_25_3").removeClass("active");
        
    });
    
    $(".link_25_3").click(function(){
        
      $(this).addClass("active");
      $(".link_25_1").removeClass("active");
      $(".link_25_2").removeClass("active");
        
    });
    
    $(".link_26_1").click(function(){
        
      $(this).addClass("active");
      $(".link_26_2").removeClass("active");
      $(".link_26_3").removeClass("active");
        
    });
    
    $(".link_26_2").click(function(){
        
      $(this).addClass("active");
      $(".link_26_1").removeClass("active");
      $(".link_26_3").removeClass("active");
        
    });
    
    $(".link_26_3").click(function(){
        
      $(this).addClass("active");
      $(".link_26_1").removeClass("active");
      $(".link_26_2").removeClass("active");
        
    });
    
    
    
    
    
    
   
});















