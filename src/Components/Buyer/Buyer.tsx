import { ReactNode } from 'react';

import { useGetVideoStreamBuyer } from './Buyer.hook';

import { Video } from '@Components/.';

export const Buyer = ({ children, productId }: { children: ReactNode; productId: number }) => {
  const videoRef = useGetVideoStreamBuyer({ productId });

  return (
    <div>
      <Video videoRef={videoRef} />
      {children}
    </div>
  );
};
