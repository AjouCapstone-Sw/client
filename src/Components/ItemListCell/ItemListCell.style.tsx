import styled from 'styled-components';

const Container = styled.li`
  width: 100%;
  height: 140px;
  box-sizing: border-box;
  padding: 20px 15px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
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
    color: ${({ theme }) => theme.color.primary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
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
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
export default { Container, Image, ImageBox, TextContainer };
