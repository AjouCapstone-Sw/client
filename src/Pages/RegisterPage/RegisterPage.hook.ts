import React, { useState } from 'react';
import { Control } from 'react-hook-form';

import { RegisterFormData } from './RegisterPage.type';
import { getEmailValidation } from './RegisterPage.util';

import { AddressModal } from '@Components/Modals/Address/AddressModal';
import { useModal } from '@Hook/useModal';

let validationCode = '';

export const useEmailVerify = () => {
  const [emailVerifyState, setEmailVerifyState] = useState<boolean>(false);
  const [confirmState, setConfirmState] = useState<boolean>(false);

  const handleEmailVerify = (email: string) =>
    getEmailValidation(email).then((res) => {
      setEmailVerifyState(true);
      validationCode = res;
    });

  const handleConfirmVerify = (userInputValidateCode: string) => {
    if (validationCode === userInputValidateCode) setConfirmState(true);
  };

  return { emailVerifyState, handleEmailVerify, confirmState, handleConfirmVerify };
};

export const useOpenAddressModal = (control: Control<RegisterFormData, any>) => {
  const { openModal } = useModal();
  const openAddressModal = () => openModal(AddressModal as React.FC, { control, name: 'address' });
  return openAddressModal;
};
