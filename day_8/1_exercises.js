// is my jquery initialized
$();

// select all the shapes
// select all the elements on the page that have a class attriubte set to shape
// <div class="shape red square"></div>
// document.getElementsByClassName("shape");
$('.shape');

// select all the black shapes
// <div class="shape"></div>
// <div class="red shape"></div>
// <div class="black shape"></div>
// // css
// .shape.black {}
// .black.shape {}
$('.black.shape');


/// count all the shapes
$('.shape');
$('.shape').length;
$('.black.shape').length;

// count the number of black shapes and blue shapes
let result = $('.black.shape').length + $('.blue.shape').length;

$('.black.shape, .blue.shape');
$('.black.shape, .blue.shape').length;

// select all the h1 tags
$('h1');

// select all the small cirlces
$('div.small.circle.shape'); // more closed query
$('.small.circle'); // more open query

// <img src="puppy.jpg">
$('img').attr('src'); // get the source attributes value
// "puppy.jpg"
$('img').attr('src', 'kitten.jpg'); // set the source attributes value
//<img src="kitten.jpg">




//
