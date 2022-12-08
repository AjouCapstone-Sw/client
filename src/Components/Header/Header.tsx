/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import { HEADER_MENU } from './Header.const';
import { useHandleModals, useLog } from './Header.hook';
import HeaderStyle from './Header.style';

import { CategoryMenuIcon, LogoImage, SearchIcon } from '@Components/Svg';

export const Header = () => {
  const { openSearchModal, openMenuModal } = useHandleModals();
  const { isLogin, login, logout } = useLog();

  return (
    <HeaderStyle.HeaderContainer>
      <HeaderStyle.Logo to='/'>
        <LogoImage className='header-logo' />
      </HeaderStyle.Logo>
      <HeaderStyle.MenuContainer>
        {HEADER_MENU.map(({ link, id, title }) => (
          <NavLink
            key={id}
            to={link}
            className={({ isActive }) => (isActive ? 'select' : 'unselect')}
          >
            <span>{title}</span>
          </NavLink>
        ))}
      </HeaderStyle.MenuContainer>
      <HeaderStyle.IconContainer>
        {isLogin ? <p onClick={logout}>로그아웃</p> : <p onClick={login}>로그인</p>}
        <SearchIcon onClick={openSearchModal} />
        <CategoryMenuIcon />
        <HeaderStyle.MenuIcon
          icon={faBars}
          onClick={openMenuModal}
        />
      </HeaderStyle.IconContainer>
    </HeaderStyle.HeaderContainer>
  );
};
