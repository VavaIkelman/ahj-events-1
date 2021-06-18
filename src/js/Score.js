export default class Score {
  constructor(gameElement) {
    this.gameElement = gameElement;
    this.scoreElement = gameElement.querySelector('.result .score');
    this.missElement = gameElement.querySelector('.result .miss');
  }

  init() {
    this.score = 0;
    this.miss = 0;

    this.gameElement.addEventListener('click', (event) => {
      const cage = event.target.closest('.cage');
      if (cage) {
        const head = cage.querySelector('.head');
        if (head) {
          this.kick();
          head.remove();
        }
      }
    });
  }

  kick() {
    this.score += 1;
    this.scoreElement.innerText = this.score;
  }

  missed() {
    this.miss += 1;
    this.missElement.innerText = this.miss;
  }
}
