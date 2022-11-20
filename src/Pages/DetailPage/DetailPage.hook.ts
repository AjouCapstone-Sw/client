import { useEffect, useState } from 'react';

import { SKELETON_PRODUCT_DETAIL } from './DetailPage.const';
import { ProductDetail } from './DetailPage.type';
import { getProductDetail } from './DetailPage.util';

export const useGetProductDetail = (productId: number) => {
  const [productDetails, setProductDetails] = useState<ProductDetail[]>([SKELETON_PRODUCT_DETAIL]);
  const [productDetail, setProductDetail] = useState<ProductDetail>(SKELETON_PRODUCT_DETAIL);

  useEffect(() => {
    const [targetProductDetail] = productDetails.filter(({ productId: id }) => id === productId);
    if (targetProductDetail) {
      setProductDetail(targetProductDetail);
      return;
    }
    getProductDetail(productId).then((detail) => {
      setProductDetails((details) => [...details, detail]);
      setProductDetail(detail);
    });
  }, [productId]);

  return productDetail;
};
