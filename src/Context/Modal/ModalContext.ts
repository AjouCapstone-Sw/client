import { createContext } from 'react';

import { ModalDispatch, OpenModal } from './ModalProvider.type';

export const ModalStateContext = createContext<OpenModal[] | null>(null);

export const ModalDispatchContext = createContext<ModalDispatch | null>(null);
