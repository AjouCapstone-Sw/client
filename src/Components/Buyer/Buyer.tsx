import { ReactNode } from 'react';

import { useGetVideoStream } from './Buyer.hook';

import { Video } from '@Components/.';

export const Buyer = ({ children, productId }: { children: ReactNode; productId: number }) => {
  const videoRef = useGetVideoStream({ productId });

  return (
    <div>
      <Video videoRef={videoRef} />
      {children}
    </div>
  );
};
