import { useEffect, useState } from 'react';

import { ItemListCellType } from './ListPage.type';

import { getCategoryItemList, getItemListBySearch } from '@Components/MainItemSet/MainItemset.util';
import { useQuerySearch } from '@Hook/useQuerySearch';

export const useGetItemList = () => {
  const [categoryId, keyword] = useQuerySearch(['categoryId', 'keyword']);

  const [viewList, setViewList] = useState<ItemListCellType[]>([]);
  const [viewLiveList, setViewLiveList] = useState<ItemListCellType[]>([]);

  useEffect(() => {
    if (!categoryId && keyword) return;
    getCategoryItemList(Number(categoryId) || 1)
      .then((res: ItemListCellType[]) => {
        setViewList(res.filter((viewItem) => !viewItem.live));
        setViewLiveList(res.filter((viewItem) => viewItem.live));
      })
      .catch(() => {
        setViewList([]);
        setViewLiveList([]);
      });
  }, [categoryId]);

  useEffect(() => {
    if (!keyword) return;
    getItemListBySearch(keyword)
      .then((res: ItemListCellType[]) => {
        setViewList(res.filter((viewItem) => !viewItem.live));
        setViewLiveList(res.filter((viewItem) => viewItem.live));
      })
      .catch(() => {
        setViewList([]);
        setViewLiveList([]);
      });
  }, [keyword]);
  return { viewLiveList, viewList };
};
