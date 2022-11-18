import { MainItem } from './MainItem/MainItem';
import { useGetCategoryItemInfo } from './MainItemSet.hook';
import MainItemSetStyle from './MainItemSet.style';
import { MainItemSetProps } from './MainItemSet.type';

import { useMovePage } from '@Hook/useMovePage';

export const MainItemSet = ({ categoryId, categoryName }: MainItemSetProps) => {
  const itemList = useGetCategoryItemInfo({ categoryId });
  const [goList] = useMovePage(`/list?${categoryId}`) as (() => void)[];
  return (
    <MainItemSetStyle.Container>
      <MainItemSetStyle.Title>
        <MainItemSetStyle.Category>{categoryName}</MainItemSetStyle.Category>
        <span
          onClick={goList}
          onKeyDown={goList}
          role='button'
          tabIndex={0}
        >
          더보기{' '}
        </span>
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
