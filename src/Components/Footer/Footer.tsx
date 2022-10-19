import React from 'react';

import { FOOTER_DATA } from './Footer.const';
import FooterStyle from './Footer.style';
import { getCurrentPageName } from './Footer.util';

import { useMovePage } from '@Hook/.';

export const Footer = () => {
  const currentPageId = getCurrentPageName();

  const [goPage] = useMovePage();
  const handleIconClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (!(e.currentTarget instanceof HTMLElement)) return undefined;
    const link = e.currentTarget.dataset?.link ?? '/';
    goPage(link);
  };
  return (
    <FooterStyle.FooterContainer>
      {FOOTER_DATA.map(({ id, component, title, link }) => (
        <FooterStyle.IconContainer
          key={id}
          data-link={link}
          onClickCapture={handleIconClick}
        >
          {component(currentPageId === id)}
          <span>{title}</span>
        </FooterStyle.IconContainer>
      ))}
    </FooterStyle.FooterContainer>
  );
};
