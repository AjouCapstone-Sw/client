import type { PostSignUpUser } from './RegisterPage.type';

import { axiosInstance } from '@Util/Axios';

export const getEmailValidation = async (email: string) => {
  const res = await axiosInstance.get(`/auth/emailValidation?email=${email}`);
  return res.data;
};

export const postSignUpUser = async (body: PostSignUpUser) => {
  const res = await axiosInstance.post('/auth/signup', {
    ...body,
    name: '홍한솔',
    phoneNum: '',
  });

  return res.data;
};
