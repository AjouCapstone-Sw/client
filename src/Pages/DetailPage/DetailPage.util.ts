import { ProductDetail } from './DetailPage.type';

import { axiosInstance } from '@Util/.';
import { getUserIdByNickName } from '@Util/User';

export const getProductDetail = async (
  productId: number,
  userId: number,
): Promise<ProductDetail> => {
  const { data } = await axiosInstance.post('/product', { productId, userId });

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

export const buyProduct = async (userId: string, productId: number) => {
  const buyerId = await getUserIdByNickName(userId);
  const res = await axiosInstance.post('/product/instantPurchase', { buyerId, productId });
  console.log(res);
};
