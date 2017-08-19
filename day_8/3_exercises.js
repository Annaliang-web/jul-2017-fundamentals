// 1.
$('.blue.shape');
$('.blue.shape').remove(); // deletes the tag
$('.blue.shape').hide(); // hide sets the display property to none
$('.blue.shape').show(); // show sets the display property back to what it was

// // HTML
// <div class="blue shape"></div>
// // CSS
// .blue {
//   background-color: blue;
// }
// .shape {
//   display: block;
// }

// 2.
$('#orange-container .shape');
$('#orange-container .shape').remove();

$('#orange-container').children();
$('#orange-container').children().remove();

// 3.
$('.small.red.circle').remove();

// 4.
$('#reset');
$('#reset').html();

// 5.
$('a').html(); // getters will only return to use the first result

// 6.
$('#reset').html(); // get
$('#reset').html("Launch Missiles!"); // set

// 7.
$('h1').html('Jacob is cool'); // sets the entire wrapped set






// 
