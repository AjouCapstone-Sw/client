import { ReactNode } from 'react';

import { useAuctionEnd, useGetVideoStreamSeller } from './Seller.hook';

import { Video } from '@Components/.';

export const Seller = ({ children, productId }: { children: ReactNode; productId: number }) => {
  const videoRef = useGetVideoStreamSeller({ productId });
  useAuctionEnd();
  return (
    <div>
      <Video videoRef={videoRef} />
      {children}
    </div>
  );
};
