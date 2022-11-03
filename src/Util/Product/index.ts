import moment from 'moment';

const DATE_FORMAT = 'YYYY/MM/DD HH:mm';

export const addPriceComma = (num: number) => num.toLocaleString();

export const getTimeDiffFromNow = (nowTime: moment.Moment, baseTime: string) =>
  moment(baseTime, DATE_FORMAT).isSame(moment(nowTime, DATE_FORMAT), 'day')
    ? moment
        .utc(moment(baseTime, DATE_FORMAT).diff(moment(nowTime, DATE_FORMAT)))
        .format('00[일] HH:mm:ss')
    : moment
        .utc(moment(baseTime, DATE_FORMAT).diff(moment(nowTime, DATE_FORMAT)))
        .subtract(1, 'day')
        .format('DD[일] HH:mm:ss');

export const isNowTimeAhead = (nowTime: moment.Moment, baseTime: string) =>
  nowTime.isSameOrBefore(moment(baseTime, DATE_FORMAT));

export const isAuctionEnd = (nowTime: moment.Moment, endTime: string) =>
  nowTime.isSameOrAfter(moment(endTime, DATE_FORMAT));
