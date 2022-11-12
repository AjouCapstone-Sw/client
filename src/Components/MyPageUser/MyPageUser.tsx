/* eslint-disable jsx-a11y/no-static-element-interactions */
import type { MyPageUserProps } from './MyPageUser.type';

export const MyPageUser = ({
  profileImage,
  productReviewLength,
  auctionReviewLength,
  nickName,
  handleSelectChange,
}: MyPageUserProps) => (
  <>
    <img
      src={profileImage}
      alt='프로필'
    />
    <h1>{nickName}</h1>
    <div>
      <button
        onClick={handleSelectChange}
        type='button'
      >
        <div>판매 후기</div> <span>{productReviewLength} 건</span>
      </button>
      <button
        type='button'
        onClick={handleSelectChange}
      >
        <div>경매 후기</div> <span>{auctionReviewLength} 건</span>
      </button>
    </div>
  </>
);
