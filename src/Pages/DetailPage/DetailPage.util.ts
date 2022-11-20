import { ProductDetail } from './DetailPage.type';

import { axiosInstance } from '@Util/.';

export const getProductDetail = async (productId: number) => {
  const {
    data: {
      description,
      endTime,
      instant,
      productImages,
      seller,
      startPrice,
      startTime,
      title,
      buyNowPrice,
      like,
      live,
    },
  } = await axiosInstance.get(`/product/${productId}`);

  return {
    description,
    productId,
    auctionEndTime: endTime,
    isAuction: !instant,
    productImages,
    seller,
    auctionStartPrice: startPrice,
    auctionStartTime: startTime,
    title,
    buyNowPrice,
    like,
    live,
  } as ProductDetail;
};

export const isSeller = (nickName: string | boolean, seller: string) => nickName === seller;
