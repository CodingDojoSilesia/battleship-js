import Board from '../src/board';
import consts from '../src/consts';

describe("Board test suite", () => {
  it("When generate is called without size object then throw error", () => {
    expect(Board.generate).toThrowError(TypeError);
  });

  it("When generate is called then should return board with water", () => {
    const board = Board.generate({
      height: 5,
      width: 5,
    });
    const flatten = [].concat(...board);
    const everyElementIsWater = flatten.every(element => element ===consts.WATER);
    expect(everyElementIsWater).toBe(true);
  });

  it("When generate is called with specific dimensions then exact board is generated", () => {
    const height = 100;
    const width = 20;
    const board = Board.generate({ height, width });

    expect(board.length).toBe(height);
    expect(board.every(element => element.length === width)).toBe(true);
  });
});
