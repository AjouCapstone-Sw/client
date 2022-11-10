import { useEffect, useState } from 'react';

import { IN_PRODUCT_DATA_IN_AUCTION } from './WebRTCView.const';
import type { auctionProductData, UseGetProductDataInAuction } from './WebRTCView.type';
import { getProductDataInAuction } from './WebRTCView.util';

export const useGetProductDataInAuction = ({ productId }: UseGetProductDataInAuction) => {
  const [productData, setProductData] = useState<auctionProductData>(IN_PRODUCT_DATA_IN_AUCTION);

  useEffect(() => {
    getProductDataInAuction({ productId })
      .then(setProductData)
      .catch(() => setProductData({} as auctionProductData));
  }, [productId]);

  return productData;
};
