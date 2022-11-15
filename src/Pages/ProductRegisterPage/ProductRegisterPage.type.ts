export type ProductRegisterForm = {
  images: FileList;
  title: string;
  content: string;
  startAt: string;
  startPrice: string;
  instant: boolean;
  buyNowPrice: string;
  isAuction: boolean;
  auctionStartPrice: string;
  auctionBidPrice: string;
  auctionStartTime: string;
  auctionDuration: string;
};
