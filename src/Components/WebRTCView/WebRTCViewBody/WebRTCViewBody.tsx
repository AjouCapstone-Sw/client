import dayjs from 'dayjs';

import type { WebRTCViewBodyProps } from './WebRTCViewBody.type';
import { getNowPrice } from './WebRTCViewBody.util';

import { addPriceComma } from '@Util/.';

export const WebRTCViewBody = ({
  joinUserLength,
  auctionStartPrice,
  untilExitAuctionTime,
  nowAuctionPrice,
  nowAskPrice,
  maxPriceUser,
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
      <p>남은 경매 시간 : {dayjs(untilExitAuctionTime).format('mm:ss')}</p>
      <div>낙찰 후보자 : {maxPriceUser}</div>
      <div>현재 가격 : {addPriceComma(getNowPrice(nowAuctionPrice, auctionStartPrice))}</div>
      <div>현재 호가 : {addPriceComma(nowAskPrice)}</div>
    </div>
  </>
);
