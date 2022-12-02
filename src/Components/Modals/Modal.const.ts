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
  appElement: document.getElementById('root') as HTMLElement,
};

export const SEARCH_MODAL_PROPS = {
  ...MODAL_PROPS,
  style: {
    ...MODAL_STYLE,
    ...{ overlay: { backgroundColor: 'rgba(23,23,26,0.5)', zIndex: 10000 } },
  },
};

export const EMAIL_PW_FINDER_MODAL_PROPS = {
  ...MODAL_PROPS,
  style: {
    ...MODAL_STYLE,
    ...{
      overlay: { backgroundColor: 'rgba(23,23,26,0.5)', zIndex: 10000 },
      content: {
        width: '80%',
        padding: '0px',
        border: 'none',
      },
    },
  },
};

export const POINT_EXCHANGE_MODAL_PROPS = {
  ...MODAL_PROPS,
  style: {
    ...MODAL_STYLE,
    ...{
      overlay: { backgroundColor: 'rgba(23,23,26,0.5)', zIndex: 10000 },
      content: {
        width: '80%',
        maxWidth: '640px',
        padding: '0px',
        border: 'none',
        margin: 'auto',
      },
    },
  },
};
