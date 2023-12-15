/* eslint-disable */
const GameOfLife = require('./lifegame'); // Update the path accordingly

describe('GameOfLife', () => {
  describe('createBoard', () => {
    it('should create a board of the specified width and height', () => {
      const game = new GameOfLife(5, 5);
      expect(game.board.length).toBe(5);
      expect(game.board.every((row) => row.length === 5)).toBe(true);
    });
  });

  describe('populateBoard', () => {
    it('should populate the board with random values', () => {
      const game = new GameOfLife(5, 5);
      game.populateBoard();
      expect(game.board.some((row) => row.some((cell) => cell === true))).toBe(
        true
      );
      expect(game.board.some((row) => row.some((cell) => cell === false))).toBe(
        true
      );
    });
  });

  describe('countVecinos', () => {
    it('should count neighbors correctly for a given cell', () => {
      const game = new GameOfLife(5, 5);
      // Manually set some cells to true for testing
      game.board[0][0] = true;
      game.board[0][1] = true;
      game.board[1][0] = true;

      expect(game.countVecinos(1, 1)).toBe(3);
    });
  });

  describe('updateBoard', () => {
    it('should update the board based on the rules of the Game of Life', () => {
      const game = new GameOfLife(3, 3);
      // Set a specific pattern for testing
      game.board = [
        [false, true, false],
        [false, true, false],
        [false, true, false],
      ];

      game.updateBoard();

      expect(game.board).toEqual([
        [false, false, false],
        [true, true, true],
        [false, false, false],
      ]);
    });
  });

  describe('generations', () => {
    it('should update the board for the specified number of generations', () => {
      const game = new GameOfLife(3, 3);
      game.populateBoard();

      // Mock console.log to check if it is called the correct number of times
      const originalLog = console.log;
      console.log = jest.fn();

      const numberOfCalls = 4;

      game.generations(numberOfCalls);

      /* 7 clg height 
        7 clg widht
        7 clg printBoard()
        7 clg separador
      */

      expect(console.log).toHaveBeenCalledTimes(5 * numberOfCalls);
      console.log = originalLog;
    });
  });
});
