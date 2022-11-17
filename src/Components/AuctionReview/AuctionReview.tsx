import AuctionReviewStyle from './AuctionReview.style';

import { auctionReviewType } from '@Pages/MyPage/MyPage.type';
import { makeStar } from '@Util/Star';

export const AuctionReview = ({ nickName, review, score, createdAt }: auctionReviewType) => (
  <AuctionReviewStyle.Container>
    <div>
      <span>{nickName}</span>
      <div>
        <span>{makeStar({ score })}</span>
        <span>{createdAt}</span>
      </div>
    </div>
    <pre>{review}</pre>
  </AuctionReviewStyle.Container>
);
