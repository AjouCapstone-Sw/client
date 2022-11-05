import moment from 'moment';
import { useState, useEffect } from 'react';

export const useNowTime = () => {
  const [nowTime, setNowTime] = useState(moment());

  useEffect(() => {
    const timer = setInterval(() => setNowTime(moment()), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return nowTime;
};
