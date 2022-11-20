import { ProductRegisterFormData } from '@Components/ProductRegisterForm/ProductRegisterForm.type';
import { removePriceEtc } from '@Util/.';
import { axiosInstance } from '@Util/Axios';
import { addImages } from '@Util/Image';
import { getUserId } from '@Util/LocalStorage';
import { getUserIdByNickName } from '@Util/User';

const getProductRegisterBody = (data: ProductRegisterFormData) => ({
  userId: 1,
  title: data.title,
  description: data.description,
  startTime: data.auctionStartTime,
  startPrice: Number(removePriceEtc(data.auctionStartPrice) ?? 0),
  instant: Number(!data.isAuction),
  buyNowPrice: Number(removePriceEtc(data.buyNowPrice)),
  duration: Number(data.auctionDuration),
  bidPrice: Number(removePriceEtc(data.auctionBidPrice) ?? 0),
  categoryId: 2,
});

export const createProduct = async (formData: ProductRegisterFormData) => {
  const userId = await getUserIdByNickName(getUserId()!);
  const images = await addImages(formData.images);
  console.log(images);
  const { data } = await axiosInstance.post('/product/create', {
    ...getProductRegisterBody(formData),
    productImages: images,
    userId,
  });
  return data;
};
