import React, { useEffect, useState } from 'react';
import { Control, UseFormSetValue } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { AddressRegisterForm } from './AddressRegisterPage.type';
import { updateAddress } from './AddressRegisterPage.util';

import { AddressModal } from '@Components/Modals/Address/AddressModal';
import { ReviewModal } from '@Components/Modals/Review/ReviewModal';
import { useModal } from '@Hook/useModal';

export const useOpenAddressModal = (control: Control<AddressRegisterForm, any>) => {
  const { openModal } = useModal();
  const openAddressModal = () => {
    openModal(AddressModal as React.FC, { control, name: 'address' });
  };
  return openAddressModal;
};

export const useIsDefaultAddress = (
  defaultAddress: string,
  setValue: UseFormSetValue<AddressRegisterForm>,
) => {
  const [isDefaultAddress, setIsDefaultAddress] = useState<boolean>(true);
  const onCheckChange = () => setIsDefaultAddress((prev) => !prev);

  useEffect(() => {
    if (!isDefaultAddress) {
      setValue('address', '');
      return;
    }
    setValue('address', defaultAddress);
  }, [isDefaultAddress]);
  return { isDefaultAddress, onCheckChange };
};

export const useOnSubmit = (seller: string, type: string, productId: string, isBuyNow: boolean) => {
  const navigator = useNavigate();

  const { openModal } = useModal();
  const onSubmit = async (data: AddressRegisterForm) => {
    await updateAddress(data);

    if (isBuyNow) {
      navigator(`/detail/${productId}`);
      return;
    }
    openModal(ReviewModal as React.FC, { type, productId, userId: seller });
  };
  return onSubmit;
};
