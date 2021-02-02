$(document).ready(function(){
  
    $('[data-help]').focus(afficheMessage);
    $('[data-help]').blur(supprMessage);
    
  
    function afficheMessage(){
      var help = $(this).data("help");    
      $('.message').html(help);    
    }
  
    function supprMessage(){
      $('.message').empty();
    } 
    
  });