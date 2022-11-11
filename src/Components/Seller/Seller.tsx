import { ReactNode } from 'react';

import { useGetVideoStreamSeller } from './Seller.hook';

import { Video } from '@Components/.';

export const Seller = ({ children, productId }: { children: ReactNode; productId: number }) => {
  const videoRef = useGetVideoStreamSeller({ productId });
  return (
    <div>
      <Video videoRef={videoRef} />
      {children}
    </div>
  );
};
