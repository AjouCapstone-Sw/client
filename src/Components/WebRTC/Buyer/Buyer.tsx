import { ReactNode } from 'react';

import { useGetVideoStream } from './Buyer.hook';

export const Buyer = ({ children, productId }: { children: ReactNode; productId: number }) => {
  const videoRef = useGetVideoStream({ productId });

  return (
    <div>
      <video
        muted
        ref={videoRef}
        autoPlay
      />
      {children}
    </div>
  );
};
