import { useLocation } from 'react-router-dom';

import { useGetItemList } from './ListPage.hook';
import { getTransCategoryId } from './ListPage.util';

import { ItemListCell } from '@Components/.';

export const ListPage = () => {
  const { search: categoryId } = useLocation();
  const { viewLiveList, viewList } = useGetItemList(getTransCategoryId(categoryId));
  return (
    <div>
      <ul>
        {viewLiveList.map((viewLive) => (
          <ItemListCell
            key={viewLive.productId}
            {...viewLive}
          />
        ))}
      </ul>
      <ul>
        {viewList.map((viewItem) => (
          <ItemListCell
            key={viewItem.productId}
            {...viewItem}
          />
        ))}
      </ul>
    </div>
  );
};
