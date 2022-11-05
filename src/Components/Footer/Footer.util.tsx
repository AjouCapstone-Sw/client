import { FOOTER_DATA } from './Footer.const';

export const getCurrentPageName = (pathname: string) => {
  const [currentPageId] = FOOTER_DATA.filter(({ link }) => link === pathname).map(({ id }) => id);
  return currentPageId;
};
