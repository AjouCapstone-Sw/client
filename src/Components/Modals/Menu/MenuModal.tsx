import ReactModal from 'react-modal';
import { NavLink } from 'react-router-dom';

import { MODAL_PROPS } from '../Modal.const';
import MenuModalStyle from './MenuModal.style';

import { HEADER_MENU } from '@Components/Header/Header.const';
import { useModal } from '@Hook/useModal';

export const MenuModal = () => {
  const { closeModal } = useModal();
  const closeMenuModal = () => closeModal(MenuModal);

  return (
    <ReactModal
      {...MODAL_PROPS}
      onRequestClose={closeMenuModal}
    >
      <MenuModalStyle.MenuModalContainer onClick={closeMenuModal}>
        {HEADER_MENU.map(({ title, link }) => (
          <NavLink
            key={title}
            to={link}
            className={({ isActive }) => (isActive ? 'select' : 'unselect')}
          >
            {title}
          </NavLink>
        ))}
      </MenuModalStyle.MenuModalContainer>
    </ReactModal>
  );
};
