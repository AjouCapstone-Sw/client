import React from 'react';
import ReactModal from 'react-modal';

import { EMAIL_PW_FINDER_MODAL_PROPS } from '../Modal.const';
import { EmailFinder } from './EmailFinder/EmailFinder';
import { useEmailPwFinderOpen } from './EmailPwFinder.hook';
import EmailPwFinderModalStyle from './EmailPwFinderModal.style';
import { PwChange } from './PwChange/PwChange';

import { Button } from '@Components/.';
import { useModal } from '@Hook/useModal';

export const EmailPwFinderModal = () => {
  const { closeModal } = useModal();
  const { isEmailOrPw, handleFindEmailOpen, handleFindPwOpen } = useEmailPwFinderOpen();

  const closeEmailPwFinderModal = () => closeModal(EmailPwFinderModal as React.FC);

  return (
    <ReactModal
      {...EMAIL_PW_FINDER_MODAL_PROPS}
      onRequestClose={closeEmailPwFinderModal}
    >
      <EmailPwFinderModalStyle.Container>
        <EmailPwFinderModalStyle.ButtonContainer>
          <Button onClick={handleFindEmailOpen}>이메일 찾기</Button>
          <Button onClick={handleFindPwOpen}>비밀번호 찾기</Button>
        </EmailPwFinderModalStyle.ButtonContainer>
        {isEmailOrPw === 'email' && <EmailFinder />}
        {isEmailOrPw === 'pw' && <PwChange />}
      </EmailPwFinderModalStyle.Container>
    </ReactModal>
  );
};
