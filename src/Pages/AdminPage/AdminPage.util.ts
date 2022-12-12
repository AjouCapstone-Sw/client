import { SellProduct } from './AdminPage.type';

import { axiosInstance } from '@Util/Axios';

export const getProductSellList = async () => {
  const { data } = await axiosInstance.post('/auth/login', {
    email: 'admin@admin',
    password: 'qwer1234!',
  });
  return data;
};

export const getAdminPageInfo = (sellProducts: SellProduct[]) =>
  sellProducts.reduce(
    (acc, sellProduct) => ({
      totalPrice: sellProduct.price + acc.totalPrice,
      commission: acc.commission + sellProduct.commission,
    }),
    {
      totalPrice: 0,
      commission: 0,
    },
  );
