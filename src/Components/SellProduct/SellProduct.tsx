/* eslint-disable jsx-a11y/img-redundant-alt */
import SellProductStyle from './SellProduct.style';
import { SellProductProps } from './SellProduct.type';

import { addPriceComma } from '@Util/index';

export const SellProduct = ({
  seller,
  buyer,
  title,
  image,
  commission,
  price,
}: SellProductProps) => (
  <SellProductStyle.Container>
    <img
      src={image}
      alt='product image'
    />
    <p>{title}</p>
    <p>{buyer}</p>
    <p>{seller}</p>
    <p>{addPriceComma(price)} 원</p>
    <p>{addPriceComma(commission)} 원</p>
  </SellProductStyle.Container>
);
