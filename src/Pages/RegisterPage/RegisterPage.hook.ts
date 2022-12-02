import React from 'react';
import { Control } from 'react-hook-form';

import { RegisterFormData } from './RegisterPage.type';

import { AddressModal } from '@Components/Modals/Address/AddressModal';
import { useModal } from '@Hook/useModal';

export const useOpenAddressModal = (control: Control<RegisterFormData, any>) => {
  const { openModal } = useModal();
  const openAddressModal = () => openModal(AddressModal as React.FC, { control, name: 'address' });
  return openAddressModal;
};
