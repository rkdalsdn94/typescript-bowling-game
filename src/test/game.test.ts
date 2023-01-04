import Game from '../main/game.main';

describe('게임 테스트', () => {
  test('Game 객체가 생성된다면 통과', () => {
    const game: Game = new Game();
    expect(game).toStrictEqual(new Game());
  });

  test('Game에서 공을 굴릴 수 있으면 통과', () => {
    const game = new Game();
    game.roll(0);
  });
});
