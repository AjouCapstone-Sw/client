import { useNavigate } from 'react-router-dom';

import { PwChangeForm } from './PwChange.type';
import { changePw } from './PwFinder.util';

export const useOnSubmit = () => {
  const navigator = useNavigate();
  const onSubmit = async (data: PwChangeForm) => {
    const res = await changePw(data);
    if (res) navigator('/login');
  };
  return onSubmit;
};
