import { ReviewFormData } from './ReviewModal.type';

import { axiosInstance } from '@Util/Axios';
import { getUserIdByNickName } from '@Util/User';

export const createAuctionReview = async (data: ReviewFormData) => {
  const userId = await getUserIdByNickName(data.userId);
  await axiosInstance.post('/review/auction', {
    review: data.review,
    score: data.score ?? 0,
    userId,
  });
};

export const createBuyReview = async (data: ReviewFormData) => {
  const userId = await getUserIdByNickName(data.userId);
  await axiosInstance.post('/review/product', {
    ...data,
    score: data.score ?? 0,
    userId,
  });
};
