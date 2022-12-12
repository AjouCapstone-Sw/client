import { useNavigate } from 'react-router-dom';

import { SELL_PRODUCT_HEADER } from './AdminPage.const';
import { useAdminPageInfos } from './AdminPage.hook';
import AdminPageStyle from './AdminPage.style';

import { SellProduct } from '@Components/SellProduct';
import { addPriceComma } from '@Util/index';
import { getUserId } from '@Util/LocalStorage';

export const Adminpage = () => {
  const userNickname = getUserId();
  const navigator = useNavigate();
  if (userNickname !== 'admin') navigator('/');
  const { sellProducts, adminPageInfo } = useAdminPageInfos();

  return (
    <AdminPageStyle.Container>
      <AdminPageStyle.InfoHeader>
        <p>
          총 수수료 수익: <strong>{addPriceComma(adminPageInfo.commission)}원</strong>
        </p>
        <p>
          총 판매 금액: <strong>{addPriceComma(adminPageInfo.totalPrice)}원</strong>
        </p>
      </AdminPageStyle.InfoHeader>
      <AdminPageStyle.SellProductContainer>
        <AdminPageStyle.SellProductHeader>
          {SELL_PRODUCT_HEADER.map((head) => (
            <p key={head}>{head}</p>
          ))}
        </AdminPageStyle.SellProductHeader>
        {sellProducts.map((sellProduct) => (
          <SellProduct
            key={sellProduct.title}
            {...sellProduct}
          />
        ))}
      </AdminPageStyle.SellProductContainer>
    </AdminPageStyle.Container>
  );
};
