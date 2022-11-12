import { useEffect, useState } from 'react';

import { USER_INFO_SKELETON } from './MyPage.const';
import {
  auctionReviewType,
  productReviewType,
  UseGetUserInfo,
  UseGetUserReview,
  userInfoType,
} from './MyPage.type';
import { getAuctionReview, getProductReview, getUserInfo } from './MyPage.util';

export const useGetUserInfo = ({ nickName }: UseGetUserInfo) => {
  const [userInfo, setUserInfo] = useState<userInfoType>(USER_INFO_SKELETON);
  useEffect(() => {
    getUserInfo({ nickName })
      .then(setUserInfo)
      .catch(() => setUserInfo(USER_INFO_SKELETON));
  }, [nickName]);
  return userInfo;
};

export const useGetUserReview = ({ nickName }: UseGetUserReview) => {
  const [auctionReview, setAuctionReview] = useState<auctionReviewType[]>([]);
  const [productReview, setProductReview] = useState<productReviewType[]>([]);

  useEffect(() => {
    getAuctionReview({ nickName })
      .then(setAuctionReview)
      .catch(() => setAuctionReview([]));
    getProductReview({ nickName })
      .then(setProductReview)
      .catch(() => setProductReview([]));
  }, [nickName]);

  return {
    auctionReview,
    productReview,
  };
};
