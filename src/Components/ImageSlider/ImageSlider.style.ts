import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;

  overflow-x: scroll;

  .image-slider-content-container {
    position: relative;
    min-width: 150px;
    margin: 8px;
  }

  img {
    width: 150px;
    height: 150px;
  }
  svg {
    position: absolute;
    left: 85px;
    top: -8px;

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
