import { useEffect, useState } from 'react';

import { AdminPageInfo, SellProduct } from './AdminPage.type';
import { getAdminPageInfo, getProductSellList } from './AdminPage.util';

export const useAdminPageInfos = () => {
  const [sellProducts, setSellProducts] = useState<SellProduct[]>([]);
  const [adminPageInfo, setAdminPageInfo] = useState<AdminPageInfo>({
    totalPrice: 0,
    commission: 0,
  });

  useEffect(() => {
    getProductSellList()
      .then(setSellProducts)
      .catch(() => setSellProducts([]));
  }, []);

  useEffect(() => {
    setAdminPageInfo(getAdminPageInfo(sellProducts));
  }, [sellProducts]);

  return { sellProducts, adminPageInfo };
};
