import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  padding: 20px;
  margin: auto;

  input {
    height: 64px;
    font-size: 24px;
  }

  .point-charge-button {
    position: absolute;
    bottom: 24px;
    width: 80%;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-left: -24px;
  svg {
    width: 124px;
    height: 124px;
  }
  p {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-left: -24px;
  }
`;

const ChargePriceButtonContainer = styled.div`
  display: flex;
  margin-top: 24px;
  button {
    background: none;
    color: ${({ theme }) => theme.color.dark};
    border: 1px solid ${({ theme }) => theme.color.border};
  }
`;

export default {
  Container,
  Title,
  ChargePriceButtonContainer,
};
