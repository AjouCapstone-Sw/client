import 'styled-components';
import { Theme } from '../Styles/theme.type';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
