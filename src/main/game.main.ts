export default class Game {
  private rolls: number[] = new Array(21).fill(0);
  private currentRoll: number = 0;

  getScore(): number {
    let score: number = 0;

    // 클린 코더스 영상에선 밑 쪽에 있는 코드와 같이 i를 설정하고 반복하는데 01, 13, 25, ... 볼링인데 이런식으로 더해지는게 뭔가 아닌거 같아서
    // 01, 23, 45, ..., 이런식으로 바로 옆에 있는 인덱스를 더한 다음 스페어를 처리하는 방식으로 바꿨다.
    for (let frame = 0; frame < 20; frame += 2) {
      if (this.rolls[frame] + this.rolls[frame + 1] == 10) {
        score += 10 + this.rolls[frame + 2];
      } else {
        score += this.rolls[frame] + this.rolls[frame + 1];
      }
    }

    // 클린 코더스 영상에서의 방법
    // let i: number = 0;
    // for (let frame = 0; frame < 10; frame++) {
    //   score += this.rolls[i] + this.rolls[i + 1];
    //   i += 2;

    //   // i를 사용하지 않으려면 아래와 같이 쓰면 된다.
    //   // score += this.rolls[frame * 2] + this.rolls[frame * 2 + 1];
    // }

    return score;
  }

  roll(pins: number): void {
    this.rolls[this.currentRoll++] = pins;
  }
}
