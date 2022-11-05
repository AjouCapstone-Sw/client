import { Props } from '@MSW/type';

type MockCategoryListType = { [key: string]: any };
const MSW_CATEGORY_ITEM_SET: MockCategoryListType = {
  1: {
    category: '인기상품',
    itemList: [
      {
        productId: 1,
        productImage: '/asset/김영진.jpg',
        title: '김영진 피규어',
        buyNowPrice: 30000,
      },
      {
        productId: 2,
        productImage: '/asset/김영진.jpg',
        title: '김영진 피규어',
        buyNowPrice: 30000,
      },
      {
        productId: 3,
        productImage: '/asset/김영진.jpg',
        title: '김영진 피규어',
        buyNowPrice: 30000,
      },
      {
        productId: 4,
        productImage: '/asset/김영진.jpg',
        title: '김영진 피규어',
        buyNowPrice: 30000,
      },
      {
        productId: 9,
        productImage: '/asset/김영진.jpg',
        title: '김영진 피규어',
        buyNowPrice: 30000,
      },
      {
        productId: 10,
        productImage: '/asset/김영진.jpg',
        title: '김영진 피규어',
        buyNowPrice: 30000,
      },
      {
        productId: 11,
        productImage: '/asset/김영진.jpg',
        title: '김영진 피규어',
        buyNowPrice: 30000,
      },
      {
        productId: 12,
        productImage: '/asset/김영진.jpg',
        title: '김영진 피규어',
        buyNowPrice: 30000,
      },
    ],
  },
  2: {
    category: '의류',
    itemList: [
      {
        productId: 5,
        productImage: '/asset/김영진.jpg',
        title: '김영진 피규어',
        buyNowPrice: 30000,
      },
      {
        productId: 6,
        productImage: '/asset/김영진.jpg',
        title: '김영진 피규어',
        buyNowPrice: 30000,
      },
      {
        productId: 7,
        productImage: '/asset/김영진.jpg',
        title: '김영진 피규어',
        buyNowPrice: 30000,
      },
      {
        productId: 8,
        productImage: '/asset/김영진.jpg',
        title: '김영진 피규어',
        buyNowPrice: 30000,
      },
    ],
  },
};
export const mockGetCategoryItemList: Props = (req, res, ctx) => {
  const {
    params: { categoryId },
  } = req;
  return res(ctx.json(MSW_CATEGORY_ITEM_SET[categoryId as string]));
};
