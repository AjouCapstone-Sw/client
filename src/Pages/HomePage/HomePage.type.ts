import { HomeLiveItemProps } from '@Components/HomeLiveItem/HomeLiveItem.type';
import { ItemListCellType } from '@Pages/ListPage/ListPage.type';

export type CategoryType = {
  categoryId: number;
  categoryName: string;
};

export type LiveItemType = ItemListCellType;

export type HomeLiveItem = HomeLiveItemProps;
