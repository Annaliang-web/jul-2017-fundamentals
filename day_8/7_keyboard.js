// when you make an event handler function, a default argument is supplied but not always used
// this event object will telll more information about the event that occured
$(document).keypress(function(event) {
  // console.log("a key was pressed on the keyboard");
  // console.log(event);

  console.log(event.key);
});
