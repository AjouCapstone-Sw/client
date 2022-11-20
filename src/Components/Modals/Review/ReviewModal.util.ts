import { ReviewFormData } from './ReviewModal.type';

import { axiosInstance } from '@Util/Axios';
import { getUserIdByNickName } from '@Util/User';

export const createAuctionReview = async (data: ReviewFormData) => {
  const userId = await getUserIdByNickName(data.userId);
  const res = await axiosInstance.post('/review/auction', {
    review: data.review,
    score: data.score ?? 5,
    userId,
  });
  console.log(res);
};

export const createBuyReview = async (data: ReviewFormData) => {
  const userId = await getUserIdByNickName(data.userId);
  const res = await axiosInstance.post('/review/product', {
    ...data,
    score: data.score ?? 5,
    userId,
  });
  console.log(res);
};
