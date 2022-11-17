import { DeepPartial } from 'react-hook-form';

/* eslint-disable no-unused-vars */
export type ProductRegisterFormData = {
  images: FileList;
  title: string;
  content: string;
  buyNowPrice: string;
  isAuction: boolean;
  auctionStartPrice: string;
  auctionBidPrice: string;
  auctionStartTime: string;
  auctionDuration: string;
};

export type ProductRegisterFormProps = {
  onSubmit: (data: ProductRegisterFormData) => void;
  defaultValues: DeepPartial<ProductRegisterFormData>;
};
