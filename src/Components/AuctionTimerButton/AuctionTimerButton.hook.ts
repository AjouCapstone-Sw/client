import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useProductId } from '@Hook/useProductId';
import { isAuctionEnd } from '@Util/.';

export const useNowTime = (endTime: string) => {
  const [nowTime, setNowTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = dayjs();
      if (isAuctionEnd(newTime, endTime)) clearInterval(timer);
      else setNowTime(newTime);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [endTime]);

  return nowTime;
};

export const useAuctionEnter = () => {
  const productId = useProductId();
  const navigator = useNavigate();
  const auctionEnter = () => navigator(`/live/${productId}`);
  return auctionEnter;
};
