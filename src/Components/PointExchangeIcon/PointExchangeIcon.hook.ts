import React from 'react';

import { PointExchangeModal } from '@Components/Modals/PointExchange/PointExchangeModal';
import { useModal } from '@Hook/useModal';

export const useOpenPointExchangeModal = () => {
  const { openModal } = useModal();
  const openPointModal = () => openModal(PointExchangeModal as React.FC, {});
  return openPointModal;
};
