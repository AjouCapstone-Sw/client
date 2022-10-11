import { useLoginState } from './LoginPage.hook';
import LoginPageStyle from './LoginPage.style';

import { Button, Input } from '@Components/.';

export const LoginPage = () => {
  const { email, password, handleChangeEmail, handleChangePassword } = useLoginState();
  return (
    <LoginPageStyle.LoginContainer>
      <h1>로그인</h1>
      <LoginPageStyle.LoginForm
        style={{ width: '100%' }}
        action='/login'
        method='POST'
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
          <LoginPageStyle.SearchText>비밀번호 찾기</LoginPageStyle.SearchText>
          <LoginPageStyle.SearchText>이메일 찾기</LoginPageStyle.SearchText>
        </LoginPageStyle.TextContainer>

        <LoginPageStyle.AuthButtonContainer>
          <Button
            type='button'
            radius
          >
            회원가입
          </Button>
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
