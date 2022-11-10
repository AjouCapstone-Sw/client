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
  ];

  return (
    <div>
      <div className='Header'>
        <div>
          <span>경매</span>
          <span>Live</span>
        </div>
        <div>
          <img
            src=''
            alt='음소거'
          />
          <img
            src=''
            alt='나가기'
          />
        </div>
      </div>
      <div>{productTitle} 경매 Live</div>
      <div>
        <div>
          <img
            src=''
            alt=''
          />
          {joinUserLength.toLocaleString()}
        </div>
        <div>
          <div>{auctionStartPrice.toLocaleString()}</div>
          <div>{untilExitAuctionTime}</div>
          <div>{nowAuctionPrice.toLocaleString()}</div>
          <div>{nowAskPrice.toLocaleString()}</div>
        </div>
      </div>
      <div className='footer'>
        <div>
          <div className='chatContainer'>
            {chats.map((chat) => (
              <div key={chat.id}>
                <span>{chat.name}</span>
                <span>{chat.message}</span>
              </div>
            ))}
          </div>
          <button type='button'>
            {(nowAuctionPrice + nowAskPrice).toLocaleString()}원 입찰하기 버튼
          </button>
        </div>
        <div>
          <img
            src=''
            alt=''
          />
          <span>{productLikeNum.toLocaleString()}</span>

          <img
            src=''
            alt=''
          />
        </div>
      </div>
    </div>
  );
};
