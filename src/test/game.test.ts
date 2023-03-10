import Game from '../main/game.main';

describe('게임 테스트', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  test('Game 객체가 생성된다면 통과', () => {
    expect(game).toStrictEqual(new Game());
  });

  test('Game에서 공을 굴릴 수 있으면 통과', () => {
    game.roll(0);
  });

  function rollMany(frames: number, pins: number): void {
    for (let i = 0; i < frames; i++) {
      game.roll(pins);
    }
  }

  function rollSpare(game: Game) {
    game.roll(5);
    game.roll(5);
  }

  function rollStrike() {
    game.roll(10);
  }

  test('볼링 Game에서 핀을 한 번도 쓰러트리지 못하면 0을 반환해야 된다.', () => {
    rollMany(20, 0);

    expect(game.getScore()).toBe(0);
  });

  test('볼링 Game에서 핀을 계속 한 번씩만 쓰러트렸을 때는 20을 반환해야 한다.', () => {
    rollMany(20, 1);

    expect(game.getScore()).toBe(20);
  });

  test('1스페어 후 다음 공에서 핀을 3번 쓰러트리고, 나머지 공에선 핀을 못 쓰러트리면 16을 반환해야 된다.', () => {
    rollSpare(game); // spare
    game.roll(3);
    rollMany(17, 0);

    expect(game.getScore()).toBe(16);
  });

  test('1스트라이크 후 다음 공에서 핀에서 5번, 3번 쓰러트린 후, 나머지 공에선 핀을 못 쓰러트리면 26을 반환해야 된다.', () => {
    rollStrike();
    game.roll(5);
    game.roll(3);

    rollMany(16, 0);

    expect(game.getScore()).toBe(26);
  });

  test('모든 공을 다 쓰러트리는 Perfect Game 일 때는 300을 반환해야 한다.', () => {
    rollMany(10, 10);
    game.roll(10);
    game.roll(10);

    expect(game.getScore()).toBe(300);
  });
});
