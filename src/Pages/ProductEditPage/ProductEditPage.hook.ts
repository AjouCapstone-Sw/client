import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  makeDefaultProductValue,
  makeDefaultProductValueWithoutImage,
  updateProduct,
} from './ProductEditPage.util';

import { ProductRegisterFormData } from '@Components/ProductRegisterForm/ProductRegisterForm.type';
import { useProductId } from '@Hook/useProductId';
import { ProductDetail } from '@Pages/DetailPage';

export const useGetProductDefaultValue = (productDetail: ProductDetail) => {
  const [productDefaultValue, setProductDefaultValue] = useState({});

  console.log(productDetail);
  console.log(productDefaultValue);
  useEffect(() => {
    makeDefaultProductValue(productDetail)
      .then(setProductDefaultValue)
      .catch(() => setProductDefaultValue(makeDefaultProductValueWithoutImage(productDetail)));
  }, [productDetail]);

  return productDefaultValue;
};

export const useOnSubmit = () => {
  const productId = useProductId();
  const navigator = useNavigate();

  const onSubmit = async (formData: ProductRegisterFormData) => {
    await updateProduct({ ...formData, productId });
    navigator(`/detail/${productId}`);
  };
  return onSubmit;
};
