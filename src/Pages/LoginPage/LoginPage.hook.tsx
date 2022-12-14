import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postLogin } from './LoginPage.util';

import { EmailPwFinderModal } from '@Components/Modals/EmailPwFinder/EmailPwFinderModal';
import { useMovePage } from '@Hook/.';
import { useModal } from '@Hook/useModal';
import { setId, setUserId } from '@Util/LocalStorage';

export const useLoginState = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [goMain] = useMovePage('/') as (() => void)[];
  const naviagtor = useNavigate();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postLogin({ email, password })
      .then(({ nickName, userId }) => {
        if (email === 'admin@admin') {
          setUserId('admin');
          setId('0');
          naviagtor('/admin');
          return;
        }
        setUserId(nickName);
        setId(userId);
        goMain();
      })
      .catch(() => {
        setEmail('');
        setPassword('');
      });
  };
  return { email, password, handleChangeEmail, handleChangePassword, handleLogin };
};

export const useOpenEmailPwFinderModal = () => {
  const { openModal } = useModal();
  const openEmailPwModal = () => openModal(EmailPwFinderModal as React.FC, {});
  return openEmailPwModal;
};
