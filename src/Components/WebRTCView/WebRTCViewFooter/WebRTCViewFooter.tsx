import WebRTCViewFooterStyle from './WebRTCViewFooter.style';
import type { WEbRTCViewFooterProps } from './WebRTCViewFooter.type';

import { addPriceComma } from '@Util/.';

export const WebRTCViewFooter = ({
  chats,
  nextAskPrice,
  productLikeNum,
}: WEbRTCViewFooterProps) => (
  <>
    <div>
      <div className='chatContainer'>
        {chats.map((chat) => (
          <div key={chat.id}>
            <span>{chat.name} : </span>
            <span>{chat.message}</span>
          </div>
        ))}
      </div>
      <button type='button'>{addPriceComma(nextAskPrice)} 원</button>
    </div>

    <WebRTCViewFooterStyle.FooterIconContainer>
      <img
        src='/asset/Auction/Like.svg'
        alt='좋아요'
      />
      <span>{addPriceComma(productLikeNum)}</span>

      <img
        src='/asset/Auction/Chat.svg'
        alt='채팅'
      />
    </WebRTCViewFooterStyle.FooterIconContainer>
  </>
);
