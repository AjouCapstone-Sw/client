import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const DATE_FORMAT = 'YYYY/MM/DD HH:mm';

const BID_PRICE_RATIO = 1 / 50;

const removePriceComma = (num: number | string) => String(num).replace(/,/g, '');

const removePriceUnit = (num: string | number) => String(num).replace(/원/g, '');

export const removePriceEtc = (num: string | number) => removePriceComma(removePriceUnit(num));

export const getBidPrice = (num: string | number) =>
  Math.floor(Number(removePriceEtc(num)) * BID_PRICE_RATIO);

export const addPriceComma = (num: number | string) => Number(removePriceEtc(num)).toLocaleString();

export const getTimeDiffFromNow = (nowTime: dayjs.Dayjs, baseTime: string) =>
  dayjs.duration(dayjs(baseTime).diff(dayjs(nowTime, DATE_FORMAT))).format('DD일 HH:mm:ss');

export const isNowTimeAhead = (nowTime: dayjs.Dayjs, baseTime: string) =>
  nowTime.isBefore(dayjs(baseTime, DATE_FORMAT));

export const isAuctionEnd = (nowTime: dayjs.Dayjs, endTime: string) =>
  nowTime.isAfter(dayjs(endTime, DATE_FORMAT));
