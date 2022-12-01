import { axiosInstance } from '@Util/Axios';

export const postChargePoint = async (userId: number, point: number) => {
  await axiosInstance.post(`/point/charge`, { userId, point });
};
