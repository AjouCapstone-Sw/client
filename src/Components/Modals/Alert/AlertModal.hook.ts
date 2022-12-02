import React from 'react';

import { AlertModal } from './AlertModal';

import { useModal } from '@Hook/useModal';

export const useCloseAlert = () => {
  const { closeModal } = useModal();
  const handleClose = () => {
    closeModal(AlertModal as React.FC);
  };

  return handleClose;
};
