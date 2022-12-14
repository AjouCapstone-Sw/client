import dayjs from 'dayjs';

import { ProductRegisterFormData } from '@Components/ProductRegisterForm/ProductRegisterForm.type';
import { removePriceEtc } from '@Util/.';
import { axiosInstance } from '@Util/Axios';
import { addImages } from '@Util/Image';
import { getUserId } from '@Util/LocalStorage';
import { getUserIdByNickName } from '@Util/User';

const getProductRegisterBody = (data: ProductRegisterFormData) => ({
  title: data.title,
  description: data.description,
  startTime: dayjs(data.auctionStartTime).format('YYYY-MM-DD HH:mm'),
  startPrice: Number(removePriceEtc(data.auctionStartPrice) ?? 0),
  instant: Number(!data.isAuction),
  buyNowPrice: Number(removePriceEtc(data.buyNowPrice)),
  duration: Number(data.auctionDuration),
  bidPrice: Number(removePriceEtc(data.auctionBidPrice) ?? 0),
  categoryId: data.category.value,
});

export const createProduct = async (formData: ProductRegisterFormData) => {
  const userId = await getUserIdByNickName(getUserId()!);
  const images = await addImages(formData.images);

  const { data } = await axiosInstance.post('/product/create', {
    ...getProductRegisterBody(formData),
    productImages: images,
    userId,
  });
  return data;
};
