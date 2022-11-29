import styled from 'styled-components';

const Container = styled.div`
  min-width: 320px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 240px;

  button + button {
    margin-left: 1px;
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
