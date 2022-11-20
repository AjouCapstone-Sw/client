/* eslint-disable no-return-await */
import { axiosInstance } from '..';

export const addImages = async (imageFile: FileList) => {
  const promiseArr = [...imageFile].map((file) => {
    const formData = new FormData();
    formData.append('images', file);
    return axiosInstance.post('/upload', formData);
  });

  return (await Promise.all(promiseArr)).map(({ data }: { data: any }) => data);
};
