import { useGetItemList, useGetLiveItemList } from './ListPage.hook';

import { ItemListCell } from '@Components/.';

export const ListPage = () => {
  const liveItemList = useGetLiveItemList();
  const basicItemList = useGetItemList();
  return (
    <div>
      <ul>
        {liveItemList.map((basicItem) => (
          <ItemListCell
            key={basicItem.productId}
            {...basicItem}
          />
        ))}
      </ul>
      <ul>
        {basicItemList.map((basicItem) => (
          <ItemListCell
            key={basicItem.productId}
            {...basicItem}
          />
        ))}
      </ul>
    </div>
  );
};
