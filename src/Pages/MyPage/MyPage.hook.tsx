import { useEffect, useState } from 'react';

import { USER_INFO_SKELETON } from './MyPage.const';
import type {
  auctionReviewType,
  BodyDataType,
  BodySelectType,
  HandleSelectChange,
  productReviewType,
  UseGetPersonalProducts,
  UseGetUserInfo,
  UseGetUserReview,
  userInfoType,
  UseSelectBodyData,
} from './MyPage.type';
import {
  getAuctionReview,
  getLikeProducts,
  getProductReview,
  getPurchaseProducts,
  getSellProducts,
  getUserInfo,
  makeBodyData,
} from './MyPage.util';

import { ItemListCellType } from '@Pages/ListPage/ListPage.type';

export const useGetUserInfo = ({ userId }: UseGetUserInfo) => {
  const [userInfo, setUserInfo] = useState<userInfoType>(USER_INFO_SKELETON);
  useEffect(() => {
    getUserInfo({ userId })
      .then(setUserInfo)
      .catch(() => setUserInfo(USER_INFO_SKELETON));
  }, [userId]);
  return userInfo;
};

export const useGetUserReview = ({ userId }: UseGetUserReview) => {
  const [auctionReview, setAuctionReview] = useState<auctionReviewType[]>([]);
  const [productReview, setProductReview] = useState<productReviewType[]>([]);
  console.log(productReview);
  useEffect(() => {
    getAuctionReview({ userId })
      .then(setAuctionReview)
      .catch(() => setAuctionReview([]));
    getProductReview({ userId })
      .then(setProductReview)
      .catch(() => setProductReview([]));
  }, [userId]);

  return {
    auctionReview,
    productReview,
  };
};

export const useGetPersonalProducts = ({ userId }: UseGetPersonalProducts) => {
  const [purchaseProducts, setPurchaseProducts] = useState<ItemListCellType[]>([]);
  const [sellProducts, setSellProducts] = useState<ItemListCellType[]>([]);
  const [likeProducts, setLikeProducts] = useState<ItemListCellType[]>([]);

  useEffect(() => {
    getPurchaseProducts({ userId })
      .then(setPurchaseProducts)
      .catch(() => setPurchaseProducts([]));
    getSellProducts({ userId })
      .then(setSellProducts)
      .catch(() => setSellProducts([]));
    getLikeProducts({ userId })
      .then(setLikeProducts)
      .catch(() => setLikeProducts([]));
  }, [userId]);

  return {
    purchaseProducts,
    sellProducts,
    likeProducts,
  };
};

export const useSelectBodyData = (props: UseSelectBodyData) => {
  const [select, setSelect] = useState<BodySelectType>('판매목록');
  const bodyData: BodyDataType = makeBodyData(props);
  const handleSelectChange: HandleSelectChange = (e) => {
    const target = e.currentTarget.children.length ? e.currentTarget.firstChild : e.currentTarget;
    const newSelect =
      ((target as HTMLElement).innerHTML.split(' ').join('') as BodySelectType) ?? '판매목록';
    setSelect(newSelect);
  };
  return { bodyDatas: bodyData[select], handleSelectChange };
};
