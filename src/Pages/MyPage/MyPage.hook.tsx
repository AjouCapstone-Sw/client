import { useEffect, useState } from 'react';

import { USER_INFO_SKELETON } from './MyPage.const';
import type {
  auctionReviewType,
  BodyDataType,
  BodySelectType,
  HandleSelectChange,
  PointHistoryType,
  productReviewType,
  UseGetPersonalProducts,
  UseGetUserInfo,
  UseGetUserReview,
  userInfoType,
  UseSelectBodyData,
  UseGetPointHistories,
  ProductPreview,
} from './MyPage.type';
import {
  getAuctionReview,
  getLikeProducts,
  getPointHistories,
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
  const [purchaseProducts, setPurchaseProducts] = useState<ProductPreview[]>([]);
  const [sellProducts, setSellProducts] = useState<ProductPreview[]>([]);
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

export const useGetPointHistories = ({ userId }: UseGetPointHistories) => {
  const [pointHistories, setPointHistories] = useState<PointHistoryType[]>([]);
  useEffect(() => {
    getPointHistories({ userId })
      .then(setPointHistories)
      .catch(() => setPointHistories([]));
  }, [userId]);

  return pointHistories;
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
