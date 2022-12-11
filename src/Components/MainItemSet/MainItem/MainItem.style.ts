import styled from 'styled-components';

const Container = styled.li`
  cursor: pointer;
  span {
    display: block;
    font-size: 14px;
  }
  img {
    border-radius: 8px;
    width: 110px;
    height: 110px;
  }
  div {
    position: relative;

    span {
      position: absolute;
      top: 0px;
      left: 0px;
      color: ${({ theme }) => theme.color.primary};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      transform: rotate(-0.1turn);
    }
  }
`;

const Price = styled.span`
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.base};
  font-size: ${({ theme }) => theme.fontSize.m} !important;
  line-height: 17px;
`;

export default { Container, Price };
