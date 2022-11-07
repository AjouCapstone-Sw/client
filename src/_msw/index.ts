import { setupWorker } from 'msw';

import { CategoryHandler } from './Category';
import { ProductDetailHandler } from './ProductDetail';

export const worker = setupWorker(...CategoryHandler, ...ProductDetailHandler);
