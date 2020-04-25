$(function(){
    
  $(".search").click(function(){
      
      $("#modal").bPopup();
});
    
    $(".toggle").click(function(){
        
      $(".box_menu").slideToggle(); 
        
    });
    
    $(window).resize(function(){
        
        if($(window).width() > 1320){
            $(".box_menu").removeAttr("style");
        }
        
        
    });
    
    $(".btn_ft").click(function(e){
      
     e.preventDefault();
        
     $(this).toggleClass("left");  
        
        
if (!$(this).data('status')) {
  	$(this).html('success');
    $(this).data('status', true);
  }
  else {
  	$(this).html('subscribe');
    $(this).data('status', false);
  }      
        
        
$(".in_ft").val('').toggleClass("bgc");
        
$(".img_inp").toggleClass("img_none");
        
    });
    
    
});











