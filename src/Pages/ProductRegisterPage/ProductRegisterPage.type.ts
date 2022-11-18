export type ProductRegisterForm = {
  images: FileList;
  title: string;
  description: string;
  startAt: string; // 무슨 용도?
  startPrice: string; // 무슨 용도?
  instant: boolean; // 무슨 용도?
  buyNowPrice: string;
  isAuction: boolean;
  auctionStartPrice: string;
  auctionBidPrice: string;
  auctionStartTime: string;
  auctionDuration: string;
};

export type MakeNotAuctionProduct = Pick<
  ProductRegisterForm,
  'buyNowPrice' | 'description' | 'images' | 'isAuction' | 'title'
>;

export type MakeAuctionProduct = Omit<ProductRegisterForm, 'startAt' | 'startPrice' | 'instant'>;

export type MakeProduct =
  | Omit<ProductRegisterForm, 'startAt' | 'startPrice' | 'instant'>
  | {
      auctionStartTime: string | null;
      auctionStartPrice: string | null;
      auctionBidPrice: string | null;
      auctionDuration: string | null;
    };
