import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:nth-child(2) {
    width: 80%;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
`;

const Strong = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font-size: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  width: 100%;
  & > img {
    width: 50%;
    height: 100%;
  }
`;

const Week = styled.span`
  font-size: 12px;
  font-weight: 300;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;

  & > button {
    width: 45%;
    height: 50px;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
  }
`;

export default {
  Container,
  Strong,
  ImageContainer,
  Week,
  ButtonContainer,
};
