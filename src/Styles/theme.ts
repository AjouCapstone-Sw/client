import { DefaultTheme } from 'styled-components';

export const mediaQuery = {
  mobile: 'screen and (hover: none) and (pointer: coarse)',
  small: 'screen and (max-width: 480px)',
  base: 'screen and (max-width: 768px)',
};

export const color = {
  dark: '#37352F',
  gray: '#9B9A97',
  primary: '#5db075',
  white: '#FFFFFF',
};

export const fontSize = {
  sm: '12px',
  m: '16px',
  l: '20px',
  xl: '24px',
};

export const fontWeight = {
  bold: '900',
  base: '600',
  light: '400',
};

export const theme: DefaultTheme = {
  mediaQuery,
  color,
  fontSize,
  fontWeight,
};
