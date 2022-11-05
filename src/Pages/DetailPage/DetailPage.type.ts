import { ItemListCellType } from '@Pages/ListPage/ListPage.type';

export type ProductDetail = Omit<ItemListCellType, 'productImage'> & {
  seller: string;
  productImages: string[];
  description: string;
  auctionEndTime: string;
  sellReviewCount: number;
  auctionReviewCount: number;
};
