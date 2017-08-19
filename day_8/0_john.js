// brendan eich - creator of javascript
// events
// document.addEventListener
// window.onload = function() {
document.addEventListener("DOMContentLoaded", function(){
  // document.write("The creator of JavaScript is Brendan Eich.");
  document.getElementsByTagName("h1")[0].innerHTML = "Goodbye";


  document.getElementsByTagName("h1");
  document.getElementById("first");
  document.getElementsByClassName("highlight");

  // $ = selector
  // $ is function
  // $('<css selector>')
  $('h1');
  $('#first');
  $('.highlight');

});

// john resig - creator jquery
$(function() {

  $('h1').html('Jacob is cool');
  $('#first').slideUp();
  $('.highlight').remove();

});
