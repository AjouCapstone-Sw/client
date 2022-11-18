import { MakeAuctionProduct, MakeNotAuctionProduct, MakeProduct } from './ProductRegisterPage.type';

import { axiosInstance } from '@Util/Axios';

export const getRemovedFileList = (fileList: FileList, removeIndex: number) => {
  const dataTransfer = new DataTransfer();
  const filteredFiles = [...fileList].filter((_item, fileIndex) => removeIndex !== fileIndex);
  filteredFiles.forEach((file) => dataTransfer.items.add(file));
  return dataTransfer.files;
};

export const makeNotAuctionProduct = ({
  buyNowPrice,
  description,
  images,
  isAuction,
  title,
}: MakeNotAuctionProduct): MakeProduct => ({
  buyNowPrice,
  description,
  images,
  isAuction,
  title,
  auctionStartPrice: null,
  auctionDuration: null,
  auctionStartTime: null,
  auctionBidPrice: null,
});

export const makeAuctionProduct = ({
  buyNowPrice,
  description,
  images,
  isAuction,
  title,
  auctionStartPrice,
  auctionDuration,
  auctionStartTime,
  auctionBidPrice,
}: MakeAuctionProduct): MakeProduct => ({
  buyNowPrice,
  description,
  images,
  isAuction,
  title,
  auctionStartPrice,
  auctionDuration,
  auctionStartTime,
  auctionBidPrice,
});

export const makeProduct = async (body: MakeProduct) => {
  const res = await axiosInstance.post('/product', body);
  console.log(res.data);
  return res.data;
};
