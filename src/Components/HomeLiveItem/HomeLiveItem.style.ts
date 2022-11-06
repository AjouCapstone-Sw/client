import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 90px;
  left: 0px;

  background-color: #5db075;
  width: 100vw;
  height: 270px;
  color: white;
  text-align: center;
  box-sizing: border-box;
  padding: 0px 20px;
`;

const View = styled.div`
  width: calc(100%);
  height: calc(80% - 20px);
  border-radius: 12px;
  background-color: white;
  margin: 20px 0;
  position: relative;
  overflow: hidden;
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
export default { Container, View, ImageBox, PlayButton };
