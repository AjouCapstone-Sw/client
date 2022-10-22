import React from 'react';
import { NavLink } from 'react-router-dom';

import { FOOTER_DATA } from './Footer.const';
import FooterStyle from './Footer.style';
import { getCurrentPageName } from './Footer.util';

export const Footer = () => {
  const currentPageId = getCurrentPageName();
  return (
    <FooterStyle.FooterContainer>
      {FOOTER_DATA.map(({ id, component, title, link }) => (
        <NavLink
          key={id}
          data-link={link}
          to={link}
        >
          {component(currentPageId === id)}
          <span>{title}</span>
        </NavLink>
      ))}
    </FooterStyle.FooterContainer>
  );
};
