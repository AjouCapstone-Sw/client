import { AlertModalProps } from '@Components/Modals/Alert/AlertModal.type';

export const ALERT_BUY_SUCCESS: AlertModalProps = {
  title: '낙찰',
  message: '경매에 낙찰되셨습니다!',
  time: 3000,
  type: 'success',
};

export const FORCE_AUCTION_EXIT: AlertModalProps = {
  title: '공지',
  message: '판매자에 의해 경매가 종료되었습니다!',
  time: 3000,
  type: 'success',
};
export const DONT_OPEN_AUCTION: AlertModalProps = {
  title: '공지',
  message: '판매자가 해당 경매를 시작하지 않았습니다.',
  time: 3000,
  type: 'success',
};
