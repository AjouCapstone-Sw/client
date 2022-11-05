import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

export const useNowTime = () => {
  const [nowTime, setNowTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => setNowTime(dayjs()), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return nowTime;
};
