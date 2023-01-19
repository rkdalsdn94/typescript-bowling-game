export default class Game {
  private rolls: number[] = new Array(21).fill(0);
  private currentRoll: number = 0;

  getScore(): number {
    let score: number = 0;
    let frameIndex: number = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10) {
        score += 10 + this.rolls[frameIndex + 2];
        frameIndex += 2;
      } else if (this.rolls[frameIndex] === 10) {
        score += 10 + this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
        frameIndex++;
      } else {
        score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
        frameIndex += 2;
      }
    }
    return score;
  }

  roll(pins: number): void {
    this.rolls[this.currentRoll++] = pins;
  }
}
