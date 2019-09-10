import Drawer from './drawer';
import Board from './board';


export default class Game {
  constructor(size = { height: 10, width: 10 }) {
    /**
     * Constructor of game class.
     * @param {object} size - Object with size of board
     */
    this.size = size;
    this.board = Board.generate(this.size);
    this.leftDrawer = new Drawer('table-left', this.board);
    this.rightDrawer = new Drawer('table-right', this.board);
  }

  updateMessage(message) {
    /**
     * Set message from messages for state
     * @param {str} message - Value of the message
     */
    const messageEl = document.getElementById('messages');
    messageEl.innerText = message;
  }

  run() {
    /**
     * Main function to run game. Now is responsible to draw two board in html
     */
    this.updateMessage('START');
    this.leftDrawer.draw(this.click.bind(this));
    this.rightDrawer.draw(this.click.bind(this));
  }

  click({ col, row, loc }) {
    /**
     * Callback function for board
     * @param {int} col - Column of board.
     * @param {int} row - Row of board.
     * @param {string} loc - Location of board.
     */

    // implement logic here
    console.log(col, row, loc);
    this.leftDrawer.updateCell(row, col, 'X');
  }
}
