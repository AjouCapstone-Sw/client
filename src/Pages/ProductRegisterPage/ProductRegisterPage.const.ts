import dayjs from 'dayjs';

import { DATE_FORMAT } from '@Util/Product';

export const FORM_DEFAULT_VALUE = {
  buyNowPrice: '0',
  isAuction: false,
  auctionStartPrice: '0',
  auctionBidPrice: '0',
  auctionDuration: '0',
  auctionStartTime: dayjs().format(DATE_FORMAT),
};
