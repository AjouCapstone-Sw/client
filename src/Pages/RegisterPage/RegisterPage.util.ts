import { axiosInstance } from '@Util/Axios';

export const getEmailValidation = async (email: string) => {
  const res = await axiosInstance.get(`/auth/emailValidation?${email}`);
  console.log(res.data);
  return res.data;
};

export const postSignUpUser = async (body: any) => {
  const res = await axiosInstance.post('/user/signup', body);
  console.log(res.data);
  return res.data;
};
