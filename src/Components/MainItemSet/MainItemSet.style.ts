import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  padding-right: 0px;
  box-sizing: border-box;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #bdbdbd;
  }

  img {
    width: 10px;
    height: 10px;
  }
`;

const Category = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;

  color: #152536;

  margin-right: 10px;
`;

const ItemContainer = styled.ul`
  display: flex;
  overflow: auto;
  width: 100vw;
  li {
    margin-right: 20px;
  }
`;

export default { Container, ItemContainer, Title, Category };