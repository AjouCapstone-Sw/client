import React, { useState } from 'react';

export const useEmailVerify = () => {
  const [emailVerifyState, setEmailVerifyState] = useState<boolean>(false);
  const [confirmState, setConfirmState] = useState<boolean>(false);

  const handleEmailVerify: React.MouseEventHandler = () => {
    // api call with email
    setEmailVerifyState(true);
  };

  const handleConfirmVerify: React.MouseEventHandler = () => {
    setConfirmState(true);
  };

  return { emailVerifyState, handleEmailVerify, confirmState, handleConfirmVerify };
};
