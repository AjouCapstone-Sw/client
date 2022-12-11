import Slider from 'react-slick';
import styled from 'styled-components';

const MainItemSetContainer = styled.div`
  margin-top: 40px;
  padding: 0px 10px;
`;
const HomeLiveSlider = styled(Slider)`
  .slick-prev {
    margin-left: 100px;
    z-index: 1;
  }
  .slick-next {
    margin-right: 100px;
    z-index: 1;
  }
`;
export default { MainItemSetContainer, HomeLiveSlider };
