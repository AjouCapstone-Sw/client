import type { PostLogin } from './LoginPage.type';

import { axiosInstance } from '@Util/Axios';

export const postLogin = async (body: PostLogin) => {
  const res = await axiosInstance.post('/auth/login', body);
  console.log(res.data);
  return res.data;
};
