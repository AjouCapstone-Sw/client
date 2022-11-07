import React, { useContext } from 'react';

import { ModalDispatchContext } from '@Context/.';

export const useModal = () => {
  const { open, close } = useContext(ModalDispatchContext)!;

  const openModal = (Component: React.FC, props: any) => open(Component, props);
  const closeModal = (Component: React.FC) => close(Component);

  return { openModal, closeModal };
};
