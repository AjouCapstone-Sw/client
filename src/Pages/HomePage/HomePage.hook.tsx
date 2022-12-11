import { useEffect, useState } from 'react';

import { DEFAULT_HOME_LIVE_ITEM } from './HomePage.const';
import type { CategoryType, HomeLiveItem, LiveItemType } from './HomePage.type';
import { getCategoryList, getLiveItemList } from './HomePage.util';

import { getProductThumbNails } from '@Util/Product';

export const useGetCategoryList = () => {
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  useEffect(() => {
    getCategoryList()
      .then(setCategoryList)
      .catch(() => setCategoryList([]));
  }, []);
  return categoryList;
};

export const useGetLiveItemList = () => {
  const [liveItemList, setLiveItemList] = useState<LiveItemType[]>([]);
  const [homeLiveItemLists, setHomeLiveItemLists] = useState<HomeLiveItem[]>([]);

  useEffect(() => {
    getLiveItemList()
      .then(setLiveItemList)
      .catch(() => setLiveItemList([]));
  }, []);

  useEffect(() => {
    if (liveItemList.length === 0) return;
    const productIds = liveItemList.map(({ productId }) => productId);
    getProductThumbNails(productIds, 1)
      .then((thumbNails) => {
        const homeLiveItems = thumbNails.map((thumbNail, idx) => ({
          productId: liveItemList[idx].productId,
          imgSrc: thumbNail,
          title: liveItemList[idx].title,
        }));
        setHomeLiveItemLists(homeLiveItems);
      })
      .catch(() => setHomeLiveItemLists([DEFAULT_HOME_LIVE_ITEM]));
  }, [liveItemList]);

  return homeLiveItemLists;
};

// export const useGetHomeLiveItem = (liveItemList: LiveItemType[]) => {
//   const [homeLiveitem, setHomeLiveItem] = useState<HomeLiveItem>(DEFAULT_HOME_LIVE_ITEM);

//   useEffect(() => {
//     const productId = liveItemList[0]?.productId;
//     if (!productId) return;
//     getProductThumbNail(productId, 1)
//       .then((thumbNail) => {
//         setHomeLiveItem({ productId, imgSrc: thumbNail });
//       })
//       .catch(() => setHomeLiveItem(DEFAULT_HOME_LIVE_ITEM));
//   }, [liveItemList]);

//   return homeLiveitem;
// };
