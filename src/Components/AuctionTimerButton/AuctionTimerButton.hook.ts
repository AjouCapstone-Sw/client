import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

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
