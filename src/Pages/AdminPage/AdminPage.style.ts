import styled from 'styled-components';

const Container = styled.div`
  width: 720px;
  margin: auto;
`;

const InfoHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  p {
    margin-left: 10px;
    strong {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

const SellProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`;

const SellProductHeader = styled.div`
  display: flex;

  width: 720px;
  padding: 0px 20px;
  p {
    text-align: center;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  p:first-child {
    width: 100px;
  }
  p:nth-child(2) {
    width: 250px;
  }
  p:nth-child(3) {
    width: 100px;
  }
  p:nth-child(4) {
    width: 100px;
  }
  p:nth-child(5) {
    width: 100px;
  }
  p:nth-child(6) {
    width: 100px;
  }
`;

export default {
  Container,
  InfoHeader,
  SellProductContainer,
  SellProductHeader,
};
