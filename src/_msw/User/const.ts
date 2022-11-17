type MockUserInfo = { [key: string]: any };

const DUMMY_LIKE_LIST = [
  {
    productId: 1,
    title: '김영진 피규어',
    buyNowPrice: 5000,
    auctionStartPrice: 3000,
    auctionStartTime: '2022-10-10 22:30',
    productImage: '/asset/김영진.jpg',
    like: false,
    live: false,
  },
];
const DUMMY_BUY_LIST = [
  {
    productId: 1,
    title: '김영진 피규어',
    buyNowPrice: 5000,
    auctionStartPrice: 3000,
    auctionStartTime: '2022-10-10 22:30',
    productImage: '/asset/김영진.jpg',
    like: false,
    live: false,
  },
];

const DUMMY_DATA = {
  nickName: 'hansoly',
  profileImage: '/asset/김영진.jpg',
  point: 5000,
  sellList: [
    {
      productId: 1,
      title: '김영진 피규어',
      buyNowPrice: 5000,
      auctionStartPrice: 3000,
      auctionStartTime: '2022-10-10 22:30',
      productImage: '/asset/김영진.jpg',
      like: false,
      live: false,
    },
  ],
};
export const MSW_USER_INFO: MockUserInfo = {
  hansoly: DUMMY_DATA,
};
export const MSW_MY_INFO: MockUserInfo = {
  ...DUMMY_DATA,
  buyList: DUMMY_BUY_LIST,
  likeList: DUMMY_LIKE_LIST,
};
