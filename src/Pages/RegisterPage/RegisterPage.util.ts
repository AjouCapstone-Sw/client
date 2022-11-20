import type { PostSignUpUser } from './RegisterPage.type';

import { axiosInstance } from '@Util/Axios';

export const getEmailValidation = async (email: string) => {
  const res = await axiosInstance.get(`/auth/emailValidation?email=${email}`);
  console.log(res.data);
  return res.data;
};

export const postSignUpUser = async (body: PostSignUpUser) => {
  const res = await axiosInstance.post('/user/signup', {
    ...body,
    name: '',
    phoneNum: '',
    address: '',
  });
  console.log(res.data);
  return res.data;
};
