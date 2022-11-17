import styled from 'styled-components';

const LoginContainer = styled.div`
  padding: 0px 20px;
  box-sizing: border-box;
  width: 100vw;
  height: calc(100vh - 62px);
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 60px 0 30px;
  }
`;

const LoginForm = styled.form`
  min-width: 300px;
`;
const InputContainer = styled.div`
  height: 120px;

  input + input {
    margin-top: 20px;
  }
`;

const TextContainer = styled.div`
  margin: 40px 0 20px;
  display: flex;
  justify-content: space-around;

  span {
    color: ${({ theme }) => theme.color.primary};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.base};
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 19px;
    cursor: pointer;
  }
`;

const AuthButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;

  button + button {
    margin-left: 10px;
  }
`;
export default {
  AuthButtonContainer,
  LoginContainer,
  InputContainer,
  LoginForm,
  TextContainer,
};
