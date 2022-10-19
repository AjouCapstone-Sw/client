import { useState } from 'react';

import { ItemListCellType } from './ListPage.type';

const dummy = [
  {
    id: 1,
    title: '김영진 피규어',
    buyNowPrice: 1000,
    auctionStartPrice: 500,
    auctionStartTime: '10/28 17:30',
    productImage: '/asset/김영진.jpg',
  },
  {
    id: 2,
    title: '김영진 피규어2',
    buyNowPrice: 2000,
    auctionStartPrice: 800,
    auctionStartTime: '10/29 17:30',
    productImage: '/asset/김영진.jpg',
  },
  {
    id: 3,
    title: '김영진 피규어3',
    buyNowPrice: 3000,
    auctionStartPrice: 8000,
    auctionStartTime: '10/29 22:30',
    productImage: '/asset/김영진.jpg',
  },
  {
    id: 4,
    title: '김영진 피규어3',
    buyNowPrice: 300000000000,
    auctionStartPrice: 8000000000,
    auctionStartTime: '10/29 22:30',
    productImage: '/asset/김영진.jpg',
  },
  {
    id: 5,
    title: '김영진 피규어3',
    buyNowPrice: 3000,
    auctionStartPrice: 8000,
    auctionStartTime: '10/29 22:30',
    productImage: '/asset/김영진.jpg',
  },
  {
    id: 6,
    title: '김영진 피규어3',
    buyNowPrice: 3000,
    auctionStartPrice: 8000,
    auctionStartTime: '10/29 22:30',
    productImage: '/asset/김영진.jpg',
  },
  {
    id: 7,
    title: '김영진 피규어3',
    buyNowPrice: 3000,
    auctionStartPrice: 8000,
    auctionStartTime: '10/29 22:30',
    productImage: '/asset/김영진.jpg',
  },
];
export const useGetItemList = () => {
  const [itemList, setItemList] = useState<ItemListCellType[]>([]);
  const [viewList, setViewList] = useState<ItemListCellType[]>([...dummy]);
  console.log(itemList);
  console.log(setItemList);
  console.log(setViewList);
  return viewList;
};

export const useGetLiveItemList = () => {
  const [viewLiveList, setViewLiveList] = useState<ItemListCellType[]>([
    { ...dummy[0], live: true },
  ]);
  console.log(setViewLiveList);
  return viewLiveList;
};
