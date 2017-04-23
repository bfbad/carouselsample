// Shorthand for $( document ).ready()
$(function() {
  console.log( "ready!" );
  $('.carousel').carousel({
    interval: 5000
  })
});
