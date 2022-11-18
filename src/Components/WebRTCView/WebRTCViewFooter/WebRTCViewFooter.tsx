import { useSendChatMessage } from './WebRTCViewFooter.hook';
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
};
