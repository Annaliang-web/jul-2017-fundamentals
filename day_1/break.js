let word;
while(true) {
  word = prompt('Give me a word');
  if(word === 'quit') {
    console.log('Goodbye!');
    break
  } else {
    console.log(`You said ${word}`);
  }
}
