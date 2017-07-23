// Assignment: [Lab] Password Checker
// Ask the user for a password in a variable called ‘password` then:
// If the password is longer than 12 characters, log to the console "Too long!".
// If the password is less than 8 characters, log to the console "Too short!".
// Otherwise, log to the console "Just right!".

// Hint ...
// 1. Get the some info from the user
// 2. Find the length of the user's password
// 3. Do some logic... Compare the password length to the minimum and maximum lengths
//    Maybe use and if... else statement ???

let password = prompt('please enter your password');

if(password.length > 12) {
  alert('Too Long');
} else if(password.length < 8) {
  alert('Too Short');
} else {
  alert('Just Right')
}
