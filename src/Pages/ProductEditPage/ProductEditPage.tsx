import { useGetProductDefaultValue, useOnSubmit } from './ProductEditPage.hook';

import { ProductRegisterForm } from '@Components/.';
import { useProductId } from '@Hook/useProductId';
import { useGetProductDetail } from '@Pages/DetailPage';

export const ProductEditPage = () => {
  const productId = useProductId();
  const productDetail = useGetProductDetail(productId)!;
  const defaultProductValue = useGetProductDefaultValue(productDetail);

  const onSubmit = useOnSubmit();

  return (
    <ProductRegisterForm
      onSubmit={onSubmit}
      defaultValues={defaultProductValue}
    />
  );
};
