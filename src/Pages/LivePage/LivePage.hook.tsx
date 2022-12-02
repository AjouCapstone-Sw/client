import { useEffect, useState } from 'react';

import { UseGetWebRtcContainer } from './LivePage.type';

import { Buyer } from '@Components/Buyer';
import { Seller } from '@Components/Seller';
import { getProductDetail } from '@Pages/DetailPage/DetailPage.util';
import { getId, getUserId } from '@Util/LocalStorage';

export const useGetWebRtcContainer = ({ productId }: UseGetWebRtcContainer) => {
  const [seller, setSeller] = useState('');
  const [loading, setLoading] = useState(false);
  const userId = Number(getId()!);
  const nickName = getUserId()!;

  useEffect(() => {
    getProductDetail(Number(productId), userId).then((res) => {
      setSeller(res.seller);
      setLoading(true);
    });
  }, [productId]);
  return { loading, Container: nickName === seller ? Seller : Buyer };
};
