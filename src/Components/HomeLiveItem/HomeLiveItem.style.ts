import styled from 'styled-components';

const Container = styled.div`
  position: relative;

  background-color: ${({ theme }) => theme.color.primary};
  width: 100vw;
  height: 420px;
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  box-sizing: border-box;
  padding: 0px 20px;
  padding-top: 30px;

  a {
    min-width: 320px;
    width: 50%;
    display: block;
    margin: auto;
  }

  h1 {
    margin-top: 10px;
  }
`;

const View = styled.div`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.white};
  margin: 20px auto;
  position: relative;
  overflow: hidden;
  min-width: 320px;
  max-width: 440px;
  :hover {
    img {
      display: block;
    }
  }
`;

const ImageBox = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  width: 100%;
  height: 100%;
`;

const PlayButton = styled.img`
  display: none;
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default { Container, View, ImageBox, PlayButton, Title };
