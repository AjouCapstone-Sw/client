import ItemListCellStyle from './ItemListCell.style';
import { ItemListCellProps } from './ItemListCell.type';

import { useMovePage } from '@Hook/useMovePage';
import { addPriceComma } from '@Util/.';

export const ItemListCell = ({
  productId,
  title,
  buyNowPrice,
  auctionStartPrice,
  auctionStartTime,
  productImage,
  live,
  instance,
}: ItemListCellProps) => {
  const [goDetail] = useMovePage(`/detail/${productId}`) as (() => void)[];

  return (
    <ItemListCellStyle.Container onClick={goDetail}>
      <ItemListCellStyle.ImageBox>
        <ItemListCellStyle.Image
          src={productImage}
          alt='상품이미지'
        />
        {live && <span>Ing</span>}
        {!instance && <span>Live</span>}
      </ItemListCellStyle.ImageBox>
      <ItemListCellStyle.TextContainer>
        <span className='strong'>{title}</span>
        <span>즉시 구매 : {addPriceComma(buyNowPrice)}원</span>
        {live ? (
          <>
            <span>경매 시작가 : {addPriceComma(auctionStartPrice ?? 0)}원 </span>
            <span>경매 시간 : {auctionStartTime}</span>
          </>
        ) : (
          <span>즉시 구매 상품입니다.</span>
        )}
      </ItemListCellStyle.TextContainer>
    </ItemListCellStyle.Container>
  );
};
