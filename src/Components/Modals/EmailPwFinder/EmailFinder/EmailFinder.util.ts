import { EmailFinderForm } from './EmailFinder.type';

import { axiosInstance } from '@Util/Axios';

export const emailFind = async (data: EmailFinderForm) => {
  const { data: email } = await axiosInstance.post('/auth/findEmail', data);

  return email;
};
