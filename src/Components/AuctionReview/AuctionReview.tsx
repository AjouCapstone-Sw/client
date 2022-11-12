import { auctionReviewType } from '@Pages/MyPage/MyPage.type';

export const AuctionReview = ({ nickName, review, score, createdAt }: auctionReviewType) => (
  <div>
    <div>
      <span>{nickName}</span>
      <div>
        <span>{score}</span>
        <span>{createdAt}</span>
      </div>
    </div>
    <pre>{review}</pre>
  </div>
);
