import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import { HEADER_MENU } from './Header.const';
import { useHandleModals } from './Header.hook';
import HeaderStyle from './Header.style';

import { CategoryMenuIcon, LogoImage, SearchIcon } from '@Components/Svg';

export const Header = () => {
  const { openSearchModal, openMenuModal } = useHandleModals();

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
