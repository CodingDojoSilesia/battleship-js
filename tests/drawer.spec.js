import Board from '../src/board';
import Drawer from '../src/drawer';

describe('Drawer test suite', () => {
  it('When drawer is created should create element', () => {
    const board = Board.generate({ width: 5, height: 5 });
    const drawer = new Drawer('location', board);

    expect(drawer.table.nodeName).toBe('TABLE');
    expect(drawer.table.tagName).toBe('TABLE');
  });

  it('When drawer is created should create element', () => {
    const board = Board.generate({ width: 5, height: 5 });
    const drawer = new Drawer('location', board);
    const obj = {innerText: ''};

    spyOn(drawer, 'generateId').and.returnValue('unique-id');
    spyOn(document, 'getElementById').and.returnValue(obj);
    drawer.updateCell(0, 0, 'X');

    expect(obj.innerText).toBe('X');
    expect(board[0][0]).toBe('X');
  });
});
