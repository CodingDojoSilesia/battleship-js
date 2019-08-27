import Drawer from './drawer';
import Board from './board';


export default class Game {
  constructor(size = { height: 10, width: 10 }) {
    this.size = size;
    this.board = Board.generate(this.size);
    this.leftDrawer = new Drawer('table-left', this.board);
    this.rightDrawer = new Drawer('table-right', this.board);
  }

  run() {
    this.leftDrawer.draw(this.click.bind(this));
    this.rightDrawer.draw(this.click.bind(this));
  }

  click({ col, row, loc }) {
    // implement logic here
    console.log(col, row, loc);
    this.leftDrawer.updateCell(row, col, 'X');
  }
}
