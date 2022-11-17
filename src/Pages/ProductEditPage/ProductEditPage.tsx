import { useParams } from 'react-router-dom';

import { useGetProductDefaultValue } from './ProductEditPage.hook';

import { ProductRegisterForm } from '@Components/.';
import { ProductRegisterFormData } from '@Components/ProductRegisterForm/ProductRegisterForm.type';
import { useGetProductDetail } from '@Pages/DetailPage';

export const ProductEditPage = () => {
  const { productId } = useParams();
  if (!productId) return null;

  const productDetail = useGetProductDetail(Number(productId))!;
  const defaultProductValue = useGetProductDefaultValue(productDetail);

  const onSubmit = (data: ProductRegisterFormData) => {
    console.log(data);
  };

  return (
    <ProductRegisterForm
      onSubmit={onSubmit}
      defaultValues={defaultProductValue}
    />
  );
};
