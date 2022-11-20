import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  max-width: 1024px;
  width: 80vw;
  margin: auto;
  padding-top: 24px;
  label {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin: 16px 0px;
  }
  form {
    margin-top: 48px;
  }
  button {
    margin-top: 48px;
  }
`;

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 32px 0px;
`;

const Highlight = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.primary};
`;

export default { Container, InfoText, Highlight };
