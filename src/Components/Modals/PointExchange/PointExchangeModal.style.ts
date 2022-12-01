import styled from 'styled-components';

const Container = styled.div`
  min-width: 320px;
  margin: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 240px;

  button + button {
    width: 70%;
    margin-left: 1px;
    background-color: ${({ theme }) => theme.color.danger};
  }
`;

const FormContainer = styled.div`
  width: 80%;
  margin: auto;
`;

export default {
  Container,
  ButtonContainer,
  FormContainer,
};
