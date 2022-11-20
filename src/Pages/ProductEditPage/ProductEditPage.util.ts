/* eslint-disable no-unused-vars */
import { ProductRegisterFormData } from '@Components/ProductRegisterForm/ProductRegisterForm.type';
import { ProductDetail } from '@Pages/DetailPage';
import { axiosInstance } from '@Util/Axios';
import { addPriceComma, getAuctionDuration, getBidPrice, removePriceEtc } from '@Util/Product';

const convertURLtoFile = async (url: string) => {
  const response = await fetch(url);
  const data = await response.blob();
  const ext = url.split('.').pop();
  const filename = url.split('/').pop();
  const metadata = { type: `image/${ext}` };
  return new File([data], filename!, metadata);
};

const getImageFiles = async (images: string[]) => {
  const fileReqList = images.map(convertURLtoFile);
  const imageFiles = await Promise.all(fileReqList);
  return imageFiles;
};
const makeImageFileList = async (images: string[]) => {
  const imageFiles = await getImageFiles(images);
  const dataTransfer = new DataTransfer();
  imageFiles.forEach((imageFile) => dataTransfer.items.add(imageFile));
  return dataTransfer.files;
};

export const makeDefaultProductValue = async ({
  productImages,
  title,
  description,
  isAuction,
  buyNowPrice,
  auctionStartPrice,
  auctionEndTime,
  auctionStartTime,
}: ProductDetail): Promise<ProductRegisterFormData> => ({
  title,
  description,
  auctionStartTime,
  buyNowPrice: addPriceComma(buyNowPrice),
  auctionBidPrice: addPriceComma(getBidPrice(auctionStartPrice)),
  isAuction,
  auctionStartPrice: addPriceComma(auctionStartPrice),
  auctionDuration: getAuctionDuration(auctionStartTime, auctionEndTime),
  images: await makeImageFileList(productImages),
});

export const makeDefaultProductValueWithoutImage = ({
  title,
  description,
  isAuction,
  buyNowPrice,
  auctionStartPrice,
  auctionEndTime,
  auctionStartTime,
}: ProductDetail): Omit<ProductRegisterFormData, 'images'> & { images: string[] } => ({
  title,
  description,
  auctionStartTime,
  buyNowPrice: addPriceComma(buyNowPrice),
  auctionBidPrice: addPriceComma(getBidPrice(auctionStartPrice)),
  isAuction,
  auctionStartPrice: addPriceComma(auctionStartPrice),
  auctionDuration: getAuctionDuration(auctionStartTime, auctionEndTime),
  images: [],
});

const getProductRegisterBody = (data: ProductRegisterFormData & { productId: number }) => ({
  productId: data.productId,
  title: data.title,
  description: data.description,
  startTime: data.auctionStartTime,
  startPrice: Number(removePriceEtc(data.auctionStartPrice)),
  instant: Number(!data.isAuction),
  buyNowPrice: Number(removePriceEtc(data.buyNowPrice)),
  duration: data.auctionDuration,
  bidPrice: Number(removePriceEtc(data.auctionBidPrice)),
  categoryId: 2,
  images: [
    'https://t1.daumcdn.net/cfile/tistory/998E393359E4C42001',
    'https://t1.daumcdn.net/cfile/tistory/998E393359E4C42001',
  ],
});

export const updateProduct = async (formData: ProductRegisterFormData & { productId: number }) => {
  console.log(getProductRegisterBody(formData));
  await axiosInstance.patch(`/product/update`, getProductRegisterBody(formData));
};
