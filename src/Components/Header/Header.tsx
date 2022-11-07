import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import { HEADER_MENU } from './Header.const';
import { useHandleModals } from './Header.hook';
import ProductHeaderStyle from './Header.style';

import { SearchIcon } from '@Components/Svg';

export const Header = () => {
  const { openSearchModal, openMenuModal } = useHandleModals();
  return (
    <ProductHeaderStyle.HeaderContainer>
      <ProductHeaderStyle.Logo to='/'>LOGO</ProductHeaderStyle.Logo>
      <ProductHeaderStyle.MenuContainer>
        {HEADER_MENU.map(({ link, id, title }) => (
          <NavLink
            key={id}
            to={link}
            className={({ isActive }) => (isActive ? 'select' : 'unselect')}
          >
            <span>{title}</span>
          </NavLink>
        ))}
      </ProductHeaderStyle.MenuContainer>
      <div>
        <SearchIcon onClick={openSearchModal} />
        <ProductHeaderStyle.MenuIcon
          icon={faBars}
          onClick={openMenuModal}
        />
      </div>
    </ProductHeaderStyle.HeaderContainer>
  );
};
