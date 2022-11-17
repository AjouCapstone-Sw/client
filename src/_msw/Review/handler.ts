import { MSW_AUCTION_REVIEW, MSW_PRODUCT_REVIEW } from './const';

import { Props } from '@MSW/type';

export const mockGetMyAuctionReview: Props = (req, res, ctx) => res(ctx.json(MSW_AUCTION_REVIEW));
export const mockGetOtherAuctionReview: Props = (req, res, ctx) =>
  res(ctx.json(MSW_AUCTION_REVIEW));
export const mockGetMyProductReview: Props = (req, res, ctx) => res(ctx.json(MSW_PRODUCT_REVIEW));
export const mockGetOtherProductReview: Props = (req, res, ctx) =>
  res(ctx.json(MSW_PRODUCT_REVIEW));
