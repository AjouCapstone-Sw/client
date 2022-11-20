import { useEffect, useState } from 'react';

import { UseGetWebRtcContainer } from './LivePage.type';

import { Buyer } from '@Components/Buyer';
import { Seller } from '@Components/Seller';
import { getProductDetail } from '@Pages/DetailPage/DetailPage.util';
import { getUserId } from '@Util/LocalStorage';

export const useGetWebRtcContainer = ({ productId }: UseGetWebRtcContainer) => {
  const [seller, setSeller] = useState('');
  const [loading, setLoading] = useState(false);
  const userId = getUserId();
  useEffect(() => {
    getProductDetail(Number(productId)).then((res) => {
      setSeller(res.seller);
      setLoading(true);
    });
  }, [productId]);
  return { loading, Container: userId === seller ? Seller : Buyer };
};
