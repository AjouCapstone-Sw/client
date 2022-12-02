import { axiosInstance } from '@Util/.';

export const getEmailValidation = async (email: string) => {
  const res = await axiosInstance.get(`/auth/emailValidation?email=${email}`);

  return res.data;
};
