import { MainItem } from './MainItem/MainItem';
import { useGetCategoryItemInfo } from './MainItemSet.hook';
import { MainItemSetProps } from './MainItemSet.type';

export const MainItemSet = ({ categoryId }: MainItemSetProps) => {
  const { category, itemList } = useGetCategoryItemInfo({ categoryId });
  return (
    <div>
      <span>{category}</span>
      <span>더보기 {'>'} </span>
      <ul>
        {itemList.map((item) => (
          <MainItem
            key={item.productId}
            {...item}
          />
        ))}
      </ul>
    </div>
  );
};
