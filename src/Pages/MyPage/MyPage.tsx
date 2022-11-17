import { useLocation } from 'react-router-dom';

import { INNER_HTML } from './MyPage.const';
import { useGetUserInfo, useGetUserReview, useSelectBodyData } from './MyPage.hook';
import MyPageStyle from './MyPage.style';
import { MyPageBody } from './MyPageBody/MyPageBody';

import { MyPageUser } from '@Components/.';

export const MyPage = () => {
  const { search: name } = useLocation();
  const { nickName, profileImage, point, likeList, sellList, buyList } = useGetUserInfo({
    nickName: name,
  });
  const { auctionReview, productReview } = useGetUserReview({ nickName: name });
  const { bodyDatas, handleSelectChange } = useSelectBodyData({
    likeList,
    sellList,
    buyList,
    auctionReview,
    productReview,
  });
  console.log(point);
  return (
    <MyPageStyle.Container>
      <MyPageStyle.Header />
      <MyPageStyle.User>
        <MyPageUser
          nickName={nickName}
          handleSelectChange={handleSelectChange}
          profileImage={profileImage}
          productReviewLength={productReview.length}
          auctionReviewLength={auctionReview.length}
        />
      </MyPageStyle.User>
      <MyPageStyle.ButtonContainer>
        <button
          type='button'
          onClick={handleSelectChange}
        >
          {INNER_HTML.SELL_LIST}
        </button>
        {name && (
          <>
            <button
              type='button'
              onClick={handleSelectChange}
            >
              {INNER_HTML.BUY_LIST}
            </button>
            <button
              type='button'
              onClick={handleSelectChange}
            >
              {INNER_HTML.LIKE_LIST}
            </button>
          </>
        )}
      </MyPageStyle.ButtonContainer>
      <MyPageStyle.Body>
        <MyPageBody bodyDatas={bodyDatas} />
      </MyPageStyle.Body>
    </MyPageStyle.Container>
  );
};
