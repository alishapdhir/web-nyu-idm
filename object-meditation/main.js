
$(document).ready(function() {

  $("#normalbutton").on("click", function( event ) {
    $(document.body).css( "background-color", "#f9f4e5");
  });

  $("#discobutton").on("click", function( event ) {
    $(document.body).css( "background-image", "repeating-linear-gradient(red, yellow, blue)");
  });

  $("#chillbutton").on("click", function( event ) {
    $(document.body).css( "background-color", "#b1dfe5");
  });

});

// https://www.w3resource.com/jquery-exercises/jquery-events-exercise-8.php
// why is this not working
