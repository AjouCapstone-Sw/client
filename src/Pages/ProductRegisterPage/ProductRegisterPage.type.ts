export type ProductRegisterForm = {
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
