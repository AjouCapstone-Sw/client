/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
import { ProductRegisterFormData } from '@Components/ProductRegisterForm/ProductRegisterForm.type';
import { ProductDetail } from '@Pages/DetailPage';
import { axiosInstance } from '@Util/Axios';
import { addImages } from '@Util/Image';
import { addPriceComma, getAuctionDuration, getBidPrice, removePriceEtc } from '@Util/Product';

const convertURLtoFile = async (url: string) => {
  const image = new Image();
  image.src = url;
  if (!image) return;
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
  imageFiles.forEach((imageFile) => dataTransfer.items.add(imageFile!));
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
  category: { value: 3, label: '자동차' },
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
  category: { value: 3, label: '자동차' },
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
});

export const updateProduct = async (formData: ProductRegisterFormData & { productId: number }) => {
  const images = await addImages(formData.images);
  await axiosInstance.patch(`/product/update`, { ...getProductRegisterBody(formData), images });
};
