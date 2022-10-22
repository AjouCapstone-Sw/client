import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 140px;
  box-sizing: border-box;
  padding: 20px 15px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ImageBox = styled.div`
  position: relative;

  span {
    position: absolute;
    top: -8px;
    left: -12px;
    color: #5db075;
    font-weight: 900;
    transform: rotate(-0.1turn);
  }
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  overflow: auto;
  .strong {
    font-weight: 900;
    font-size: 24px;
  }
`;
export default { Container, Image, ImageBox, TextContainer };
