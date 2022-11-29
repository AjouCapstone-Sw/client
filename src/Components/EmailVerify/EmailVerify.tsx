import { FieldValues, Path } from 'react-hook-form';

import { EMAIL_VERIFY_VALIDATION_OPTION } from './EmailVerify.const';
import EmailVerifyStyle from './EmailVerify.style';
import { EmailVerifyProps } from './EmailVerify.type';

import { Input, Button } from '@Components/.';

export const EmailVerify = <T extends FieldValues>({
  register,
  getValues,
  emailVerifyState,
  handleEmailVerify,
  handleConfirmVerify,
}: EmailVerifyProps<T>) => (
  <EmailVerifyStyle.Container>
    <Input
      disabled={!emailVerifyState}
      placeholder='이메일 인증번호'
      {...register('emailVerifyNum' as Path<T>, EMAIL_VERIFY_VALIDATION_OPTION)}
    />
    {emailVerifyState ? (
      <Button
        type='button'
        onClick={() => handleConfirmVerify(getValues('emailVerifyNum' as Path<T>) as any)}
      >
        인증번호 확인
      </Button>
    ) : (
      <Button
        type='button'
        onClick={() => handleEmailVerify(getValues('email' as Path<T>) as any)}
      >
        인증번호 받기
      </Button>
    )}
  </EmailVerifyStyle.Container>
);
