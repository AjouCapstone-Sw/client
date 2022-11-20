import { AddressRegisterForm } from './AddressRegisterPage.type';

import { axiosInstance } from '@Util/Axios';

export const updateAddress = async (data: AddressRegisterForm) => {
  await axiosInstance.patch('/user/registerAddress', data);
};
