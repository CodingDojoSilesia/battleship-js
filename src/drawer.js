// Please do not modify this code unless...
// ...you are know what you are doing.
export default class Drawer {
  constructor(location, board) {
    /**
     * Constructor of drawer class
     * @param {string} location - Location where board be attached in html
     * @param {Board} board - Board object (list of lists)
     */
    this.location = location;
    this.board = board;
    this.table = document.createElement('table');
  }

  draw(callback) {
    /**
     * Main function for creating board in html
     * @param {function} callback - Function you pass to call on click event
     */
    this.generateTable(callback);
    this.attachTable();
  }

  updateCell(row, col, text) {
    /**
     * Update one cell on board
     * @param {int} col - Column of board
     * @param {int} row - Row of board
     * @param {string} text - Text value for cell
     */
    const id = this.generateId(this.location, row, col);
    const cell = document.getElementById(id);
    cell.innerText = text;
    this.board[row][col] = text;
  }

  makeCell({ id, text, event }) {
    /**
     * Create one cell
     * @param {string} id - Unique identification for cell
     * @param {string} text - Text value for cell
     * @param {function} event - Event for click action
     */
    const td = document.createElement('td');
    if (id) {
      td.setAttribute('id', id);
    }
    if (text) {
      td.innerText = text;
    }
    if (event) {
      td.addEventListener('click', event);
    }
    return td;
  }

  makeRow(firstCellData, funcToGenerateCells) {
    /**
     * Create one row
     * @param {object} firstCellData - Cell data for row number
     * @param {function} funcToGenerateCells - Function for generate cells in row
     */
    const row = document.createElement('tr');
    const width = this.board[0].length;
    const location = this.location;
    row.appendChild(this.makeCell(firstCellData));
    for (let colIndex = 1; colIndex <= width; colIndex++) {
      const data = funcToGenerateCells(colIndex, location);
      row.appendChild(this.makeCell(data));
    }
    return row;
  }

  indexToChar(index) {
    /**
     * @param {int} index - Index of column on board
     */
    return String.fromCharCode(64 + index);
  }

  createHeader() {
    /**
     * Generate header row for board letters
     */
    return this.makeRow({}, (col) => {
      return {
        text: this.indexToChar(col),
      };
    });
  }

  generateId(loc, row, col) {
    /**
     * Generate unique id for cell
     * @param {string} loc - Location of board
     * @param {int} col - Column of board
     * @param {int} row - Row of board
     */
    return `${loc}-${this.indexToChar(col)}-${row}`;
  }

  generateTable(callback) {
    /**
     * Generates all board elements.
     * @param {function} callback - Function you pass to call on click event
     */
    const header = this.createHeader();
    this.table.appendChild(header);

    for (let rowIndex = 0; rowIndex < this.board.length; rowIndex++) {
      const firstCellData = { text: rowIndex + 1 };
      const row = this.makeRow(firstCellData, (col, loc) => {
        const id = this.generateId(loc, rowIndex + 1, col);
        return {
          id,
          text: this.board[rowIndex][col - 1],
          event: () => {
            callback({ loc, col, row: rowIndex + 1 });
          },
        };
      });
      this.table.appendChild(row);
    }
  }

  attachTable() {
    /**
     * Attaching generated board to html element from location
     */
    const location = document.getElementById(this.location);
    location.appendChild(this.table);
  }
}
