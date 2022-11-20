import { useEffect, useState } from 'react';

import { ItemListCellType } from './ListPage.type';

import { getCategoryItemList, getItemListBySearch } from '@Components/MainItemSet/MainItemset.util';
import { useQuerySearch } from '@Hook/useQuerySearch';

const dummy = [
  {
    productId: 1,
    title: '김영진 피규어',
    buyNowPrice: 1000,
    auctionStartPrice: 500,
    auctionStartTime: '10/28 17:30',
    productImage: '/asset/김영진.jpg',
    like: false,
    live: false,
  },
  {
    productId: 2,
    title: '김영진 피규어2',
    buyNowPrice: 2000,
    auctionStartPrice: 800,
    auctionStartTime: '10/29 17:30',
    productImage: '/asset/김영진.jpg',
    like: false,
    live: false,
  },
  {
    productId: 3,
    title: '김영진 피규어3',
    buyNowPrice: 3000,
    auctionStartPrice: 8000,
    auctionStartTime: '10/29 22:30',
    productImage: '/asset/김영진.jpg',
    like: false,
    live: false,
  },
  {
    productId: 4,
    title: '김영진 피규어3',
    buyNowPrice: 300000000000,
    auctionStartPrice: 8000000000,
    auctionStartTime: '10/29 22:30',
    productImage: '/asset/김영진.jpg',
    like: false,
    live: false,
  },
  {
    productId: 5,
    title: '김영진 피규어3',
    buyNowPrice: 3000,
    auctionStartPrice: 8000,
    auctionStartTime: '10/29 22:30',
    productImage: '/asset/김영진.jpg',
    like: false,
    live: false,
  },
  {
    productId: 6,
    title: '김영진 피규어3',
    buyNowPrice: 3000,
    auctionStartPrice: 8000,
    auctionStartTime: '10/29 22:30',
    productImage: '/asset/김영진.jpg',
    like: false,
    live: false,
  },
  {
    productId: 7,
    title: '김영진 피규어3',
    buyNowPrice: 3000,
    auctionStartPrice: 8000,
    auctionStartTime: '10/29 22:30',
    productImage: '/asset/김영진.jpg',
    like: false,
    live: false,
  },
];
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
        setViewLiveList([{ ...dummy[0], live: true }]);
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
        setViewLiveList([{ ...dummy[0], live: true }]);
      });
  }, [keyword]);
  return { viewLiveList, viewList };
};
