import { useState } from 'react';

import { deleteProductLike, postProductLike } from './LikeIcon.util';

import { getId } from '@Util/.';

export const useLikeIcon = (like: boolean, productId: string | number) => {
  const [isLike, setIsLike] = useState<boolean>(like);
  const userId = getId()!;

  const handleLike = async () => {
    let res;
    if (isLike) {
      res = await deleteProductLike({ userId: Number(userId), productId: Number(productId) });
    } else {
      res = await postProductLike({ userId: Number(userId), productId: Number(productId) });
    }
    if (res) setIsLike((prev) => !prev);
  };

  return { handleLike, isLike };
};
