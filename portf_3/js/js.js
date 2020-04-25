$(function(){
    
     $('ul.menu_item > li a:not(a.active)').hover(function(){
      
     $('.active').css('font-weight', 'normal'); 
      
  }, function(){
           
     $('.active').css('font-weight', 'bold'); 
      
  });
    
 
    $(".button-toggle").click(function(){
      
      $(this).toggleClass("button_style");
      
     $(".first_line").toggleClass("first_line_2");
      
      $(".two_line").toggleClass("two_line_2");
      
      $(".three_line").toggleClass("three_line_3");
      
      
  }); 
    
    
    $(".button-toggle_2").click(function(){
      
      $(this).toggleClass("button_style");
      
     $(".first_line_1").toggleClass("first_line_2");
      
      $(".two_lines_2").toggleClass("two_line_2");
      
      $(".three_lines_3").toggleClass("three_line_3");
        
      
      
  }); 
    
    
    $(".tub_item1").click(function(){
        
       $(this).toggleClass("active_color"); 
       $(".tub_sub_menu_1").toggleClass("active_tub_sub_menu");
       $(".tub_pos_1").toggleClass("tub_pos_transform"); 
        
    });
    
     $(".tub_item2").click(function(){
        
       $(this).toggleClass("active_color"); 
       $(".tub_sub_menu_2").toggleClass("active_tub_sub_menu"); 
       $(".tub_pos_2").toggleClass("tub_pos_transform"); 
        
    });
    
     $(".tub_item3").click(function(){
        
       $(this).toggleClass("active_color"); 
       $(".tub_sub_menu_3").toggleClass("active_tub_sub_menu"); 
       $(".tub_pos_3").toggleClass("tub_pos_transform"); 
        
    });
    
     $(".tub_item4").click(function(){
        
       $(this).toggleClass("active_color"); 
       $(".tub_sub_menu_4").toggleClass("active_tub_sub_menu"); 
       $(".tub_pos_4").toggleClass("tub_pos_transform"); 
        
    });
    
     $(".tub_item5").click(function(){
        
       $(this).toggleClass("active_color"); 
       $(".tub_sub_menu_5").toggleClass("active_tub_sub_menu"); 
       $(".tub_pos_5").toggleClass("tub_pos_transform"); 
        
    });
    
     $(".tub_item6").click(function(){
        
       $(this).toggleClass("active_color"); 
       $(".tub_sub_menu_6").toggleClass("active_tub_sub_menu"); 
       $(".tub_pos_6").toggleClass("tub_pos_transform"); 
        
    });
    
    
    
    
});





