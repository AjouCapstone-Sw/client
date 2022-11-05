import styled from 'styled-components';

const Container = styled.li`
  height: 150px;
  span {
    display: block;
    font-size: 14px;
  }
  img {
    border-radius: 8px;
    width: 110px;
    height: 110px;
  }
`;

const Price = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px !important;
  line-height: 17px;
`;

export default { Container, Price };
