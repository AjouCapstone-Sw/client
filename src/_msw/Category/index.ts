import { rest } from 'msw';

import { mockGetCategoryItemList } from './handler';

export const CategoryHandler = [rest.get('/api/v1/category/:categoryId', mockGetCategoryItemList)];
