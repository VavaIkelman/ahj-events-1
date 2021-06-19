import Goblin from '../Goblin';

jest.useFakeTimers();

test('init', () => {
  const html = document.createElement('div');
  html.innerHTML = `<section class="goblin">
    <div class="results">score: <span class="score">0</span> miss: <span class="miss">0</span> of 5</div>
    <div class="row">
      <div class="cage">
        <img src="img/goblin.png" class="head">
      </div>
      <div class="cage"></div>
      <div class="cage"></div>
      <div class="cage"></div>
    </div>
  </div>`;
  const goblin = new Goblin(html.querySelector('.goblin'));
  expect(goblin.cells[0].contains(goblin.goblinHead)).toBeTruthy();
  goblin.init();
  jest.runTimersToTime(1500);
  expect(goblin.cells[0].contains(goblin.goblinHead)).toBeFalsy();
});

test('rotate', () => {
  const html = document.createElement('div');
  html.innerHTML = `<section class="goblin">
    <div class="results">score: <span class="score">0</span> miss: <span class="miss">0</span> of 5</div>
    <div class="row">
      <div class="cage">
        <img src="img/goblin.png" class="head">
      </div>
      <div class="cage"></div>
      <div class="cage"></div>
      <div class="cage"></div>
    </div>
  </div>`;
  const goblin = new Goblin(html.querySelector('.goblin'));
  expect(goblin.cells[0].contains(goblin.goblinHead)).toBeTruthy();
  goblin.rotate();
  jest.runTimersToTime(1500);
  expect(goblin.cells[0].contains(goblin.goblinHead)).toBeFalsy();
});

test('lose', () => {
  const html = document.createElement('div');
  html.innerHTML = `<section class="goblin">
    <div class="results">score: <span class="score">0</span> miss: <span class="miss">0</span> of 5</div>
    <div class="row">
      <div class="cage">
        <img src="img/goblin.png" class="head">
      </div>
      <div class="cage"></div>
      <div class="cage"></div>
      <div class="cage"></div>
    </div>
  </div>`;
  const goblin = new Goblin(html.querySelector('.goblin'));
  goblin.init();
  jest.runTimersToTime(6000);
  expect(goblin.game.miss).toBe(5);
  jest.runTimersToTime(2000);
  expect(goblin.game.miss).toBe(5);
});
