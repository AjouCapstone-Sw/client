import { ReactNode } from 'react';

import { useAuctionEnd, useGetVideoStreamBuyer } from './Buyer.hook';

import { Video } from '@Components/.';

export const Buyer = ({ children, productId }: { children: ReactNode; productId: number }) => {
  const videoRef = useGetVideoStreamBuyer({ productId });
  useAuctionEnd();
  return (
    <div>
      <Video
        videoRef={videoRef}
        id='buyer'
      />
      {children}
    </div>
  );
};
