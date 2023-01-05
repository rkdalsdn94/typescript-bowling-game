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

  test('볼링 Game에서 핀을 한 번도 쓰러트리지 못하면 0을 반환해야 된다.', () => {
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }

    expect(game.getScore()).toBe(0);
  });

  test('볼링 Game에서 핀을 계속 한 번씩만 쓰러트렸을 때는 20을 반환해야 한다.', () => {
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }

    expect(game.getScore()).toBe(20);
  });
});
