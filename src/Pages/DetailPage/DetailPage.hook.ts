import moment from 'moment';
import { useEffect, useState } from 'react';

import { ProductDetail } from './DetailPage.type';

const dummy: ProductDetail[] = [
  {
    id: 1,
    title: '김영진 피규어',
    buyNowPrice: 1000,
    auctionStartPrice: 500,
    auctionStartTime: '2022-11-04 04:00',
    auctionEndTime: '2022/11/04 04:50',
    productImages: ['/asset/김영진.jpg', '/asset/김영진.jpg', '/asset/김영진.jpg'],
    seller: 'Noelsky',
    description: '김영진 피규어 2022 한정판 판매합니다 !',
    sellReviewCount: 1,
    auctionReviewCount: 10,
  },
  {
    id: 2,
    title: '김영진 피규어',
    buyNowPrice: 1000,
    auctionStartPrice: 500,
    auctionStartTime: '2022/11/11 17:30',
    auctionEndTime: '2022/11/11 18:00',
    productImages: ['/asset/김영진.jpg', '/asset/김영진.jpg', '/asset/김영진.jpg'],
    seller: 'Noelsky',
    description: '김영진 피규어 2022 한정판 판매합니다 !',
    sellReviewCount: 1,
    auctionReviewCount: 10,
  },
  {
    id: 3,
    title: '김영진 피규어',
    buyNowPrice: 1000,
    auctionStartPrice: 500,
    auctionStartTime: '2022/11/11 17:30',
    auctionEndTime: '2022/11/11 18:00',
    productImages: ['/asset/김영진.jpg', '/asset/김영진.jpg', '/asset/김영진.jpg'],
    seller: 'Noelsky',
    description: '김영진 피규어 2022 한정판 판매합니다 !',
    sellReviewCount: 1,
    auctionReviewCount: 10,
  },
  {
    id: 4,
    title: '김영진 피규어',
    buyNowPrice: 1000,
    auctionStartPrice: 500,
    auctionStartTime: '2022/11/11 17:30',
    auctionEndTime: '2022/11/11 18:00',
    productImages: ['/asset/김영진.jpg', '/asset/김영진.jpg', '/asset/김영진.jpg'],
    seller: 'Noelsky',
    description: '김영진 피규어 2022 한정판 판매합니다 !',
    sellReviewCount: 1,
    auctionReviewCount: 10,
  },
];

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

export const useGetProductDetail = (productId: number) => {
  const [productDetails] = useState<ProductDetail[]>([...dummy]);
  const productDetail = productDetails.filter(({ id }) => id === productId);
  if (!productDetail) {
    console.log('not fount');
  }
  return productDetail[0];
};
