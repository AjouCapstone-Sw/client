/* eslint-disable no-unused-vars */
import React from 'react';
import { Control, UseFormRegister } from 'react-hook-form';

import { ProductRegisterForm } from '@Pages/ProductRegisterPage/ProductRegisterPage.type';

export type AuctionEditFormProps = {
  control: Control<ProductRegisterForm, any>;
  register: UseFormRegister<ProductRegisterForm>;
  handleAuctionStartPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
