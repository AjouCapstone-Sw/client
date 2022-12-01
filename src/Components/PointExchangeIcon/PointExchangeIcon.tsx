import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useOpenPointExchangeModal } from './PointExchangeIcon.hook';
import { Container, ExchangeIcon } from './PointExchangeIcon.style';

export const PointExchangeIcon = () => {
  const openPointExchangeModal = useOpenPointExchangeModal();
  return (
    <Container onClick={openPointExchangeModal}>
      <span>포인트 충전/환전</span>
      <ExchangeIcon icon={faArrowRightArrowLeft} />
    </Container>
  );
};
