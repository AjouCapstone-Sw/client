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
  const { chats, productLikeNum } = useJoinAuction({ productId });

  const { remainTime, maxPriceUser, nowPrice, joinedUserLength, nextAskPrice } = useAuctionStates({
    productId,
  });

  return (
    <WebRTCViewStyle.Container>
      <WebRTCViewStyle.Header>
        <WebRTCViewHeader />
      </WebRTCViewStyle.Header>

      <WebRTCViewStyle.Title>{productTitle} 경매 Live</WebRTCViewStyle.Title>

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
          productId={productId}
          chats={chats}
          nextAskPrice={Number(nextAskPrice)}
          productLikeNum={productLikeNum}
        />
      </WebRTCViewStyle.Footer>
    </WebRTCViewStyle.Container>
  );
};
