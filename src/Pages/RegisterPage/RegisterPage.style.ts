import styled from 'styled-components';

const RegisterContainer = styled.div`
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
  min-width: 300px;
`;

const RegisterForm = styled.form`
  input + input {
    margin-top: 20px;
  }
  input + div {
    margin-top: 20px;
  }
  div + button {
    margin-top: 40px;
  }
`;

const EmailVerifyContainer = styled.div`
  display: flex;

  input {
    margin-right: 20px;
  }
  button {
    width: 40%;
    min-width: 120px;
  }
`;

const DropdownContainer = styled.div`
  display: flex;
  margin-top: 20px;
  > div:first-child {
    width: 150px;
    margin-right: 30px;
  }
  > div:nth-child(2) {
    width: 100%;
  }
`;

const SuccessMsg = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-top: 5px;
  margin-bottom: 10px;
`;

export default {
  RegisterContainer,
  RegisterForm,
  EmailVerifyContainer,
  DropdownContainer,
  SuccessMsg,
};
