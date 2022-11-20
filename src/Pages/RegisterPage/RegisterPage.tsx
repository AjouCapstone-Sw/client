import { useForm } from 'react-hook-form';

import RegisterPageConstant from './RegisterPage.const';
import { useEmailVerify } from './RegisterPage.hook';
import RegisterPageStyle from './RegisterPage.style';
import type { PostSignUpUser, RegisterFormData } from './RegisterPage.type';
import { postSignUpUser } from './RegisterPage.util';

import { Button, Input, Dropdown, Calendar, FormErrorMessage } from '@Components/.';
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
  const [goLogin] = useMovePage('/login') as (() => void)[];

  const onSubmit = (data: RegisterFormData) => {
    const { id: nickName, email, password, sex, birth } = data;
    if (!confirmState) return;
    const body: PostSignUpUser = {
      nickName,
      email,
      password,
      gender: sex.value === 'male' ? 'M' : 'F',
      birth,
    };
    postSignUpUser(body).then(goLogin);
  };

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

          <Input
            placeholder='비밀번호'
            type='password'
            {...register('password', RegisterPageConstant.PASSWORD_VALIDATION_OPTION)}
          />
          <FormErrorMessage error={registerValidationErrors.password} />
          <Input
            placeholder='비밀번호 확인'
            type='password'
            {...register('passwordValidate', {
              required: '필수 응답 항목입니다.',
              validate: (val: string) =>
                watch('password') === val || '비밀번호가 일치하지 않습니다',
            })}
          />
          <FormErrorMessage error={registerValidationErrors.passwordValidate} />

          <Input
            placeholder='이메일'
            {...register('email', RegisterPageConstant.EMAIL_VALIDATION_OPTION)}
          />
          <FormErrorMessage error={registerValidationErrors.email} />

          <RegisterPageStyle.EmailVerifyContainer>
            <Input
              disabled={!emailVerifyState}
              placeholder='이메일 인증번호'
              {...register('emailVerifyNum', RegisterPageConstant.EMAIL_VERIFY_VALIDATION_OPTION)}
            />
            {emailVerifyState ? (
              <Button
                type='button'
                onClick={() => handleConfirmVerify(getValues('emailVerifyNum'))}
              >
                인증번호 확인
              </Button>
            ) : (
              <Button
                type='button'
                onClick={() => handleEmailVerify(getValues('email'))}
              >
                인증번호 받기
              </Button>
            )}
          </RegisterPageStyle.EmailVerifyContainer>
          {emailVerifyState && (
            <RegisterPageStyle.SuccessMsg>인증에 성공하셨습니다.</RegisterPageStyle.SuccessMsg>
          )}
          <FormErrorMessage error={registerValidationErrors.emailVerifyNum} />

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
