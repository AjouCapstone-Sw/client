import React, { useState } from 'react';

import { PointExchangeModal } from './PointExchangeModal';

import { useModal } from '@Hook/useModal';

export const useClosePointModal = () => {
  const { closeModal } = useModal();
  const closeReviewModal = () => closeModal(PointExchangeModal as React.FC);
  return closeReviewModal;
};

export const usePointExchangeSelect = () => {
  const [isChargeOrRefund, setIsChargeOrRefund] = useState<'charge' | 'refund'>('charge');
  const handleChargeOpen = () => setIsChargeOrRefund('charge');
  const handleRefundOpen = () => setIsChargeOrRefund('refund');

  return { isChargeOrRefund, handleChargeOpen, handleRefundOpen };
};
