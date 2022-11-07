import ReactModal from 'react-modal';

export const MODAL_STYLE: ReactModal.Styles = {
  overlay: {
    backgroundColor: 'rgba(23,23,26,0.5)',
  },
  content: {
    position: 'static',
  },
};

export const MODAL_PROPS = {
  isOpen: true,
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEsc: true,
  style: MODAL_STYLE,
};
