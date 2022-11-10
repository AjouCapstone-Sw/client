import { useContext } from 'react';

import { ModalDispatchContext } from '@Context/.';

export const useModal = () => {
  const { openModal, closeModal } = useContext(ModalDispatchContext)!;

  return { openModal, closeModal };
};
