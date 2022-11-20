import { useParams } from 'react-router-dom';

import { useGetProductDetail } from './DetailPage.hook';
import DetailPageStyle from './DetailPage.style';
import { isSeller } from './DetailPage.util';

import { Button, ImageSlick, AuctionTimerButton } from '@Components/.';
import { RightArrow } from '@Components/Svg';
import { useMovePage } from '@Hook/useMovePage';
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
    isAuction,
  } = useGetProductDetail(Number(productId))!;

  const [moveEditPage, goSeller] = useMovePage([
    `/edit/${productId}`,
    `/my?${seller}`,
  ]) as (() => void)[];

  return (
    <DetailPageStyle.ProductContainer>
      {isSeller('Noelsky', seller) && (
        <Button
          className='edit-button'
          onClick={moveEditPage}
        >
          수정하기
        </Button>
      )}
      <DetailPageStyle.ImgBox>
        <ImageSlick images={productImages} />
      </DetailPageStyle.ImgBox>
      <DetailPageStyle.SellerInfoContainer onClick={goSeller}>
        <DetailPageStyle.UserCircle />
        <DetailPageStyle.UserName>{seller}</DetailPageStyle.UserName>

        <DetailPageStyle.ReviewContainer onClick={goSeller}>
          <DetailPageStyle.ReviewAnchor>
            경매 후기 {sellReviewCount ?? 0}건<RightArrow />
          </DetailPageStyle.ReviewAnchor>

          <DetailPageStyle.ReviewAnchor>
            판매 후기 {auctionReviewCount ?? 0}건<RightArrow />
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
        {isAuction && (
          <AuctionTimerButton
            startTime={auctionStartTime}
            endTime={auctionEndTime}
          />
        )}
      </DetailPageStyle.ButtonContainer>
    </DetailPageStyle.ProductContainer>
  );
};
