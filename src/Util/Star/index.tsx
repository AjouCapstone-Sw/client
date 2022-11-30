/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
export const makeStar = ({
  score,
  handleScoreChange,
}: {
  score: number;
  handleScoreChange?: (idx: number) => void;
}) =>
  Array.from({ length: 5 }, (x, i) => (
    <img
      key={i}
      src={i < score ? '/asset/Star/fill.svg' : '/asset/Star/empty.svg'}
      alt='점수'
      onClick={() => handleScoreChange?.(i + 1)}
    />
  ));
