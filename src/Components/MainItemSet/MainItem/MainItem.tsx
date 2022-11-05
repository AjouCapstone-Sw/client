import { MainItemProps } from './MainItem.type';

import { useMovePage } from '@Hook/useMovePage';

export const MainItem = ({ productId, productImage, title, buyNowPrice }: MainItemProps) => {
  const [goDetail] = useMovePage(`/detail/${productId}`);
  return (
    <li
      onClick={goDetail as () => void}
      aria-hidden
    >
      <img
        src={productImage}
        alt='상품 이미지'
      />
      <span>{title}</span>
      <span>{buyNowPrice}</span>
    </li>
  );
};
