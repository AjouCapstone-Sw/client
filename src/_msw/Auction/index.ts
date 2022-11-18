import { rest } from 'msw';

import { mockGetProductDataInAuction } from './handler';

export const AuctionHandler = [rest.get('/api/v1/auction/:productId', mockGetProductDataInAuction)];
