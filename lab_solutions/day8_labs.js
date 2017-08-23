// jQuery Lab Exercises
//Part 1
// Question 1
// NOTE: a space denotes a parent-child relation
$('#orange-container .red');
// Question 2
// NOTE: a comma means OR
// .small inside #orange-container OR .medium inside #orange-container
$('#orange-container .small, #orange-container .medium');
// Question 3
$('.container .shape');
// Question 4
$('a');
// Question 5
$('li a');
// Question 6
// NOTE: no spaces means AND
// .small AND .blue AND .circle
$('.small.blue.circle').length;


//Part 2
// Question 1
$('#button-1').click(function() {
	$('.shape').remove();
});

// Question 2
$('#button-2').click(function() {
	$(this).attr('disabled', true);
	// It's also valid to directly target #button-2 like below instead of using this
	// $('#button-2').attr('disabled', true);
});

//Question 3
$('#button-3').click(function() {
	$('#button-message').html('Button 3 was clicked');
});






// Craigslist Hacker
$('a').attr('href');

$('a').length;

$('a').html('Your Name');

$('#logo a').attr('href', 'https://www.google.com');






// Wiki Hacker
$('#firstHeading').html('Your Name')

$('body').hide();

$('#p-logo').hide();
