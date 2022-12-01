/* eslint-disable no-restricted-globals */
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import { getProductDetail } from '@Pages/DetailPage/DetailPage.util';
import { ItemListCellType } from '@Pages/ListPage/ListPage.type';

dayjs.extend(duration);

export const DATE_FORMAT = 'YYYY/MM/DD HH:mm';

const BID_PRICE_RATIO = 1 / 50;

const removePriceComma = (num: number | string) => String(num).replace(/,/g, '');

const removePriceUnit = (num: string | number) => String(num).replace(/원/g, '');

export const removePriceEtc = (num: string | number) => removePriceComma(removePriceUnit(num));

export const getBidPrice = (num: string | number) =>
  Math.floor(Number(removePriceEtc(num)) * BID_PRICE_RATIO);

export const addPriceComma = (num: number | string) => Number(removePriceEtc(num)).toLocaleString();

export const isPriceNaN = (price: string) => isNaN(Number(removePriceEtc(price)));

export const getTimeDiffFromNow = (nowTime: dayjs.Dayjs, baseTime: string) =>
  dayjs.duration(dayjs(baseTime).diff(dayjs(nowTime, DATE_FORMAT))).format('DD일 HH:mm:ss');

export const isNowTimeAhead = (nowTime: dayjs.Dayjs, baseTime: string) =>
  nowTime.isBefore(dayjs(baseTime, DATE_FORMAT));

export const isAuctionEnd = (nowTime: dayjs.Dayjs, endTime: string) =>
  nowTime.isAfter(dayjs(endTime, DATE_FORMAT));

export const getAuctionDuration = (startTime: string, endTime: string) =>
  dayjs
    .duration(dayjs(endTime).diff(dayjs(startTime)))
    .asMinutes()
    .toString();

export const convertProductsImagePropertyName = (
  products: (Omit<ItemListCellType, 'productImage'> & { image: string })[],
) =>
  products.map((product) => {
    const { image, ...rest } = product;
    return { productImage: image, ...rest };
  });

export const getProductThumbNail = async (productId: string | number) => {
  const { productImages } = await getProductDetail(Number(productId));
  return productImages[0];
};

export const getProductThumbNails = async (productIds: string[] | number[]) => {
  const promiseArray = productIds.map((productId) => getProductThumbNail(productId));
  const productThumbNails = await Promise.all(promiseArray);
  return productThumbNails;
};
