import { HandleSelectChange } from '@Pages/MyPage/MyPage.type';

export type MyPageUserProps = {
  profileImage: string;
  productReviewLength: number;
  auctionReviewLength: number;
  nickName: string;
  handleSelectChange: HandleSelectChange;
};
