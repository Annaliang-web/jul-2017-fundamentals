
// two dimensions
// one dimensional array requires one address to get to the data
// two dimensional array requires two addresses to get to the data

// microsoft excel
// google sheets
// tictactoe
// battleship
// bingo
// surrey

let row1 = [null, null, null];
          // 0 ,   1,     2
let row2 = [null, null, null];
          // 0 ,   1,     2
let row3 = [null, null, null];

row2[1] = "X";
row3[0] = "O";

// current state of the game board
// [null, null, null]
// [null, "X", null]
// ["O", null, null]


// two dimensional arrays
let tictactoe = [ row1, row2, row3 ];

// nested array structure - arrays that contains arrays
let tictactoe = [ [null, null, null],
                  [null, null, null],
                  [null, null, null] ];

// tictactoe[row][col];

tictactoe[0]; // [null, null, null]
tictactoe[0][1]; // null
tictactoe[0][1] = "X"; // an "X" will be placed into the middle of our game board



// play tictactoe together
let tictactoe = [ [null, null, "X"],
                  ["X", "O", "O"],
                  ["X", "O", null] ];

tictactoe[0][2] = "X";
tictactoe[1][2] = "O";
tictactoe[2][0] = "X";
tictactoe[1][1] = "O";
tictactoe[1][0] = "X";
tictactoe[2][1] = "O";

// three dimensional arrays
// rubix cube: face, row, col
