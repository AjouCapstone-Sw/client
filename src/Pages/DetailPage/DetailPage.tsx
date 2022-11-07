import { useParams } from 'react-router-dom';

import { useGetProductDetail } from './DetailPage.hook';
import DetailPageStyle from './DetailPage.style';

import { Button, ImageSlick, AuctionTimerButton } from '@Components/.';
import { RightArrow } from '@Components/Svg';
import { addPriceComma } from '@Util/.';

export const DetailPage = () => {
  const { productId } = useParams();
  if (!productId) return null;

  const {
    productImages,
    seller,
    sellReviewCount,
    auctionReviewCount,
    title,
    auctionStartPrice,
    auctionStartTime,
    auctionEndTime,
    description,
    buyNowPrice,
  } = useGetProductDetail(Number(productId))!;

  return (
    <DetailPageStyle.ProductContainer>
      <DetailPageStyle.ImgBox>
        <ImageSlick images={productImages} />
      </DetailPageStyle.ImgBox>
      <DetailPageStyle.SellerInfoContainer>
        <DetailPageStyle.UserCircle />
        <DetailPageStyle.UserName>{seller}</DetailPageStyle.UserName>

        <DetailPageStyle.ReviewContainer>
          <DetailPageStyle.ReviewAnchor>
            경매 후기 {sellReviewCount}건<RightArrow />
          </DetailPageStyle.ReviewAnchor>

          <DetailPageStyle.ReviewAnchor>
            판매 후기 {auctionReviewCount}건<RightArrow />
          </DetailPageStyle.ReviewAnchor>
        </DetailPageStyle.ReviewContainer>
      </DetailPageStyle.SellerInfoContainer>
      <DetailPageStyle.ProductTitle>{title}</DetailPageStyle.ProductTitle>
      <DetailPageStyle.ProductHighlightText>
        경매 시작가: {addPriceComma(auctionStartPrice)}
      </DetailPageStyle.ProductHighlightText>
      <DetailPageStyle.ProductHighlightText>
        경매 시간: {auctionStartTime} ~ {auctionEndTime}
      </DetailPageStyle.ProductHighlightText>
      <DetailPageStyle.ProductText>{description}</DetailPageStyle.ProductText>
      <DetailPageStyle.ButtonContainer>
        <Button>
          즉시 구매 <span>{addPriceComma(buyNowPrice)} ₩</span>
        </Button>
        <AuctionTimerButton
          startTime={auctionStartTime}
          endTime={auctionEndTime}
        />
      </DetailPageStyle.ButtonContainer>
    </DetailPageStyle.ProductContainer>
  );
};
