import { rest } from 'msw';

import {
  mockGetMyAuctionReview,
  mockGetOtherAuctionReview,
  mockGetMyProductReview,
  mockGetOtherProductReview,
} from './handler';

export const ReviewHandler = [
  rest.get('/api/v1/review/auction', mockGetMyAuctionReview),
  rest.get('/api/v1/review/auction/:nickName', mockGetOtherAuctionReview),
  rest.get('/api/v1/review/product', mockGetMyProductReview),
  rest.get('/api/v1/review/product/:nickName', mockGetOtherProductReview),
];
