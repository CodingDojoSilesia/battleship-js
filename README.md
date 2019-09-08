# Battleships
## Goal
Based on modification codebase and adding classes and functions you should
implement game of battleships.

**You can read about rules [here](https://en.wikipedia.org/wiki/Battleships_game).**

## What you should implement

* Stage 1: Handling Battleship board, randomize ship placement on board, add guards following rules
* Stage 2: Handling clicking on board, implementing miss and hit on ship
* Stage 3: Implement simple AI to play only with one player
* Stage 4: Implement new game mechanism with placing ships on your own 
* Stage 5: Use your imagination

## Files
* `index.html` Main and only html file, entry of app, also contains css styles.
* `app.js` Entry point of javascript, is responsible for start game.
* `game.js` Main class of game, is responsible for run it and get events from board.
* `drawer.js` Class responsible for draw boards. 
* `board.js` Class responsible for generate board with predefined data.
* `consts.js` Every constant variables get there.

## Implementation
You should look at class `Game` where you should extend functionality there. 
Method `click` is passed for each cell on board so you should use it to implement
main actions according on clicks.

Also please make sure you use method `updateCell` from class `Drawer` it is
responsible for updating one cell on board.


## How to run
1. Install [Node.js](https://nodejs.org/en/download/)
2. Install [yarn](https://yarnpkg.com/en/docs/install)
3. To install dependencies: `yarn` or `yarn install`
4. Run development server:: `yarn run dev`
5. Run tests: `yarn run test`
## Useful links
1. https://webpack.js.org
2. https://babeljs.io
3. https://jasmine.github.io
4. https://github.com/jsdom/jsdom
