import dayjs from 'dayjs';

import { ProductRegisterFormData } from '@Components/ProductRegisterForm/ProductRegisterForm.type';
import { axiosInstance } from '@Util/Axios';

const getProductRegisterBody = (data: ProductRegisterFormData) => ({
  seller: 'Noelsky',
  title: data.title,
  description: data.description,
  startTime: data.auctionStartTime,
  endTime: dayjs(data.auctionStartTime).add(dayjs.duration(data.auctionDuration)),
  startPrice: data.auctionStartPrice,
  instant: Number(data.isAuction),
  buyNowPrice: data.buyNowPrice,
  duration: data.auctionDuration,
  bidPrice: data.auctionBidPrice,
  like: false,
  live: false,
  productImages: data.images,
});

export const onSubmit = async (data: ProductRegisterFormData) => {
  const res = await axiosInstance.post('/product/create', getProductRegisterBody(data));
  console.log(res);
};
