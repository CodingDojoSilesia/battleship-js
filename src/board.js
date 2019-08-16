import consts from './consts';

export default class Board {
  static generate(size) {
    const board = new Array(size.height);
    for (let i = 0; i < size.height; i++) {
      board[i] = new Array(size.width);
      for (let j = 0; j < size.width; j++) {
        board[i][j] = consts.WATER;
      }
    }
    return board;
  }
}
