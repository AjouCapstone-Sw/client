/* eslint-disable no-unused-vars */
import { FieldValues, UseFormRegister } from 'react-hook-form';

export type EmailVerifyProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  getValues: UseFormRegister<T>;
  emailVerifyState: boolean;
  handleEmailVerify: (email: string) => void;
  handleConfirmVerify: (userInputValidateCode: string) => void;
};
