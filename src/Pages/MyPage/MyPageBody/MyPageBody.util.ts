import type { auctionReviewType, PointHistoryType, productReviewType } from '../MyPage.type';

import { AuctionReview, ItemListCell, PointHistory, ProductReview } from '@Components/.';
import type { ItemListCellType } from '@Pages/ListPage/ListPage.type';

const isItemListCell = (item: any) => (item as ItemListCellType).buyNowPrice !== undefined;
const isProductReview = (item: any) => (item as productReviewType).productId !== undefined;
const isAuctionReview = (item: any) => (item as auctionReviewType).score !== undefined;
const isPointHistroy = (item: any) => (item as PointHistoryType).point !== undefined;

export const getMyPageBodyChildren = (item: any) => {
  if (isItemListCell(item)) return ItemListCell;
  if (isProductReview(item)) return ProductReview;
  if (isAuctionReview(item)) return AuctionReview;
  if (isPointHistroy(item)) return PointHistory;
  return ItemListCell;
};
