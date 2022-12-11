import { ItemListCellType } from '@Pages/ListPage/ListPage.type';

export type MainItemSetProps = {
  categoryId: number;
  categoryName: string;
};

export type UseGetCategoryItemInfo = {
  categoryId: number;
};

export type CategoryItemSet = Pick<
  ItemListCellType,
  'productId' | 'productImage' | 'title' | 'buyNowPrice' | 'live' | 'like' | 'instance'
>;
