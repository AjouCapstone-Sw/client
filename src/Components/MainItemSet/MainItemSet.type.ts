import { ItemListCellType } from '@Pages/ListPage/ListPage.type';

export type MainItemSetProps = {
  categoryId: number;
};

export type UseGetCategoryItemInfo = {
  categoryId: number;
};

export type CategoryItemSet = Pick<
  ItemListCellType,
  'productId' | 'productImage' | 'title' | 'buyNowPrice' | 'live'
>;
export type CategoryItemSetList = {
  category: string;
  itemList: CategoryItemSet[];
};
