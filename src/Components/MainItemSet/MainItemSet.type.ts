export type MainItemSetProps = {
  categoryId: number;
};

export type UseGetCategoryItemInfo = {
  categoryId: number;
};

export type CategoryItemSet = {
  productId: number;
  productImage: string;
  title: string;
  buyNowPrice: number;
};
export type CategoryItemSetList = {
  category: string;
  itemList: CategoryItemSet[];
};
