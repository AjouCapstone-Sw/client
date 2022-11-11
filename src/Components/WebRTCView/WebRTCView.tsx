import { useGetProductDataInAuction, useJoinAuction } from './WebRTCView.hook';
import WebRTCViewStyle from './WebRTCView.style';
import type { WebRTCViewProps } from './WebRTCView.type';
import { WebRTCViewBody } from './WebRTCViewBody';
import { WebRTCViewFooter } from './WebRTCViewFooter/WebRTCViewFooter';
import { WebRTCViewHeader } from './WebRTCViewHeader';

export const WebRTCView = ({ productId }: WebRTCViewProps) => {
  const { productTitle, auctionStartPrice, nowAskPrice } = useGetProductDataInAuction({
    productId,
  });
  const { chats, joinUserLength, untilExitAuctionTime, nowAuctionPrice, productLikeNum } =
    useJoinAuction({ productId });

  return (
    <WebRTCViewStyle.Container>
      <WebRTCViewStyle.Header>
        <WebRTCViewHeader />
      </WebRTCViewStyle.Header>

      <WebRTCViewStyle.Title>{productTitle} 경매 Live</WebRTCViewStyle.Title>

      <WebRTCViewStyle.Body>
        <WebRTCViewBody
          joinUserLength={joinUserLength}
          auctionStartPrice={auctionStartPrice}
          untilExitAuctionTime={untilExitAuctionTime}
          nowAuctionPrice={nowAuctionPrice}
          nowAskPrice={nowAskPrice}
        />
      </WebRTCViewStyle.Body>

      <WebRTCViewStyle.Footer>
        <WebRTCViewFooter
          chats={chats}
          nextAskPrice={nowAuctionPrice + nowAskPrice}
          productLikeNum={productLikeNum}
        />
      </WebRTCViewStyle.Footer>
    </WebRTCViewStyle.Container>
  );
};
