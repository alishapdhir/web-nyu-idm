$("div").on( "click", "#milk", function( event ) {
  $(event.delegateTarget ).css( "background-color", "#FFFFFF");
});

$("div").on( "click", "#accurate", function( event ) {
  $(event.delegateTarget ).css( "background-color", "#bdc6ef");
});

// https://www.w3resource.com/jquery-exercises/jquery-events-exercise-8.php
// why is this not working
