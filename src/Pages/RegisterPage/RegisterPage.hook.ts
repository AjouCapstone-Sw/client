import { useState } from 'react';

import { getEmailValidation } from './RegisterPage.util';

let validationCode = '';

export const useEmailVerify = () => {
  const [emailVerifyState, setEmailVerifyState] = useState<boolean>(false);
  const [confirmState, setConfirmState] = useState<boolean>(false);

  const handleEmailVerify = (email: string) => async () => {
    const res = await getEmailValidation(email);
    setEmailVerifyState(true);
    validationCode = res;
  };

  const handleConfirmVerify = (userInputValidateCode: string) => () => {
    if (validationCode === userInputValidateCode) setConfirmState(true);
  };

  return { emailVerifyState, handleEmailVerify, confirmState, handleConfirmVerify };
};
