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
  width: 100%;
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
`;
const SearchText = styled.span`
  color: #5db075;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
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
  SearchText,
  AuthButtonContainer,
  LoginContainer,
  InputContainer,
  LoginForm,
  TextContainer,
};
