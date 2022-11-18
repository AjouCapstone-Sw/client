import { MainItem } from './MainItem/MainItem';
import { useGetCategoryItemInfo } from './MainItemSet.hook';
import MainItemSetStyle from './MainItemSet.style';
import { MainItemSetProps } from './MainItemSet.type';

export const MainItemSet = ({ categoryId, categoryName }: MainItemSetProps) => {
  const itemList = useGetCategoryItemInfo({ categoryId });
  return (
    <MainItemSetStyle.Container>
      <MainItemSetStyle.Title>
        <MainItemSetStyle.Category>{categoryName}</MainItemSetStyle.Category>
        <span>더보기 </span>
        <img
          src='/asset/MainItemSet/더보기.svg'
          alt='더보기'
        />
      </MainItemSetStyle.Title>
      <MainItemSetStyle.ItemContainer>
        {itemList.map((item) => (
          <MainItem
            key={item.productId}
            {...item}
          />
        ))}
      </MainItemSetStyle.ItemContainer>
    </MainItemSetStyle.Container>
  );
};
