class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.createBoard();
  }

  createBoard() {
    return Array.from({ length: this.height }, () =>
      Array(this.width).fill(false)
    );
  }

  initializeRandomBoard() {
    this.board = this.board.map((row) => row.map(() => Math.random() > 0.7));
  }

  printBoard() {
    for (let row of this.board) {
      console.log(row.map((cell) => (cell ? '■' : '□')).join(' '));
    }
  }
}

// Example usage:
const game = new GameOfLife(50, 5);
game.initializeRandomBoard();
game.printBoard();
