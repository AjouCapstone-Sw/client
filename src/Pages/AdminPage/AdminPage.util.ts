import { axiosInstance } from '@Util/Axios';

export const getAdminPageInfo = async () => {
  const { data } = await axiosInstance.post('/auth/login', {
    email: 'admin@admin',
    password: 'qwer1234!',
  });
  return data;
};
