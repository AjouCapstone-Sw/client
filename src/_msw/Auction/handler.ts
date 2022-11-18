import { Props } from '@MSW/type';

type MockProductDataType = { [key: string]: any };
const MSW_PRODUCT_DATA_IN_AUCTION: MockProductDataType = {
  1: {
    productTitle: '김영진 피규어',
    auctionStartPrice: 1500,
    nowAskPrice: 500,
  },
  2: {
    productTitle: '김영진 피규어',
    auctionStartPrice: 1500,
    nowAskPrice: 500,
  },
  3: {
    productTitle: '김영진 피규어',
    auctionStartPrice: 1500,
    nowAskPrice: 500,
  },
  4: {
    productTitle: '김영진 피규어',
    auctionStartPrice: 1500,
    nowAskPrice: 500,
  },
  5: {
    productTitle: '김영진 피규어',
    auctionStartPrice: 1500,
    nowAskPrice: 500,
  },
};

export const mockGetProductDataInAuction: Props = (req, res, ctx) => {
  const {
    params: { productId },
  } = req;
  return res(ctx.json(MSW_PRODUCT_DATA_IN_AUCTION[productId as string]));
};
