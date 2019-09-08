import Game from '../src/game';
import * as Drawer from '../src/drawer';

describe("Game test suite", () => {
  it("When run is invoked then both boards are drawn", () => {
    spyOn(Drawer, 'default');
    const game = new Game({width: 1, height: 1});
    game.leftDrawer = jasmine.createSpyObj('Drawer', ['draw']);
    game.rightDrawer = jasmine.createSpyObj('Drawer', ['draw']);
    game.run();

    expect(game.leftDrawer.draw).toHaveBeenCalled();
    expect(game.rightDrawer.draw).toHaveBeenCalled();
  });
});
