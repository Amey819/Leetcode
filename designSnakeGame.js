// Design a Snake game that is played on a device with screen size height x width. Play the game online if you are not familiar with the game.

// The snake is initially positioned at the top left corner (0, 0) with a length of 1 unit.

// You are given an array food where food[i] = (ri, ci) is the row and column position of a piece of food that the snake can eat. When a snake eats a piece of food, its length and the game's score both increase by 1.

// Each piece of food appears one by one on the screen, meaning the second piece of food will not appear until the snake eats the first piece of food.

// When a piece of food appears on the screen, it is guaranteed that it will not appear on a block occupied by the snake.

// The game is over if the snake goes out of bounds (hits a wall) or if its head occupies a space that its body occupies after moving (i.e. a snake of length 4 cannot run into itself).

// Implement the SnakeGame class:

// SnakeGame(int width, int height, int[][] food) Initializes the object with a screen of size height x width and the positions of the food.
// int move(String direction) Returns the score of the game after applying one direction move by the snake. If the game is over, return -1.

var SnakeGame = function (width, height, food) {
  this.occupied = [[0, 0]];
  this.set = new Set();
  this.score = 0;
  this.width = width;
  this.height = height;
  this.foods = food;
  this.foodIdx = 0;

  this.currX = 0;
  this.currY = 0;

  this.moves = {
    U: [-1, 0],
    L: [0, -1],
    D: [1, 0],
    R: [0, 1],
  };
};

SnakeGame.prototype.move = function (direction) {
  const [rowDir, colDir] = this.moves[direction];

  this.currX += rowDir;
  this.currY += colDir;

  const head = `${this.currX}#${this.currY}`;

  if (!this.withinBound(this.currX, this.currY)) return -1;

  this.occupied.push([this.currX, this.currY]);

  if (this.occupied.length > this.score + 1) {
    const [tailX, tailY] = this.occupied.shift();

    const tail = `${tailX}#${tailY}`;

    this.set.delete(tail);
  }

  if (this.set.has(head)) return -1;

  this.set.add(head);

  if (this.foodIdx < this.foods.length) {
    const [foodX, foodY] = this.foods[this.foodIdx];

    if (this.currX === foodX && this.currY === foodY) {
      this.score++;
      this.foodIdx++;
    }
  }

  return this.score;
};

SnakeGame.prototype.withinBound = function (row, col) {
  return row >= 0 && col >= 0 && row < this.height && col < this.width;
};
