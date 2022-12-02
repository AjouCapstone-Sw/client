import { useForm } from 'react-hook-form';

import RegisterPageConstant from './RegisterPage.const';
import { useOpenAddressModal } from './RegisterPage.hook';
import RegisterPageStyle from './RegisterPage.style';
import type { PostSignUpUser, RegisterFormData } from './RegisterPage.type';
import { postSignUpUser } from './RegisterPage.util';

import {
  Button,
  Input,
  Dropdown,
  Calendar,
  FormErrorMessage,
  EmailVerify,
  PwRegister,
} from '@Components/.';
import { useEmailVerify } from '@Components/EmailVerify/EmailVerify.hook';
import { useMovePage } from '@Hook/useMovePage';

export const RegisterPage = () => {
  const {
    register,
    handleSubmit: handleRegisterSubmit,
    control,
    watch,
    getValues,
    formState: { errors: registerValidationErrors },
  } = useForm<RegisterFormData>();

  const { emailVerifyState, handleEmailVerify, confirmState, handleConfirmVerify } =
    useEmailVerify();
  const [goLogin] = useMovePage(['/login']) as (() => void)[];

  const onSubmit = (data: RegisterFormData) => {
    const { id: nickName, email, password, sex, birth, address } = data;
    if (!confirmState) return;
    const body: PostSignUpUser = {
      nickName,
      email,
      password,
      gender: sex.value === 'male' ? 'M' : 'F',
      birth,
      address,
    };
    postSignUpUser(body).then(goLogin);
  };

  const openAddressModal = useOpenAddressModal(control);
  const addressValue = watch('address');

  return (
    <RegisterPageStyle.RegisterContainer>
      <h1>회원 가입</h1>
      <RegisterPageStyle.RegisterForm onSubmit={handleRegisterSubmit(onSubmit)}>
        <div>
          <Input
            placeholder='아이디'
            {...register('id', RegisterPageConstant.ID_VALIDATION_OPTION)}
          />
          <FormErrorMessage error={registerValidationErrors.id} />

          <PwRegister
            register={register}
            validationErrors={registerValidationErrors}
            watch={watch}
          />
          <FormErrorMessage error={registerValidationErrors.passwordValidate} />

          <Input
            placeholder='이메일'
            {...register('email', RegisterPageConstant.EMAIL_VALIDATION_OPTION)}
          />
          <FormErrorMessage error={registerValidationErrors.email} />

          <EmailVerify
            register={register}
            getValues={getValues}
            emailVerifyState={emailVerifyState}
            handleConfirmVerify={handleConfirmVerify}
            handleEmailVerify={handleEmailVerify}
          />
          {confirmState && (
            <RegisterPageStyle.SuccessMsg>인증에 성공하셨습니다.</RegisterPageStyle.SuccessMsg>
          )}
          <FormErrorMessage error={registerValidationErrors.emailVerifyNum} />

          <Input
            placeholder='주소'
            {...register('address')}
            onClick={openAddressModal}
            value={addressValue}
          />
          <RegisterPageStyle.DropdownContainer>
            <Dropdown
              options={RegisterPageConstant.REGISTER_SEX_OPTION}
              control={control}
              name='sex'
              placeholder='성별'
              rules={{ required: '필수 입력 항목입니다' }}
            />
            <Calendar
              control={control}
              label='생년월일'
              name='birth'
            />
          </RegisterPageStyle.DropdownContainer>
          <FormErrorMessage error={registerValidationErrors.sex?.label} />
        </div>
        <Button>회원가입</Button>
      </RegisterPageStyle.RegisterForm>
    </RegisterPageStyle.RegisterContainer>
  );
};
