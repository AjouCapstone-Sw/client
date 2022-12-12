import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 20px;
  img {
    width: 100px;
    height: 100px;
  }
  border-bottom: 2px solid #f6f6f6;
  p {
    text-align: center;
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

export default { Container };
