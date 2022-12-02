import { axiosInstance } from '..';

export const getUserIdByNickName = async (nickName: string) => {
  const { data } = await axiosInstance.get(`/user/getId/${nickName}`);
  return data;
};
