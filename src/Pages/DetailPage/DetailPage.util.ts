import { ProductDetail } from './DetailPage.type';

import { axiosInstance } from '@Util/.';

export const getProductDetail = async (productId: number): Promise<ProductDetail> => {
  const { data } = await axiosInstance.get(`/product/${productId}`);

  return {
    ...data,
    auctionEndTime: data.endTime,
    isAuction: !data.instant,
    auctionStartPrice: data.startPrice,
    auctionStartTime: data.startTime,
    sellReviewCount: 0,
    auctionReviewCount: 0,
  };
};

export const isSeller = (nickName: string | null, seller: string) => nickName === seller;
