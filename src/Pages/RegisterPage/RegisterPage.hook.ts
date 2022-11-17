import React, { useState } from 'react';

import { getEmailValidation } from './RegisterPage.util';

let validationCode = '';

export const useEmailVerify = () => {
  const [callValidation, setCallValidation] = useState<boolean>(false);
  const [emailVerifyState, setEmailVerifyState] = useState<boolean>(false);
  const [confirmState, setConfirmState] = useState<boolean>(false);

  const handleEmailVerify = (userInput: string) => async () => {
    if (!callValidation) {
      const email = userInput;
      const res = await getEmailValidation(email);
      setCallValidation(true);
      validationCode = res;
      return;
    }
    const userInputValidateCode = userInput;
    if (validationCode === userInputValidateCode) setEmailVerifyState(true);
  };

  const handleConfirmVerify: React.MouseEventHandler = () => {
    setConfirmState(true);
  };

  return { emailVerifyState, handleEmailVerify, confirmState, handleConfirmVerify };
};
