import React, { useState } from 'react';

import { EmailFinderForm } from './EmailFinder.type';
import { emailFind } from './EmailFinder.util';

export const useHandleOnsubmit = (setEmail: React.Dispatch<React.SetStateAction<string>>) => {
  const handleSubmit = async (data: EmailFinderForm) => {
    const email = await emailFind(data);
    setEmail(email);
  };
  return handleSubmit;
};

export const useFindedEmail = () => {
  const [email, setEmail] = useState<string>('');

  return [email, setEmail];
};
