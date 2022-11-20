import { useNavigate } from 'react-router-dom';

import { createProduct } from './ProductRegisterPage.util';

import { ProductRegisterFormData } from '@Components/ProductRegisterForm/ProductRegisterForm.type';

export const useOnSubmit = () => {
  const navigator = useNavigate();
  const onSubmit = async (formData: ProductRegisterFormData) => {
    const productId = await createProduct(formData);
    navigator(`/detail/${productId}`);
  };
  return onSubmit;
};
