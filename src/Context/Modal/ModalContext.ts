import { createContext } from 'react';

import { ModalDispatch, OpenModal } from './ModalProvider.type';

export const ModalStateContext = createContext<OpenModal<any>[]>([]);

export const ModalDispatchContext = createContext<ModalDispatch>({
  openModal: () => {},
  closeModal: () => {},
} as ModalDispatch);
