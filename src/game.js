import Drawer from './drawer';
import Board from './board';


export default class Game {
  constructor(size = { height: 10, width: 10 }) {
    this.size = size;
    this.board = Board.generate(this.size);
    this.drawer = new Drawer('game', this.board);
  }

  run() {
    this.drawer.draw();
  }
}
