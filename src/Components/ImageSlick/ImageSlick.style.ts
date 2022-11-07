import SSlider from 'react-slick';
import styled from 'styled-components';

const Slider = styled(SSlider)`
  .slick-slider {
    height: 500px !important;
  }
  .slick-list {
    height: 500px !important;
  }
  img {
    border-radius: 8px;
    overflow: hidden;
    margin: 0 auto;
    aspect-ratio: 4/3;
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
