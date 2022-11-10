import { createContext } from 'react';

import { ModalDispatch, OpenModal } from './ModalProvider.type';

export const ModalStateContext = createContext<OpenModal[]>([]);

export const ModalDispatchContext = createContext<ModalDispatch>({} as ModalDispatch);
