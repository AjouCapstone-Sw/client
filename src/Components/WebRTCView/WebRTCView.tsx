import { Header } from './Header';
import { AUCTION_HEADER_IMG } from './WebRTCView.const';
import { useGetProductDataInAuction, useJoinAuction } from './WebRTCView.hook';
import WebRTCViewStyle from './WebRTCView.style';
import type { WebRTCViewProps } from './WebRTCView.type';

import { addPriceComma } from '@Util/index';

export const WebRTCView = ({ productId }: WebRTCViewProps) => {
  const { productTitle, auctionStartPrice, nowAskPrice } = useGetProductDataInAuction({
    productId,
  });
  const { chats, joinUserLength, untilExitAuctionTime, nowAuctionPrice, productLikeNum } =
    useJoinAuction({ productId });
  return (
    <WebRTCViewStyle.Container>
      <WebRTCViewStyle.Header>
        <Header />
      </WebRTCViewStyle.Header>

      <WebRTCViewStyle.Title>{productTitle} 경매 Live</WebRTCViewStyle.Title>

      <WebRTCViewStyle.Body>
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
      </WebRTCViewStyle.Body>

      <WebRTCViewStyle.Footer>
        <div>
          <div className='chatContainer'>
            {chats.map((chat) => (
              <div key={chat.id}>
                <span>{chat.name} : </span>
                <span>{chat.message}</span>
              </div>
            ))}
          </div>
          <button type='button'>{addPriceComma(nowAuctionPrice + nowAskPrice)} 원</button>
        </div>

        <WebRTCViewStyle.FooterIconContainer>
          <img
            src='/asset/Auction/Like.svg'
            alt='좋아요'
          />
          <span>{addPriceComma(productLikeNum)}</span>

          <img
            src='/asset/Auction/Chat.svg'
            alt='채팅'
          />
        </WebRTCViewStyle.FooterIconContainer>
      </WebRTCViewStyle.Footer>
    </WebRTCViewStyle.Container>
  );
};
