import { Input } from '@Components/.';

export const LoginPage = () => (
  <div>
    <h1>로그인</h1>
    <Input placeholder='이메일' />
    <Input
      placeholder='비밀번호'
      type='password'
    />
    <div>
      <span>비밀번호 찾기</span>
      <span>이메일 찾기</span>
    </div>
    <div>
      <button type='button'>회원가입</button>
      <button type='button'>로그인</button>
    </div>
  </div>
);
