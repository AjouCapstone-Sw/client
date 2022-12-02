import styled from 'styled-components';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 60%;
  min-width: 240px;
  margin-top: 100px;

  label {
    margin-top: 16px;
    margin-bottom: 8px;
  }

  input + div {
    margin-top: 16px;
  }
`;

const SuccessMsg = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-top: 5px;
  margin-bottom: 10px;
`;

const ErrorMsg = styled.p`
  color: ${({ theme }) => theme.color.danger};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-top: 5px;
  margin-bottom: 10px;
`;

export default {
  Container,
  SuccessMsg,
  ErrorMsg,
};
