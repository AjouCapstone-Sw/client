import { useParams } from 'react-router-dom';

import { Seller, Buyer } from '@Components/WebRTC';

export const LivePage = () => {
  const { productId } = useParams();
  const data = localStorage.getItem('id');
  console.log(data);
  return (
    <div>
      {data === 'yj' ? (
        <Seller productId={Number(productId)}>hihi</Seller>
      ) : (
        <Buyer productId={Number(productId)}>hihi</Buyer>
      )}
    </div>
  );
};
