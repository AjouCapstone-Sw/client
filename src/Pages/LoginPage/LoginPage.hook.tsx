import React, { useState } from 'react';

import { postLogin } from './LoginPage.util';

import { useMovePage } from '@Hook/.';

export const useLoginState = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [goMain] = useMovePage('/main') as (() => void)[];

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postLogin({ email, pw: password })
      .then(goMain)
      .catch(() => {
        setEmail('');
        setPassword('');
      });
  };
  return { email, password, handleChangeEmail, handleChangePassword, handleLogin };
};
