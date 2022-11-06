import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9999;
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.color.primary};
  padding: 14px;
  box-sizing: border-box;
  display: flex;
  justify-content: end;
  align-items: end;
  svg {
    cursor: pointer;
  }
`;

export default { HeaderContainer };
