class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.createBoard();
  }

  createBoard() {
    return Array.from({ length: this.height }, () => Array(this.width).fill(false));
  }

  populateBoard() {
    this.board = this.board.map((row) => row.map(() => Math.random() > 0.8));
  }

  printBoard() {
    for (const row of this.board) {
      console.log(row.map((cell) => (cell ? '*' : '.')).join(' '));
    }
  }

  countVecinos(x, y) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const neighborX = x + i;
        const neighborY = y + j;

        if (
          neighborX >= 0
          && neighborX
            < this.width
          && neighborY >= 0
          && neighborY < this.height
        ) {
          count += this.board[neighborY][neighborX] ? 1 : 0;
        }
      }
    }
    return count;
  }

  updateBoard() {
    const newBoard = this.createBoard();

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const neighbors = this.countVecinos(x, y);
        const isCellAlive = this.board[y][x];
        if (isCellAlive) {
          newBoard[y][x] = neighbors === 2 || neighbors === 3;
        } else {
          newBoard[y][x] = neighbors === 3;
        }
      }
    }

    this.board = newBoard;
  }

  generations(generationNumber) {
    const generation = () => {
      for (let num = 0; num < generationNumber; num++) {
        this.printBoard();
        this.updateBoard();
        console.log(`Generación ${num + 1}`); /* Separador */
      }
    };
    generation();
  }
}

const game = new GameOfLife(10, 10);
game.populateBoard();
game.generations(10);

module.exports = GameOfLife;
