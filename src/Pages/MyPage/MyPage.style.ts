import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  width: 100vw;
  height: 25vh;
  background: ${({ theme }) => theme.color.primary};
`;

const User = styled.div`
  position: absolute;
  top: 36vh;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 200px;
  height: 340px;
  img {
    margin-top: 40px;
    width: 200px;
    height: 200px;
    border-radius: 100%;
  }
  h1 {
    margin: 10px 0px;
  }
  div {
    display: flex;
    justify-content: space-around;
  }

  button {
    cursor: pointer;
    color: ${({ theme }) => theme.color.primary};
    background-color: white;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 220px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  button {
    cursor: pointer;
    width: 100%;
    background: white;
    color: ${({ theme }) => theme.color.primary};
    border: 2px solid #f6f6f6;
    border-right: none;
  }
`;

const Body = styled.ul`
  overflow: auto;
  height: calc(75vh - 250px);

  li {
    border-bottom: 2px solid #f6f6f6;
  }
`;

export default { Container, Header, User, ButtonContainer, Body };
