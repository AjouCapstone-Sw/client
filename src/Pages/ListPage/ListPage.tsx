import { useGetItemList } from './ListPage.hook';

import { ItemListCell } from '@Components/.';

export const ListPage = () => {
  const { viewLiveList, viewList } = useGetItemList();

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
        {viewList.length === 0 ? (
          <p className='big-empty-text'>텅</p>
        ) : (
          viewList.map((viewItem) => (
            <ItemListCell
              key={viewItem.productId}
              {...viewItem}
            />
          ))
        )}
      </ul>
    </div>
  );
};
