import { useEffect, useState } from 'react';

import { USER_INFO_SKELETON } from './MyPage.const';
import type {
  auctionReviewType,
  BodyDataType,
  BodySelectType,
  HandleSelectChange,
  productReviewType,
  UseGetUserInfo,
  UseGetUserReview,
  userInfoType,
  UseSelectBodyData,
} from './MyPage.type';
import { getAuctionReview, getProductReview, getUserInfo, makeBodyData } from './MyPage.util';

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

export const useSelectBodyData = (props: UseSelectBodyData) => {
  const [select, setSelect] = useState<BodySelectType>('판매');
  const bodyData: BodyDataType = makeBodyData(props);
  const handleSelectChange: HandleSelectChange = (e) => {
    if (e.currentTarget.innerHTML.includes('판매 목록')) setSelect('판매');
    else if (e.currentTarget.innerHTML.includes('구매 목록')) setSelect('구매');
    else if (e.currentTarget.innerHTML.includes('찜')) setSelect('찜');
    else if (e.currentTarget.innerHTML.includes('판매 후기')) setSelect('판매후기');
    else if (e.currentTarget.innerHTML.includes('경매 후기')) setSelect('경매후기');
    else setSelect('판매');
  };
  return { bodyDatas: bodyData[select], handleSelectChange };
};
