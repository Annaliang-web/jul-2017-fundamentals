// 1.
$('a');
$('a').eq(0);
$('a').attr('href');
$('a').eq(0).attr('href');
// when you do a get in jquery, you only get back the first result

// <a href="http://www.reddit.com">Reddit</a>
// 2. 2 arguments into the attr method makes it a setter
$('a').attr('href', 'http://www.codecore.com/');
// 3. set the class attribute of all the links to highlight
// <a href="http://www.google.com" class="highlight">Google</a>
$('a').attr('class'); //
$('a').attr('class', 'highlight');
// $('a').addClass('highlight');
// 4.
$('.shape').attr('class', 'highlight');
// $('.shape').attr('class', `${$('.shape').attr('class')} highlight`);
$('.shape').addClass('highlight');
// <div class="small red square shape highlight"></div>



//
