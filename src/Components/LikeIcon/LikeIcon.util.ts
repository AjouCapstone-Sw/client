import { LikePostData } from './LikeIcon.type';

import { axiosInstance } from '@Util/.';

export const postProductLike = async (data: LikePostData) => {
  const { data: responseData } = await axiosInstance.post('/interest/create', data);
  return responseData;
};

export const deleteProductLike = async (data: LikePostData) => {
  const { data: responseData } = await axiosInstance.delete('/interest/delete', { data });
  return responseData;
};
