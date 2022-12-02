import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const HeartIcon = styled(FontAwesomeIcon)`
  path {
    fill: ${({ theme }) => theme.color.danger};
  }
`;
