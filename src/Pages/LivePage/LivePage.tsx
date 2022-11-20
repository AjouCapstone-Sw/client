import { useParams } from 'react-router-dom';

import { useGetWebRtcContainer } from './LivePage.hook';

import { WebRTCView } from '@Components/WebRTCView';

export const LivePage = () => {
  const { productId } = useParams();
  const { loading, Container } = useGetWebRtcContainer({ productId });
  if (!loading) return null;
  return (
    <div>
      <Container productId={Number(productId)}>
        <WebRTCView productId={Number(productId)} />
      </Container>
    </div>
  );
};
