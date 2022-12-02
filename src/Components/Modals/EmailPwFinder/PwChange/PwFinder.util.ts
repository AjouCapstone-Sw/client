import { PwChangeForm } from './PwChange.type';

import { axiosInstance } from '@Util/Axios';

export const changePw = async (data: PwChangeForm) => {
  const { data: responseData } = await axiosInstance.post('/auth/pw', {
    email: data.email,
    password: data.password,
  });
  return responseData;
};
