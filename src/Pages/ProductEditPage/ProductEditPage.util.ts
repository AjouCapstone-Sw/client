/* eslint-disable no-unused-vars */
import { ProductRegisterFormData } from '@Components/ProductRegisterForm/ProductRegisterForm.type';
import { ProductDetail } from '@Pages/DetailPage';
import { addPriceComma, getAuctionDuration, getBidPrice } from '@Util/Product';

const convertURLtoFile = async (url: string) => {
  const response = await fetch(url);
  const data = await response.blob();
  const ext = url.split('.').pop();
  const filename = url.split('/').pop();
  const metadata = { type: `image/${ext}` };
  return new File([data], filename!, metadata);
};

const getImageFiles = async (images: string[]) => {
  const fileReqList = images.map((url) => convertURLtoFile(url));
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
  content: description,
  auctionStartTime,
  buyNowPrice: addPriceComma(buyNowPrice),
  auctionBidPrice: addPriceComma(getBidPrice(auctionStartPrice)),
  isAuction,
  auctionStartPrice: addPriceComma(auctionStartPrice),
  auctionDuration: getAuctionDuration(auctionStartTime, auctionEndTime),
  images: await makeImageFileList(productImages),
});