import { useGetItemList, useGetLiveItemList } from './ListPage.hook';

import { ItemListCell } from '@Components/.';

export const ListPage = () => {
  const liveItemList = useGetLiveItemList();
  const basicItemList = useGetItemList();
  return (
    <div>
      <div>
        {liveItemList.map((basicItem) => (
          <ItemListCell
            key={basicItem.id}
            {...basicItem}
          />
        ))}
      </div>
      <div>
        {basicItemList.map((basicItem) => (
          <ItemListCell
            key={basicItem.id}
            {...basicItem}
          />
        ))}
      </div>
    </div>
  );
};
