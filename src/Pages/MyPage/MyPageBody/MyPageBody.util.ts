import type { auctionReviewType, productReviewType } from '../MyPage.type';

import { AuctionReview, ItemListCell, ProductReview } from '@Components/.';
import type { ItemListCellType } from '@Pages/ListPage/ListPage.type';

const isItemListCell = (item: any) => (item as ItemListCellType).buyNowPrice !== undefined;
const isProductReview = (item: any) => (item as productReviewType).productId !== undefined;
const isAuctionReview = (item: any) => (item as auctionReviewType).score !== undefined;

export const getMyPageBodyChildren = (item: any) => {
  if (isItemListCell(item)) return ItemListCell;
  if (isProductReview(item)) return ProductReview;
  if (isAuctionReview(item)) return AuctionReview;
  return ItemListCell;
};
