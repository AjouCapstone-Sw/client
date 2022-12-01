/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ReactModal from 'react-modal';

import { POINT_EXCHANGE_MODAL_PROPS } from '../Modal.const';
import { PointCharge } from './PointCharge/PointCharge';
import { useClosePointModal, usePointExchangeSelect } from './PointExchangeModal.hook';
import PointExchangeModalStyle from './PointExchangeModal.style';
import { PointRefund } from './PointRefund/PointRefund';

import { Button } from '@Components/.';

export const PointExchangeModal: React.FC = () => {
  const handleClose = useClosePointModal();
  const { isChargeOrRefund, handleChargeOpen, handleRefundOpen } = usePointExchangeSelect();

  return (
    <ReactModal
      {...POINT_EXCHANGE_MODAL_PROPS}
      onRequestClose={handleClose}
    >
      <PointExchangeModalStyle.Container>
        <PointExchangeModalStyle.ButtonContainer>
          <Button onClick={handleChargeOpen}>충전하기</Button>
          <Button onClick={handleRefundOpen}>환전하기</Button>
        </PointExchangeModalStyle.ButtonContainer>
        {isChargeOrRefund === 'charge' && <PointCharge />}
        {isChargeOrRefund === 'refund' && <PointRefund />}
      </PointExchangeModalStyle.Container>
    </ReactModal>
  );
};
