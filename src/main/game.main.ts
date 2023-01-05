export default class Game {
  private score: number = 0;

  getScore(): number {
    return this.score;
  }

  roll(pins: number): void {
    this.score += pins;
  }
}
