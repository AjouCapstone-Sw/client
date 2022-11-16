import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 40px 20px;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 24px;
  }

  span.strike {
    color: ${({ theme }) => theme.color.primary};
    margin-left: 10px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  margin: 20px 0px;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  .Join_Box {
    padding: 5px 10px;
    box-sizing: border-box;
    border: 1px solid black;
    height: 30px;
    img {
      width: 15px;
      height: 15px;
    }
  }
`;

const Footer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 40px;
  left: 0px;

  display: flex;
  box-sizing: border-box;
  padding: 0 20px;

  img {
    cursor: pointer;
  }

  justify-content: space-between;
  .chatContainer {
    width: 200px;
    height: 150px;
    overflow: auto;
    margin-bottom: 20px;
  }

  form {
    margin: 20px 0px;
    input {
      width: 200px;
      height: 50px;
      padding: 5px;
      box-sizing: border-box;
      border-radius: 10px;
      background-color: transparent;
    }
  }
  button {
    width: 200px;
    font-size: 24px;
    height: 50px;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.primary};
  }
`;

export default { Container, Header, Footer, Title, Body };