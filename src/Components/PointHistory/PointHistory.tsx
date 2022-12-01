import PointHistoryStyle from './PointHistory.style';

import { PointHistoryType } from '@Pages/MyPage/MyPage.type';

export const PointHistory = ({ createdAt, point }: PointHistoryType) => {
  const isCharge = point > 0;
  return (
    <PointHistoryStyle.Container>
      <p className={isCharge ? 'charge' : 'use'}>
        {isCharge ? '충전 ' : '사용 '} {point}
      </p>

      {createdAt}
    </PointHistoryStyle.Container>
  );
};
