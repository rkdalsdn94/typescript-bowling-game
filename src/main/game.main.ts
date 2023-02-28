export default class Game {
  private rolls: number[] = new Array(21).fill(0);
  private currentRoll: number = 0;

  roll(pins: number): void {
    this.rolls[this.currentRoll++] = pins;
  }

  getScore(): number {
    let score: number = 0;
    let frameIndex: number = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.isSpare(frameIndex)) {
        score += 10 + this.nextBallForSpare(frameIndex);
        frameIndex += 2;
      } else if (this.isStrike(frameIndex)) {
        score += 10 + this.nextBallsForStrike(frameIndex);
        frameIndex++;
      } else {
        score += this.nextBallsForFrame(frameIndex);
        frameIndex += 2;
      }
    }
    return score;
  }

  private nextBallsForFrame(frameIndex: number) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  }

  private nextBallsForStrike(frameIndex: number) {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }

  private nextBallForSpare(frameIndex: number) {
    return this.rolls[frameIndex + 2];
  }

  private isStrike(frameIndex: number): boolean {
    return this.rolls[frameIndex] === 10;
  }

  private isSpare(frameIndex: number): boolean {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }
}
