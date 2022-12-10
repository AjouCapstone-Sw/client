import { useAttendBid, useAuctionFooterStates, useSendChatMessage } from './WebRTCViewFooter.hook';
import WebRTCViewFooterStyle from './WebRTCViewFooter.style';
import type { WEbRTCViewFooterProps } from './WebRTCViewFooter.type';
import { handleAskPriceClick, isMaxPriceUser } from './WebRTCViewFooter.util';

import { isSeller } from '@Pages/DetailPage/DetailPage.util';
import { addPriceComma, getUserId } from '@Util/.';

export const WebRTCViewFooter = ({
  nextAskPrice,
  productLikeNum,
  productId,
  chats,
  seller,
  maxPriceUser,
  point,
}: WEbRTCViewFooterProps) => {
  const { register, handleSubmit } = useSendChatMessage({ productId });
  const { isAuctionStart } = useAuctionFooterStates({ productId });
  const { attend, handleAttendTrue } = useAttendBid({ nextAskPrice });
  const userId = getUserId();
  console.log(userId, maxPriceUser);
  return (
    <>
      <div>
        <div className='chatContainer'>
          {[...chats].reverse().map((chat) => (
            <div
              key={chat.id}
              className={chat.message === '님이 입장하셨습니다' ? 'system-message' : ''}
            >
              <span className={isSeller(chat.name, `${seller} : `) ? 'seller-message' : ''}>
                {chat.name}:{' '}
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
          onClick={handleAskPriceClick({ productId, nextAskPrice, handleAttendTrue })}
          aria-hidden
          disabled={
            !isAuctionStart ||
            isSeller(userId, seller) ||
            attend ||
            isMaxPriceUser(userId!, maxPriceUser) ||
            point < nextAskPrice
          }
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
