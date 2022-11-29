/* eslint-disable jsx-a11y/label-has-associated-control */

import { useForm } from 'react-hook-form';

import { useOnSubmit } from './PwChange.hook';
import PwFinderStyle from './PwChange.style';
import { PwChangeForm } from './PwChange.type';

import { Input, FormErrorMessage, EmailVerify, PwRegister, Button } from '@Components/.';
import { useEmailVerify } from '@Components/EmailVerify/EmailVerify.hook';
import RegisterPageConst from '@Pages/RegisterPage/RegisterPage.const';

export const PwChange = () => {
  const {
    register,
    getValues,
    handleSubmit: handleChangePwSubmit,
    formState: { errors: validationErrors },
    watch,
  } = useForm<PwChangeForm>();

  const { emailVerifyState, handleEmailVerify, confirmState, handleConfirmVerify } =
    useEmailVerify();
  const onSumbit = useOnSubmit();
  return (
    <PwFinderStyle.Container>
      <label>이메일</label>
      <Input {...register('email', RegisterPageConst.EMAIL_VALIDATION_OPTION)} />

      <EmailVerify
        register={register}
        getValues={getValues}
        emailVerifyState={emailVerifyState}
        handleConfirmVerify={handleConfirmVerify}
        handleEmailVerify={handleEmailVerify}
      />
      <FormErrorMessage error={validationErrors.emailVerifyNum} />
      {confirmState && <PwFinderStyle.SuccessMsg>인증에 성공하셨습니다.</PwFinderStyle.SuccessMsg>}
      {confirmState && (
        <>
          <PwRegister
            register={register}
            validationErrors={validationErrors}
            watch={watch}
          />
          <Button onClick={handleChangePwSubmit(onSumbit)}>비밀번호 변경하기</Button>
        </>
      )}
    </PwFinderStyle.Container>
  );
};
