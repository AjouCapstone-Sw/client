import { useState } from 'react';

import { getEmailValidation } from './EmailVerify.util';

export const useEmailVerify = () => {
  const [emailVerifyState, setEmailVerifyState] = useState<boolean>(false);
  const [confirmState, setConfirmState] = useState<boolean>(false);
  const [validationCode, setValidationCode] = useState<string>('');

  const handleEmailVerify = (email: string) =>
    getEmailValidation(email).then((res) => {
      setEmailVerifyState(true);
      setValidationCode(res);
    });

  const handleConfirmVerify = (userInputValidateCode: string) => {
    if (validationCode === userInputValidateCode) setConfirmState(true);
  };

  return { emailVerifyState, handleEmailVerify, confirmState, handleConfirmVerify };
};
