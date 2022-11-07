import { useEffect, useState } from 'react';

import { getCategoryList } from './HomePage.util';

export const useGetCategoryList = () => {
  const [categoryList, setCategoryList] = useState<number[]>([]);
  useEffect(() => {
    getCategoryList()
      .then(setCategoryList)
      .catch(() => setCategoryList([]));
  }, []);
  return categoryList;
};
