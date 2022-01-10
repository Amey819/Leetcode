// This question is about implementing a basic elimination algorithm for Candy Crush.

// Given an m x n integer array board representing the grid of candy where board[i][j] represents the type of candy. A value of board[i][j] == 0 represents that the cell is empty.

// The given board represents the state of the game following the player's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:

// If three or more candies of the same type are adjacent vertically or horizontally, crush them all at the same time - these positions become empty.
// After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. No new candies will drop outside the top boundary.
// After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
// If there does not exist more candies that can be crushed (i.e., the board is stable), then return the current board.
// You need to perform the above rules until the board becomes stable, then return the stable board.

var candyCrush = function (board) {
  mark(board);
  while (!isStable(board)) {
    crush(board);
    mark(board);
  }
  return board;
};

function mark(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      let fixed = Math.abs(board[row][col]);
      if (
        board[row + 1] &&
        Math.abs(board[row + 1][col]) === fixed &&
        board[row - 1] &&
        Math.abs(board[row - 1][col]) === fixed
      ) {
        board[row - 1][col] = -Math.abs(board[row - 1][col]);
        board[row][col] = -Math.abs(board[row][col]);
        board[row + 1][col] = -Math.abs(board[row + 1][col]);
      }
      if (
        Math.abs(board[row][col + 1]) === fixed &&
        Math.abs(board[row][col - 1]) === fixed
      ) {
        board[row][col + 1] = -Math.abs(board[row][col + 1]);
        board[row][col] = -Math.abs(board[row][col]);
        board[row][col - 1] = -Math.abs(board[row][col - 1]);
      }
    }
  }
}

function isStable(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] < 0) return false;
    }
  }
  return true;
}

function crush(board) {
  for (let col = 0; col < board[0].length; col++) {
    let stack = [];
    for (let row = 0; row < board.length; row++) {
      if (board[row][col] > 0) {
        stack.push(board[row][col]);
      }
    }
    let bottomInd = board.length - 1;
    while (stack.length) {
      board[bottomInd][col] = stack.pop();
      bottomInd--;
    }
    while (bottomInd >= 0) {
      board[bottomInd][col] = 0;
      bottomInd--;
    }
  }
}
