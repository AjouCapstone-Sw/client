import { useEffect, useState } from 'react';

import type { CategoryType } from './HomePage.type';
import { getCategoryList } from './HomePage.util';

export const useGetCategoryList = () => {
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  useEffect(() => {
    getCategoryList()
      .then(setCategoryList)
      .catch(() => setCategoryList([]));
  }, []);
  return categoryList;
};
