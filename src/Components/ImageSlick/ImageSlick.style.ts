import SSlider from 'react-slick';
import styled from 'styled-components';

const Slider = styled(SSlider)`
  .slick-slider {
    height: 500px !important;
  }
  .slick-list {
    width: 500px !important;
    height: 500px !important;
    margin: auto;
  }
  img {
    border-radius: 8px;
    overflow: hidden;
    margin: 0 auto;
    aspect-ratio: 4/3;
    width: 500px;
  }

  button {
    z-index: 10;
    margin: 0px 40px;
    background: none;
  }
  .slick-dots {
    margin-bottom: 50px;
  }
  .slick-dots li.slick-active button:before {
    color: ${({ theme }) => theme.color.white};
  }
`;

export default { Slider };
