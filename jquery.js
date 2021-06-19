$(document).ready(function() {
 
    $(".btn").hover(function(){
    $(this).animate({opacity: "0.5"}, 500); //Jquery animation
    });
    $(".btn").click(function(){
        $(this).stop(); //Jquery animation
        });
    
   
    
   });