import { fontSize, fontWeight, mediaQuery, color } from './theme';

type MediaQuery = typeof mediaQuery;

type FontSize = typeof fontSize;

type FontWeight = typeof fontWeight;

type Color = typeof color;

export type Theme = {
  mediaQuery: MediaQuery;
  fontSize: FontSize;
  fontWeight: FontWeight;
  color: Color;
};
