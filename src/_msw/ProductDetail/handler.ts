import { MSW_PRODUCT_DETAILS } from './const';

import { Props } from '@MSW/type';

export const mockGetProductDetail: Props = (req, res, ctx) => {
  const {
    params: { productId },
  } = req;
  return res(ctx.json(MSW_PRODUCT_DETAILS[productId as string]));
};
