import { useNavigate } from 'react-router-dom';

import { useAdminPageInfos } from './AdminPage.hook';

import { getUserId } from '@Util/LocalStorage';

export const Adminpage = () => {
  const userNickname = getUserId();
  const navigator = useNavigate();
  if (userNickname !== 'admin') navigator('/');
  const { commission, totalPrice, userCount } = useAdminPageInfos();
  return (
    <div>
      <p>총 수익:${commission}</p>
      <p>총 판매 금액:${totalPrice}</p>
      <p>총 사용자 수:${userCount}</p>
    </div>
  );
};
