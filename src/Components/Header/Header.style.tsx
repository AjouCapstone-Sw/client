import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
  width: 100%;
  min-width: 340px;
  height: 90px;

  padding: 14px 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.color.dark};
    &:hover {
      opacity: 0.7;
    }
  }

  div:last-child {
    display: flex;
  }
`;

const Logo = styled(Link)`
  margin-right: 2.5rem;
  color: ${({ theme }) => theme.color.primary};
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: 'Courier New', Courier, monospace;
  &:hover {
    opacity: 0.9;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  .select {
    color: ${({ theme }) => theme.color.primary};
  }
  a {
    margin-right: 1rem;
    &:hover {
      opacity: 0.7;
    }
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  @media ${({ theme }) => theme.mediaQuery.base} {
    display: none;
  }

  @media ${({ theme }) => theme.mediaQuery.mobile} {
    display: none;
  }
`;

const MenuIcon = styled(FontAwesomeIcon)`
  display: none;
  width: 24px;
  height: 24px;
  margin-left: 24px;
  @media ${({ theme }) => theme.mediaQuery.base} {
    display: block;
  }
`;

export default { HeaderContainer, MenuContainer, Logo, MenuIcon };
