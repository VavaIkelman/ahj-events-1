import Goblin from '../Goblin';

jest.useFakeTimers();

test('rotate cell', () => {
  const html = document.createElement('div');
  html.innerHTML = `<label class="goblin_game">
    <tr>
      <div class="cage">
        <img src="img/goblin.png" class="head">
      </div>
      <div class="cage"></div>
      <div class="cage"></div>
      <div class="cage"></div>
    </tr>
  </label>`;
  const Game = new Goblin(html.querySelector('.goblin_game'));
  expect(Game.cells[0].contains(Game.goblinHead)).toBeTruthy();
  Game.rotate();
  jest.runTimersToTime(1500);
  expect(Game.cells[0].contains(Game.goblinHead)).toBeFalsy();
});
