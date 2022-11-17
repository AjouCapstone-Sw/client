import { useLoginState } from './LoginPage.hook';
import LoginPageStyle from './LoginPage.style';

import { Button, Input } from '@Components/.';
import { useMovePage } from '@Hook/useMovePage';

export const LoginPage = () => {
  const { email, password, handleChangeEmail, handleChangePassword, handleLogin } = useLoginState();
  const [goRegister] = useMovePage('/register') as (() => void)[];
  return (
    <LoginPageStyle.LoginContainer>
      <h1>로그인</h1>
      <LoginPageStyle.LoginForm
        action='/login'
        method='POST'
        onSubmit={handleLogin}
      >
        <LoginPageStyle.InputContainer>
          <Input
            placeholder='이메일'
            type='text'
            name='email'
            value={email}
            onChange={handleChangeEmail}
          />
          <Input
            placeholder='비밀번호'
            type='password'
            name='password'
            value={password}
            onChange={handleChangePassword}
          />
        </LoginPageStyle.InputContainer>

        <LoginPageStyle.TextContainer>
          <span>비밀번호 찾기</span>
          <span>이메일 찾기</span>
          <span
            onClick={goRegister}
            onKeyDown={goRegister}
            role='button'
            tabIndex={0}
          >
            회원가입
          </span>
        </LoginPageStyle.TextContainer>

        <LoginPageStyle.AuthButtonContainer>
          <Button
            type='submit'
            radius
          >
            로그인
          </Button>
        </LoginPageStyle.AuthButtonContainer>
      </LoginPageStyle.LoginForm>
    </LoginPageStyle.LoginContainer>
  );
};
