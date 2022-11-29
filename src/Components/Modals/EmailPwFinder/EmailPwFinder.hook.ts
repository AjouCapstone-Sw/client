import { useState } from 'react';

export const useEmailPwFinderOpen = () => {
  const [isEmailOrPw, setIsEmailOrPw] = useState<'email' | 'pw'>('email');
  const handleFindEmailOpen = () => setIsEmailOrPw('email');
  const handleFindPwOpen = () => setIsEmailOrPw('pw');
  return { isEmailOrPw, handleFindEmailOpen, handleFindPwOpen };
};
