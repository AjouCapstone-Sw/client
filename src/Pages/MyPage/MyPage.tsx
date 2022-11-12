import { useLocation } from 'react-router-dom';

import { useGetUserInfo, useGetUserReview } from './MyPage.hook';

export const MyPage = () => {
  const { search: name } = useLocation();
  const { nickName, profileImage, point, likeList, sellList, buyList } = useGetUserInfo({
    nickName: name,
  });
  const { auctionReview, productReview } = useGetUserReview({ nickName: name });
  console.log(nickName);
  console.log(profileImage);
  console.log(point);
  console.log(likeList);
  console.log(sellList);
  console.log(buyList);
  console.log(auctionReview);
  console.log(productReview);
  return <div>마이페이지</div>;
};
