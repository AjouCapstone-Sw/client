import { useEffect, useState } from 'react';

import { makeDefaultProductValue } from './ProductEditPage.util';

import { ProductDetail } from '@Pages/DetailPage';

export const useGetProductDefaultValue = (productDetail: ProductDetail) => {
  const [productDefaultValue, setProductDefaultValue] = useState({});

  console.log(productDetail);
  console.log(productDefaultValue);
  useEffect(() => {
    makeDefaultProductValue(productDetail)
      .then(setProductDefaultValue)
      .catch(() => setProductDefaultValue({}));
  }, [productDetail]);

  return productDefaultValue;
};
