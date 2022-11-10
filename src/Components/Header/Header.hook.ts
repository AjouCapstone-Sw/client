import { MenuModal } from '@Components/Modals/Menu/MenuModal';
import { SearchModal } from '@Components/Modals/Search/SearchModal';
import { useModal } from '@Hook/useModal';

export const useHandleModals = () => {
  const { openModal, closeModal } = useModal();
  const openSearchModal = () => openModal(SearchModal, {});
  const closeSearchModal = () => closeModal(SearchModal);
  const openMenuModal = () => openModal(MenuModal, {});
  const closeMenuModal = () => closeModal(MenuModal);

  return { openMenuModal, openSearchModal, closeSearchModal, closeMenuModal };
};
