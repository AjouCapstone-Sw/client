import { setupWorker } from 'msw';

import { CategoryHandler } from './Category';
import { ProductDetailHandler } from './ProductDetail';
import { UserInfoHandler } from './User';

export const worker = setupWorker(...CategoryHandler, ...ProductDetailHandler, ...UserInfoHandler);
