import type { auctionProductData } from './WebRTCView.type';

export const AUCTION_HEADER_IMG = [
  {
    id: 1,
    src: '/asset/Auction/Sound.svg',
    alt: '음소거',
  },
  {
    id: 2,
    src: '/asset/Auction/Exit.svg',
    alt: '나가기',
  },
];

export const IN_PRODUCT_DATA_IN_AUCTION: auctionProductData = {
  productTitle: '',
  auctionStartPrice: 0,
  nowAskPrice: 0,
};
