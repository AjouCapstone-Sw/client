import { useEffect, useState } from 'react';

import { INIT_ITEM } from './MainItemSet.const';
import type { CategoryItemSetList, UseGetCategoryItemInfo } from './MainItemSet.type';
import { getCategoryItemList } from './MainItemset.util';

export const useGetCategoryItemInfo = ({ categoryId }: UseGetCategoryItemInfo) => {
  const [categoryItemSetObj, setCategoryItemSetObj] = useState<CategoryItemSetList>(INIT_ITEM);
  useEffect(() => {
    getCategoryItemList(categoryId)
      .then(setCategoryItemSetObj)
      .catch((e) => setCategoryItemSetObj(INIT_ITEM));
  }, [categoryId]);

  return categoryItemSetObj;
};
