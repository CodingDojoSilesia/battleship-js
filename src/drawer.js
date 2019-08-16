export default class Drawer {
  constructor(location, board) {
    this.location = location;
    this.board = board;
    this.table = document.createElement('table');
  }

  createHeader() {
    const width = this.board[0].length;
    const row = document.createElement('tr');
    for (let i = 0; i < width + 1; i++) {
      const cell = document.createElement('td');
      if (i !== 0) cell.innerHTML = String.fromCharCode(64 + i);
      row.appendChild(cell);
    }
    return row;
  }

  createFirstCell(value, row) {
    const cell = document.createElement('td');
    cell.innerHTML = value;
    row.appendChild(cell);
  }

  createCell(value, i, j, row) {
    const cell = document.createElement('td');
    cell.innerHTML = value;
    cell.setAttribute('id', `${String.fromCharCode(65 + j)}${i + 1}`);
    row.appendChild(cell);
  }

  createRow(i, j, row, value) {
    if (j === 0) {
      this.createFirstCell(j + 1, row);
    }
    this.createCell(value, i, j, row);
  }

  generateTable() {
    const header = this.createHeader();
    this.table.appendChild(header);
    for (let i = 0; i < this.board.length; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < this.board[i].length; j++) {
        this.createRow(i, j, row, this.board[i][j]);
        this.table.appendChild(row);
      }
    }
  }

  fillTable() {
    const location = document.getElementById(this.location);
    location.appendChild(this.table);
  }

  draw() {
    this.generateTable();
    this.fillTable();
  }
}
