import React from 'react';
import { useNavigate } from 'react-router-dom';

import { EmailPwFinderModal } from '../EmailPwFinderModal';
import { PwChangeForm } from './PwChange.type';
import { changePw } from './PwFinder.util';

import { useModal } from '@Hook/useModal';

export const useOnSubmit = () => {
  const navigator = useNavigate();
  const { closeModal } = useModal();
  const closeEmailPwFinderModal = () => closeModal(EmailPwFinderModal as React.FC);

  const onSubmit = async (data: PwChangeForm) => {
    const res = await changePw(data);
    if (!res) return;
    navigator('/login');
    closeEmailPwFinderModal();
  };
  return onSubmit;
};
