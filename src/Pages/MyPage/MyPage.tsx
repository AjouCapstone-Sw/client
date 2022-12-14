import { INNER_HTML } from './MyPage.const';
import {
  useGetPersonalProducts,
  useGetPointHistories,
  useGetUserInfo,
  useGetUserReview,
  useSelectBodyData,
} from './MyPage.hook';
import MyPageStyle from './MyPage.style';
import { MyPageBody } from './MyPageBody/MyPageBody';

import { MyPageUser } from '@Components/.';
import { getId } from '@Util/LocalStorage';

export const MyPage = () => {
  const userId = getId()!;

  const { nickName, profileImage, point } = useGetUserInfo({
    userId,
  });

  const { auctionReview, productReview } = useGetUserReview({ userId });
  const { sellProducts, purchaseProducts, likeProducts } = useGetPersonalProducts({ userId });
  const pointHistories = useGetPointHistories({ userId });

  const { bodyDatas, handleSelectChange } = useSelectBodyData({
    likeProducts,
    sellProducts,
    purchaseProducts,
    auctionReview,
    productReview,
    pointHistories,
  });

  return (
    <MyPageStyle.Container>
      <MyPageStyle.Header />
      <MyPageStyle.User>
        <MyPageUser
          nickName={nickName}
          handleSelectChange={handleSelectChange}
          profileImage={profileImage || '/asset/김영진.jpg'}
          productReviewLength={productReview.length}
          auctionReviewLength={auctionReview.length}
          point={point}
        />
      </MyPageStyle.User>
      <MyPageStyle.ButtonContainer>
        <button
          type='button'
          onClick={handleSelectChange}
        >
          {INNER_HTML.SELL_LIST}
        </button>
        {userId && (
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
            <button
              type='button'
              onClick={handleSelectChange}
            >
              {INNER_HTML.POINT_HISTORY}
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
