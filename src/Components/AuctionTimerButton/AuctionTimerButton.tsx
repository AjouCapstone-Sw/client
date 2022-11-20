import { useAuctionEnter, useNowTime } from './AuctionTimerButton.hook';

import { Button } from '@Components/.';
import { getTimeDiffFromNow, isNowTimeAhead, isAuctionEnd } from '@Util/.';

export const AuctionTimerButton = ({
  startTime,
  endTime,
}: {
  startTime: string;
  endTime: string;
}) => {
  const nowTime = useNowTime(endTime);
  const timeDiff = getTimeDiffFromNow(nowTime, startTime);
  const isAuctionProceed = !isNowTimeAhead(nowTime, startTime) && !isAuctionEnd(nowTime, endTime);
  const auctionEnter = useAuctionEnter();

  return (
    <Button
      disabled={!isAuctionProceed}
      onClick={auctionEnter}
    >
      {isNowTimeAhead(nowTime, startTime) && <span> 경매 참여 {timeDiff}</span>}
      {isAuctionProceed && <span>경매 참여</span>}
      {isAuctionEnd(nowTime, endTime) && <span>경매 종료</span>}
    </Button>
  );
};
