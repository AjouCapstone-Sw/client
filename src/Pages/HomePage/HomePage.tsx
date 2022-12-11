import { HOME_SLICK_SETTING } from './HomePage.const';
import { useGetCategoryList, useGetLiveItemList } from './HomePage.hook';
import HomePageStyle from './HomePage.style';

import { HomeLiveItem, MainItemSet } from '@Components/.';

export const HomePage = () => {
  const categoryList = useGetCategoryList();
  const liveItemList = useGetLiveItemList();

  return (
    <>
      <HomePageStyle.HomeLiveSlider {...HOME_SLICK_SETTING}>
        {liveItemList.map((liveItem) => (
          <HomeLiveItem
            key={liveItem.productId}
            {...liveItem}
          />
        ))}
      </HomePageStyle.HomeLiveSlider>
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
