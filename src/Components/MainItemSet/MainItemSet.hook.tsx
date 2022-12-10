import { useEffect, useState } from 'react';

import type { CategoryItemSet, UseGetCategoryItemInfo } from './MainItemSet.type';
import { getCategoryItemList } from './MainItemset.util';

export const useGetCategoryItemInfo = ({ categoryId }: UseGetCategoryItemInfo) => {
  const [categoryItemSetObj, setCategoryItemSetObj] = useState<CategoryItemSet[]>([]);
  useEffect(() => {
    getCategoryItemList(categoryId)
      .then(setCategoryItemSetObj)
      .catch(() => setCategoryItemSetObj([]));
  }, [categoryId]);

  return categoryItemSetObj;
};
