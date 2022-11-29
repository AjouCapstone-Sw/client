import type { PostSignUpUser } from './RegisterPage.type';

import { axiosInstance } from '@Util/Axios';

export const postSignUpUser = async (body: PostSignUpUser) => {
  const res = await axiosInstance.post('/auth/signup', {
    ...body,
    name: '홍한솔',
    phoneNum: '',
  });

  return res.data;
};
