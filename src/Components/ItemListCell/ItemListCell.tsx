import ItemListCellStyle from './ItemListCell.style';
import { ItemListCellProps } from './ItemListCell.type';
import { addPriseComma } from './ItemListCell.util';

import { useMovePage } from '@Hook/useMovePage';

export const ItemListCell = ({
  id,
  title,
  buyNowPrice,
  auctionStartPrice,
  auctionStartTime,
  productImage,
  live,
}: ItemListCellProps) => {
  const [goDetail] = useMovePage(`/detail/${id}`) as (() => void)[];
  return (
    <ItemListCellStyle.Container onClick={goDetail}>
      <ItemListCellStyle.ImageBox>
        <ItemListCellStyle.Image
          src={productImage}
          alt='상품이미지'
        />
        {live && <span>Live</span>}
      </ItemListCellStyle.ImageBox>
      <ItemListCellStyle.TextContainer>
        <span className='strong'>{title}</span>
        <span>즉시 구매 : {addPriseComma(buyNowPrice)}원</span>
        <span>경매 시작가 : {addPriseComma(auctionStartPrice)}원 </span>
        <span>경매 시간 : {auctionStartTime}</span>
      </ItemListCellStyle.TextContainer>
    </ItemListCellStyle.Container>
  );
};

ItemListCell.defaultProps = {
  live: false,
};