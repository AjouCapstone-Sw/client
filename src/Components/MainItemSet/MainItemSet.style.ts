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
    font-weight: ${({ theme }) => theme.fontWeight.light};
    font-size: 14px;
    line-height: 17px;
    color: #bdbdbd;
    cursor: pointer;
  }

  img {
    cursor: pointer;
    width: 10px;
    height: 10px;
  }
`;

const Category = styled.div`
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.base};
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 29px;
  display: flex;
  align-items: center;

  color: #152536;

  margin-right: 10px;
`;

const ItemContainer = styled.ul`
  display: flex;
  overflow: auto;
  width: 100%;
  li {
    margin-right: 20px;
  }
  p {
    margin-top: 16px;
    margin-left: 16px;
    font-size: 24px;
    font-weight: 600;
  }
`;

export default { Container, ItemContainer, Title, Category };
