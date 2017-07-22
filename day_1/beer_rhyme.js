// Use a for loop to implement "bottles of beer rhyme".
//
// "100 bottles of beer on the wall"
// "100 bottles of beer"
// "Take one down, pass it around, 99 bottles of beer on the wall"

for(let bottles = 100; bottles > 0; bottles--) {
  console.log(`${bottles} bottles of beer on the wall
               ${bottles} bottles of beer
               Take one down, pass it around, ${bottles - 1} bottles of beer on the wall`);
}
