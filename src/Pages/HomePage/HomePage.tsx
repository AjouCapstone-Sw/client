import { useGetCategoryList } from './HomePage.hook';
import HomePageStyle from './HomePage.style';

import { HomeLiveItem, MainItemSet } from '@Components/.';

export const HomePage = () => {
  const categoryList = useGetCategoryList();
  return (
    <>
      <HomeLiveItem
        imgSrc='/asset/김영진.jpg'
        productId={1}
      />
      <HomePageStyle.MainItemSetContainer>
        {categoryList.map((category) => (
          <MainItemSet
            key={category.categoryId}
            {...category}
          />
        ))}
      </HomePageStyle.MainItemSetContainer>
    </>
  );
};
