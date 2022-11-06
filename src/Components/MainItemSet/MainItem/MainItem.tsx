import MainItemStyle from './MainItem.style';
import { MainItemProps } from './MainItem.type';

import { useMovePage } from '@Hook/useMovePage';
import { addPriceComma } from '@Util/.';

export const MainItem = ({ productId, productImage, title, buyNowPrice }: MainItemProps) => {
  const [goDetail] = useMovePage(`/detail/${productId}`);
  return (
    <MainItemStyle.Container
      onClick={goDetail as () => void}
      aria-hidden
    >
      <img
        src={productImage}
        alt='상품 이미지'
      />
      <span>{title}</span>
      <MainItemStyle.Price>{addPriceComma(buyNowPrice)} 원</MainItemStyle.Price>
    </MainItemStyle.Container>
  );
};
