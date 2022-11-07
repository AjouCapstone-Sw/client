import ReactModal from 'react-modal';

import { MODAL_PROPS } from '../Modal.const';

import { useModal } from '@Hook/useModal';

export const SearchModal = () => {
  const { closeModal } = useModal();

  return (
    <ReactModal
      {...MODAL_PROPS}
      onRequestClose={() => closeModal(SearchModal)}
    >
      <div>menu</div>
    </ReactModal>
  );
};
