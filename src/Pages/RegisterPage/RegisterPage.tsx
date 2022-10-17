import { useForm } from 'react-hook-form';

import RegisterPageConstant from './RegisterPage.const';
import { useEmailVerify } from './RegisterPage.hook';
import RegisterPageStyle from './RegisterPage.style';

import { Button, Input, Dropdown, Calendar } from '@Components/.';

type RegisterFormData = {
  id: string;
  email: string;
  emailVerifyNum: string;
  password: string;
  passwordValidate: string;
  sex: string;
  birth: string;
};

export const RegisterPage = () => {
  const {
    register,
    handleSubmit: handleRegisterSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const { emailVerifyState, handleEmailVerify } = useEmailVerify();

  const onSubmit = (data: RegisterFormData) => {
    const { id, email, password, sex, birth } = data;
    console.log(id, email, password, sex, birth);
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
          <RegisterPageStyle.ErrorMsg>{errors.id?.message}</RegisterPageStyle.ErrorMsg>
          <Input
            placeholder='비밀번호'
            type='password'
            {...register('password', RegisterPageConstant.PASSWORD_VALIDATION_OPTION)}
          />
          <RegisterPageStyle.ErrorMsg>{errors.password?.message}</RegisterPageStyle.ErrorMsg>
          <Input
            placeholder='비밀번호 확인'
            type='password'
            {...register('passwordValidate', {
              required: '필수 응답 항목입니다.',
              validate: (val: string) =>
                watch('password') === val || '비밀번호가 일치하지 않습니다',
            })}
          />
          <RegisterPageStyle.ErrorMsg>
            {errors.passwordValidate?.message}
          </RegisterPageStyle.ErrorMsg>
          <Input
            placeholder='이메일'
            {...register('email', RegisterPageConstant.EMAIL_VALIDATION_OPTION)}
          />
          <RegisterPageStyle.ErrorMsg>{errors.email?.message}</RegisterPageStyle.ErrorMsg>

          <RegisterPageStyle.EmailVerifyContainer>
            <Input
              disabled={!emailVerifyState}
              placeholder='이메일 인증번호'
              {...register('emailVerifyNum', RegisterPageConstant.EMAIL_VERIFY_VALIDATION_OPTION)}
            />
            {emailVerifyState ? (
              <Button
                type='button'
                onClick={handleEmailVerify}
              >
                인증번호 확인
              </Button>
            ) : (
              <Button
                type='button'
                onClick={handleEmailVerify}
              >
                인증번호 받기
              </Button>
            )}
          </RegisterPageStyle.EmailVerifyContainer>
          <RegisterPageStyle.ErrorMsg>{errors.emailVerifyNum?.message}</RegisterPageStyle.ErrorMsg>

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
          <RegisterPageStyle.ErrorMsg>{errors.sex?.message}</RegisterPageStyle.ErrorMsg>
        </div>
        <Button>회원가입</Button>
      </RegisterPageStyle.RegisterForm>
    </RegisterPageStyle.RegisterContainer>
  );
};
