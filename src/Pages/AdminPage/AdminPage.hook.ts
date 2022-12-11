import { useEffect, useState } from 'react';

import { AdminPageInfo } from './AdminPage.type';
import { getAdminPageInfo } from './AdminPage.util';

export const useAdminPageInfos = () => {
  const [adminPageInfo, setAdminPageInfo] = useState<AdminPageInfo>({
    userCount: 0,
    totalPrice: 0,
    commission: 0,
  });
  useEffect(() => {
    getAdminPageInfo().then(setAdminPageInfo);
  }, []);
  return adminPageInfo;
};
