import WebRTCViewFooterStyle from './WebRTCViewFooter.style';
import type { WEbRTCViewFooterProps } from './WebRTCViewFooter.type';
import { handleAskPriceClick } from './WebRTCViewFooter.util';

import { addPriceComma } from '@Util/.';

export const WebRTCViewFooter = ({
  chats,
  nextAskPrice,
  productLikeNum,
  productId,
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
      <button
        type='button'
        onClick={handleAskPriceClick({ productId, nextAskPrice })}
        aria-hidden
      >
        {addPriceComma(nextAskPrice)} 원
      </button>
    </div>

    <WebRTCViewFooterStyle.FooterIconContainer>
      <img
        src='/asset/Auction/Like.svg'
        alt='좋아요'
      />
      <span>{addPriceComma(productLikeNum)}</span>
    </WebRTCViewFooterStyle.FooterIconContainer>
  </>
);
