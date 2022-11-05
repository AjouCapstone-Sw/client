import { HomeHeader, MainItemSet } from '@Components/.';

export const HomePage = () => {
  console.log('1');
  return (
    <>
      <HomeHeader
        imgSrc='/asset/김영진.jpg'
        productId={1}
      />
      <MainItemSet categoryId={1} />
    </>
  );
};
