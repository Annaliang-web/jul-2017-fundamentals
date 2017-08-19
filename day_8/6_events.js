// click() is a higher order function;
// function clickHandler() {}
// $('.blue.square').click(clickHandler);

$('.blue.square').click(function() {
  console.log('A blue square was clicked!');
  // $('.blue.square').remove(); // will remove all blue squares

  // this is the object that threw the event
  // will only remove the blue square that was clicked
  $(this).remove();
});

// i want the blue square to light up when i roll over it
$('.blue.square').mouseenter(function() {
  console.log("I have entered a blue square");
  // $('.blue.square').addClass('highlight');
  $(this).addClass('highlight');
});
// <div class="blue square shape highlight">

$('.blue.square').mouseleave(function() {
  $(this).removeClass('highlight');
});
// <div class="blue square shape">



//
