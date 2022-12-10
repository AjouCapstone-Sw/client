import { useGetItemList } from './ListPage.hook';
import ListPageStyle from './ListPage.style';

import { ItemListCell } from '@Components/.';

export const ListPage = () => {
  const { viewLiveList, viewList } = useGetItemList();
  return (
    <ListPageStyle.Container>
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
    </ListPageStyle.Container>
  );
};
