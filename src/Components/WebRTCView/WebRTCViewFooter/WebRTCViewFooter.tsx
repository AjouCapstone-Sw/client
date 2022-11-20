import { useAuctionFooterStates, useSendChatMessage } from './WebRTCViewFooter.hook';
import WebRTCViewFooterStyle from './WebRTCViewFooter.style';
import type { WEbRTCViewFooterProps } from './WebRTCViewFooter.type';
import { handleAskPriceClick } from './WebRTCViewFooter.util';

import { isSeller } from '@Pages/DetailPage/DetailPage.util';
import { addPriceComma } from '@Util/.';

export const WebRTCViewFooter = ({
  nextAskPrice,
  productLikeNum,
  productId,
  chats,
  seller,
}: WEbRTCViewFooterProps) => {
  const { register, handleSubmit } = useSendChatMessage({ productId });
  const { isAuctionStart } = useAuctionFooterStates({ productId });
  const userId = localStorage.getItem('id')!;

  return (
    <>
      <div>
        <div className='chatContainer'>
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={chat.name === 'system' ? 'system-message' : ''}
            >
              <span className={isSeller(chat.name, seller) ? 'seller-message' : ''}>
                {chat.name}:
              </span>
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
          disabled={!isAuctionStart || isSeller(userId, seller)}
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
