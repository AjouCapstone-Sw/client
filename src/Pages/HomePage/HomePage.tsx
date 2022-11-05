import { useGetCategoryList } from './HomePage.hook';
import HomePageStyle from './HomePage.style';

import { HomeHeader, MainItemSet } from '@Components/.';

export const HomePage = () => {
  const categoryList = useGetCategoryList();
  return (
    <>
      <HomeHeader
        imgSrc='/asset/김영진.jpg'
        productId={1}
      />
      <HomePageStyle.MainItemSetContainer>
        {categoryList.map((categoryId) => (
          <MainItemSet
            key={categoryId}
            categoryId={categoryId}
          />
        ))}
      </HomePageStyle.MainItemSetContainer>
    </>
  );
};
