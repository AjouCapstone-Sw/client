import { AUCTION_HEADER_IMG } from './WebRTCView.const';
import WebRTCViewStyle from './WebRTCView.style';

import { addPriceComma } from '@Util/index';

export const WebRTCView = () => {
  const productTitle = '김영진 피규어';
  const joinUserLength = 10000;
  const auctionStartPrice = 1500;
  const untilExitAuctionTime = '10:00';
  const nowAuctionPrice = 2000;
  const nowAskPrice = 500;
  const productLikeNum = 100;
  const chats = [
    {
      id: 1,
      name: '김기윤',
      message: 'ㅅㅂ 이걸 왜사',
    },
    {
      id: 2,
      name: '김기윤2',
      message: 'ㅅㅂ 이걸 왜사2',
    },
    {
      id: 3,
      name: '김기윤3',
      message: 'ㅅㅂ 이걸 왜3사3',
    },
    {
      id: 4,
      name: '김기윤4',
      message: 'ㅅㅂ 이걸 왜사4',
    },
    {
      id: 5,
      name: '김기윤',
      message: 'ㅅㅂ 이걸 왜사',
    },
    {
      id: 6,
      name: '김기윤2',
      message: 'ㅅㅂ 이걸 왜사2',
    },
    {
      id: 7,
      name: '김기윤3',
      message: 'ㅅㅂ 이걸 왜3사3',
    },
    {
      id: 8,
      name: '김기윤4',
      message: 'ㅅㅂ 이걸 왜사4',
    },
  ];

  return (
    <WebRTCViewStyle.Container>
      <WebRTCViewStyle.Header>
        <div>
          <span>경매</span>
          <span className='strike'>Live</span>
        </div>
        <WebRTCViewStyle.HeaderImgContainer>
          {AUCTION_HEADER_IMG.map(({ id, ...info }) => (
            <img
              key={id}
              {...info}
            />
          ))}
        </WebRTCViewStyle.HeaderImgContainer>
      </WebRTCViewStyle.Header>

      <WebRTCViewStyle.Title>{productTitle} 경매 Live</WebRTCViewStyle.Title>

      <WebRTCViewStyle.Body>
        <div className='Join_Box'>
          <img
            src='/asset/Auction/PeopleCount.svg'
            alt='참석인원'
          />
          {joinUserLength.toLocaleString()}
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
