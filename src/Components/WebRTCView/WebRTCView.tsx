import { useAuctionStates, useGetProductDataInAuction, useJoinAuction } from './WebRTCView.hook';
import WebRTCViewStyle from './WebRTCView.style';
import type { WebRTCViewProps } from './WebRTCView.type';
import { WebRTCViewBody } from './WebRTCViewBody';
import { WebRTCViewFooter } from './WebRTCViewFooter/WebRTCViewFooter';
import { WebRTCViewHeader } from './WebRTCViewHeader';

export const WebRTCView = ({ productId }: WebRTCViewProps) => {
  const { productTitle, auctionStartPrice, nowAskPrice } = useGetProductDataInAuction({
    productId,
  });
  const { productLikeNum, chats, addChat, seller } = useJoinAuction({ productId });

  const { remainTime, maxPriceUser, joinedUserLength, nextAskPrice } = useAuctionStates({
    productId,
    addChat,
  });
  const nowPrice = Number(nextAskPrice) - nowAskPrice;
  return (
    <WebRTCViewStyle.Container>
      <WebRTCViewStyle.Header>
        <WebRTCViewHeader />
      </WebRTCViewStyle.Header>

      <WebRTCViewStyle.Title>{productTitle}</WebRTCViewStyle.Title>

      <WebRTCViewStyle.Body>
        <WebRTCViewBody
          joinUserLength={Number(joinedUserLength)}
          auctionStartPrice={auctionStartPrice}
          untilExitAuctionTime={remainTime}
          nowAuctionPrice={Number(nowPrice)}
          nowAskPrice={nowAskPrice}
          maxPriceUser={maxPriceUser}
        />
      </WebRTCViewStyle.Body>

      <WebRTCViewStyle.Footer>
        <WebRTCViewFooter
          chats={chats}
          seller={seller}
          productId={productId}
          nextAskPrice={Number(nextAskPrice)}
          productLikeNum={productLikeNum}
        />
      </WebRTCViewStyle.Footer>
    </WebRTCViewStyle.Container>
  );
};
