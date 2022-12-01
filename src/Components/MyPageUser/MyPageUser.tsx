/* eslint-disable jsx-a11y/no-static-element-interactions */
import type { MyPageUserProps } from './MyPageUser.type';

import { PointExchangeIcon } from '@Components/.';
import { INNER_HTML } from '@Pages/MyPage/MyPage.const';

export const MyPageUser = ({
  profileImage,
  productReviewLength,
  auctionReviewLength,
  nickName,
  handleSelectChange,
  point,
}: MyPageUserProps) => (
  <>
    <img
      src={profileImage}
      alt='프로필'
    />
    <h1>{nickName}</h1>
    <div className='review-point-container'>
      <button
        onClick={handleSelectChange}
        type='button'
      >
        <div>{INNER_HTML.SELL_REVIEW}</div> <span>{productReviewLength} 건</span>
      </button>
      <button
        type='button'
        onClick={handleSelectChange}
      >
        <div>{INNER_HTML.AUCTION_REVIEW}</div> <span>{auctionReviewLength} 건</span>
      </button>
      <button
        type='button'
        className='my-point'
      >
        <div>{INNER_HTML.MY_POINT}</div>
        <span>{point}</span> P
      </button>
      <PointExchangeIcon />
    </div>
  </>
);
