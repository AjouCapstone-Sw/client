import { useEffect, useState } from 'react';

import { ProductDetail } from '..';

import { SKELETON_PRODUCT_DETAIL } from '@Pages/DetailPage/DetailPage.const';
import { getProductDetail } from '@Pages/DetailPage/DetailPage.util';

export const useGetProductInfo = (productId: number, userId: number) => {
  const [productInfo, setProductInfo] = useState<ProductDetail>(SKELETON_PRODUCT_DETAIL);

  useEffect(() => {
    getProductDetail(productId, userId).then(setProductInfo);
  }, [productId, userId]);
  return productInfo;
};
