import { DeepPartial } from 'react-hook-form';

/* eslint-disable no-unused-vars */
export type ProductRegisterFormData = {
  images: FileList;
  title: string;
  description: string;
  buyNowPrice: string;
  isAuction: boolean;
  auctionStartPrice: string;
  auctionBidPrice: string;
  auctionStartTime: string;
  auctionDuration: string;
  category: { value: number; label: string };
};

export type ProductRegisterFormProps = {
  onSubmit: (data: ProductRegisterFormData) => void;
  defaultValues: DeepPartial<ProductRegisterFormData>;
};

export type MakeNotAuctionProduct = Pick<
  ProductRegisterFormData,
  'buyNowPrice' | 'description' | 'images' | 'isAuction' | 'title'
>;

export type MakeAuctionProduct = Omit<
  ProductRegisterFormData,
  'startAt' | 'startPrice' | 'instant'
>;

export type MakeProduct =
  | Omit<ProductRegisterFormData, 'startAt' | 'startPrice' | 'instant'>
  | {
      auctionStartTime: string | null;
      auctionStartPrice: string | null;
      auctionBidPrice: string | null;
      auctionDuration: string | null;
    };
