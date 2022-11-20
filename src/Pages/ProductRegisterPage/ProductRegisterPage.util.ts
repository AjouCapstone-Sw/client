import { ProductRegisterFormData } from '@Components/ProductRegisterForm/ProductRegisterForm.type';
import { removePriceEtc } from '@Util/.';
import { axiosInstance } from '@Util/Axios';

const getProductRegisterBody = (data: ProductRegisterFormData) => ({
  userId: 1,
  title: data.title,
  description: data.description,
  startTime: data.auctionStartTime,
  startPrice: Number(removePriceEtc(data.auctionStartPrice)),
  instant: Number(data.isAuction),
  buyNowPrice: Number(removePriceEtc(data.buyNowPrice)),
  duration: data.auctionDuration,
  bidPrice: Number(removePriceEtc(data.auctionBidPrice)),
  categoryId: 2,
  productImages: [
    'https://t1.daumcdn.net/cfile/tistory/998E393359E4C42001',
    'https://t1.daumcdn.net/cfile/tistory/998E393359E4C42001',
  ],
});

export const createProduct = async (formData: ProductRegisterFormData) => {
  const { data } = await axiosInstance.post('/product/create', getProductRegisterBody(formData));
  return data;
};
