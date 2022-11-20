import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SKELETON_PRODUCT_DETAIL } from './DetailPage.const';
import { ProductDetail } from './DetailPage.type';
import { buyProduct, getProductDetail } from './DetailPage.util';

import { getUserId } from '@Util/LocalStorage';

export const useGetProductDetail = (productId: number) => {
  const [productDetails, setProductDetails] = useState<ProductDetail[]>([SKELETON_PRODUCT_DETAIL]);
  const [productDetail, setProductDetail] = useState<ProductDetail>(SKELETON_PRODUCT_DETAIL);

  useEffect(() => {
    if (!productId) return;
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

export const useBuyNow = (productId: number, seller: string) => {
  const navigator = useNavigate();
  const userId = getUserId();

  const handleBuyNow = async () => {
    await buyProduct(userId!, productId);
    navigator(`/address-register?productId=${productId}&seller=${seller}&type=buy`);
  };

  return handleBuyNow;
};
