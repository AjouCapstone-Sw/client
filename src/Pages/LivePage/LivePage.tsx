import { useParams } from 'react-router-dom';

import { Seller, Buyer, WebRTCView } from '@Components/WebRTCView';

export const LivePage = () => {
  const { productId } = useParams();
  const data = localStorage.getItem('id');
  const Container = data === 'yj' ? Seller : Buyer;
  return (
    <div>
      <Container productId={Number(productId)}>
        <WebRTCView />
      </Container>
    </div>
  );
};
