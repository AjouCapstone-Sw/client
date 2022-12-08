import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MenuModal } from '@Components/Modals/Menu/MenuModal';
import { SearchModal } from '@Components/Modals/Search/SearchModal';
import { useModal } from '@Hook/useModal';
import { getId } from '@Util/.';

export const useHandleModals = () => {
  const { openModal, closeModal } = useModal();
  const openSearchModal = () => openModal(SearchModal, {});
  const closeSearchModal = () => closeModal(SearchModal);
  const openMenuModal = () => openModal(MenuModal, {});
  const closeMenuModal = () => closeModal(MenuModal);

  return { openMenuModal, openSearchModal, closeSearchModal, closeMenuModal };
};

export const useLog = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const navigator = useNavigate();

  useEffect(() => {
    const id = getId();
    if (id) setIsLogin(true);
  }, []);

  const login = () => navigator('/login');
  const logout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('id');
    window.location.reload();
  };
  return { isLogin, login, logout };
};
