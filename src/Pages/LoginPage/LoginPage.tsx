import { Button, Input } from '@Components/.';

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
      <Button
        type='button'
        radius
      >
        회원가입
      </Button>
      <Button
        type='button'
        radius
      >
        로그인
      </Button>
    </div>
  </div>
);
