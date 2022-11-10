import { useContext } from 'react';

import { ModalStateContext } from '@Context/.';

export const Modals = () => {
  const openedModals = useContext(ModalStateContext)!;
  return (
    <>
      {openedModals.map(({ Component, props }) => (
        <Component
          key={props + Component}
          {...props}
        />
      ))}
    </>
  );
};
