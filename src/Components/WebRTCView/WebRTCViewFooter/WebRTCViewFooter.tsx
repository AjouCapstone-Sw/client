import { useAuctionFooterStates, useSendChatMessage } from './WebRTCViewFooter.hook';
import WebRTCViewFooterStyle from './WebRTCViewFooter.style';
import type { WEbRTCViewFooterProps } from './WebRTCViewFooter.type';
import { handleAskPriceClick } from './WebRTCViewFooter.util';

import { addPriceComma } from '@Util/.';

export const WebRTCViewFooter = ({
  chats,
  nextAskPrice,
  productLikeNum,
  productId,
}: WEbRTCViewFooterProps) => {
  const { register, handleSubmit } = useSendChatMessage();
  const { isAuctionStart } = useAuctionFooterStates({ productId });
  return (
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
        <form onSubmit={handleSubmit}>
          <input
            placeholder='채팅을 입력해 보세요'
            {...register}
          />
        </form>
        <button
          className='ask-button'
          type='button'
          onClick={handleAskPriceClick({ productId, nextAskPrice })}
          aria-hidden
          disabled={!isAuctionStart}
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
};
