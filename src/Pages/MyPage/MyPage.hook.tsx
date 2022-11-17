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
