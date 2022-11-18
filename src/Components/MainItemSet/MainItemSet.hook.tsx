import { useEffect, useState } from 'react';

import { INIT_ITEM } from './MainItemSet.const';
import type { CategoryItemSet, UseGetCategoryItemInfo } from './MainItemSet.type';
import { getCategoryItemList } from './MainItemset.util';

export const useGetCategoryItemInfo = ({ categoryId }: UseGetCategoryItemInfo) => {
  const [categoryItemSetObj, setCategoryItemSetObj] = useState<CategoryItemSet[]>(INIT_ITEM);
  useEffect(() => {
    getCategoryItemList(categoryId)
      .then(setCategoryItemSetObj)
      .catch(() => setCategoryItemSetObj(INIT_ITEM));
  }, [categoryId]);

  return categoryItemSetObj;
};
