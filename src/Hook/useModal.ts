import { useContext } from 'react';

import { ModalDispatchContext } from '@Context/.';

export const useModal = () => {
  const { open: openModal, close: closeModal } = useContext(ModalDispatchContext)!;

  return { openModal, closeModal };
};
