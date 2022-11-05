import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const DATE_FORMAT = 'YYYY/MM/DD HH:mm';
export const addPriceComma = (num: number) => num.toLocaleString();

export const getTimeDiffFromNow = (nowTime: dayjs.Dayjs, baseTime: string) =>
  dayjs.duration(dayjs(baseTime).diff(dayjs(nowTime, DATE_FORMAT))).format('DD일 HH:mm:ss');

export const isNowTimeAhead = (nowTime: dayjs.Dayjs, baseTime: string) =>
  nowTime.isBefore(dayjs(baseTime, DATE_FORMAT));

export const isAuctionEnd = (nowTime: dayjs.Dayjs, endTime: string) =>
  nowTime.isAfter(dayjs(endTime, DATE_FORMAT));
