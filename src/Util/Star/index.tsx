export const makeStar = ({ score }: { score: number }) =>
  Array.from({ length: 5 }, (x, i) => (
    <img
      key={i}
      src={i < score ? '/asset/Star/fill.svg' : '/asset/Star/empty.svg'}
      alt='점수'
    />
  ));
