import { rest } from 'msw';

import { mockGetCategoryItemList, mockGetCategoryList } from './handler';

export const CategoryHandler = [
  rest.get('/api/v1/category/:categoryId', mockGetCategoryItemList),
  rest.get('/api/v1/category', mockGetCategoryList),
];
