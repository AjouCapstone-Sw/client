import type { auctionProductData } from './WebRTCView.type';

import { AlertModalProps } from '@Components/Modals/Alert/AlertModal.type';

export const IN_PRODUCT_DATA_IN_AUCTION: auctionProductData = {
  productTitle: '',
  auctionStartPrice: 0,
  nowAskPrice: 0,
};

export const AUCTION_CHAT_SIZE_LIMIT = 20;

const INIT_AUCTION_TIME = '10:00';
export const INIT_AUCTION_INFO = {
  joinUserLength: 0,
  untilExitAuctionTime: INIT_AUCTION_TIME,
  nowAuctionPrice: 0,
  productLikeNum: 0,
};

export const ALERT_ASK_SUCCESS: AlertModalProps = {
  title: '성공',
  message: '호가에 성공하셨습니다 !',
  time: 3000,
  type: 'success',
};
