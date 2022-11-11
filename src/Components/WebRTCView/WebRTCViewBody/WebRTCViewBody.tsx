import type { WebRTCViewBodyProps } from './WebRTCViewBody.type';

import { addPriceComma } from '@Util/.';

export const WebRTCViewBody = ({
  joinUserLength,
  auctionStartPrice,
  untilExitAuctionTime,
  nowAuctionPrice,
  nowAskPrice,
}: WebRTCViewBodyProps) => (
  <>
    <div className='Join_Box'>
      <img
        src='/asset/Auction/PeopleCount.svg'
        alt='참석인원'
      />
      {addPriceComma(joinUserLength)}
    </div>
    <div>
      <div>경매 시작가 : {addPriceComma(auctionStartPrice)}</div>
      <div>남은 경매 시간 : {untilExitAuctionTime}</div>
      <div>현재 가격 : {addPriceComma(nowAuctionPrice)}</div>
      <div>현재 호가 : {addPriceComma(nowAskPrice)}</div>
    </div>
  </>
);
