import { AddressRegisterForm } from './AddressRegisterPage.type';

import { axiosInstance } from '@Util/Axios';
import { getUserId } from '@Util/LocalStorage';
import { getUserIdByNickName } from '@Util/User';

export const updateAddress = async (data: AddressRegisterForm) => {
  const userId = await getUserIdByNickName(getUserId()!);
  await axiosInstance.patch('/user/registerAddress', { ...data, userId });
};
