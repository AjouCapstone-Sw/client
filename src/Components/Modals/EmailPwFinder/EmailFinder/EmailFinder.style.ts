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
  button {
    margin-top: 32px;
  }
`;

const EmailResContainer = styled.div`
  width: 60%;
  margin-top: 32px;
  .finded-email {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export default {
  Container,
  EmailResContainer,
};
