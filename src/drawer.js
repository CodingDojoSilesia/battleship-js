export default class Drawer {
  constructor(location, board) {
    this.location = location;
    this.board = board;
    this.table = document.createElement('table');
  }

  draw(callback) {
    this.generateTable(callback);
    this.attachTable();
  }

  updateCell(row, col, text) {
    const id = this.generateId(this.location, row, col);
    const cell = document.getElementById(id);
    cell.innerText = text;
  }

  makeCell({ id, text, event }) {
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

  indexToChar(i) {
    return String.fromCharCode(64 + i);
  }

  createHeader() {
    return this.makeRow({}, (col) => {
      return {
        text: this.indexToChar(col),
      };
    });
  }

  generateId(loc, row, col) {
    return `${loc}-${this.indexToChar(col)}-${row}`;
  }

  generateTable(callback) {
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
    const location = document.getElementById(this.location);
    location.appendChild(this.table);
  }
}
