import { rest } from 'msw';

import { mockGetProductDetail } from './handler';

export const ProductDetailHandler = [rest.get('/api/v1/product/:productId', mockGetProductDetail)];
