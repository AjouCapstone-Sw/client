/* eslint-disable no-unused-vars */
import React from 'react';
import { Control, UseFormRegister } from 'react-hook-form';

import { ProductRegisterFormData } from '@Components/ProductRegisterForm/ProductRegisterForm.type';

export type AuctionEditFormProps = {
  control: Control<ProductRegisterFormData, any>;
  register: UseFormRegister<ProductRegisterFormData>;
  handleAuctionStartPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
