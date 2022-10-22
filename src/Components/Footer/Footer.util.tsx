import { FOOTER_DATA } from './Footer.const';

export const getCurrentPageName = () => {
  const { pathname } = window.location;
  const [currentPageId] = FOOTER_DATA.filter(({ link }) => link === pathname).map(({ id }) => id);
  return currentPageId;
};
