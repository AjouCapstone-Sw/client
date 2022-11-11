import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;

  overflow-x: scroll;

  div {
    position: relative;
  }

  img {
    width: 150px;
    height: 150px;
    margin: 8px;
  }
  svg {
    position: absolute;
    left: 95px;
    top: -px;
    fill: ${({ theme }) => theme.color.danger};
    opacity: 0.7;
    path {
      fill: inherit;
    }

    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;

const CancleButton = styled(FontAwesomeIcon)``;

export default { Container, CancleButton };
