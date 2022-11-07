import React, { useMemo, useState } from 'react';

import { ModalDispatchContext, ModalStateContext } from './ModalContext';
import { OpenModal } from './ModalProvider.type';

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openedModals, setOpenedModals] = useState<OpenModal[]>([]);

  const open = (Component: React.FC, props: any) => {
    setOpenedModals((modals) => [
      ...modals.filter(({ Component: openedModalComponent }) => Component !== openedModalComponent),
      { Component, props },
    ]);
  };

  const close = (Component: React.FC) =>
    setOpenedModals((modals) =>
      modals.filter(({ Component: openedModalComponent }) => Component !== openedModalComponent),
    );

  const modalDispatch = useMemo(
    () => ({
      open,
      close,
    }),
    [],
  );

  return (
    <ModalStateContext.Provider value={openedModals}>
      <ModalDispatchContext.Provider value={modalDispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};
