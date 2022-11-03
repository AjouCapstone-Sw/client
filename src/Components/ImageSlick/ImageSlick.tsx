import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SLICK_SETTING } from './ImageSlick.const';
import ImageSlickStyle from './ImageSlick.style';

export const ImageSlick = ({ images }: { images: string[] }) => (
  <ImageSlickStyle.Slider {...SLICK_SETTING}>
    {images.map((image) => (
      <img
        key={image}
        src={image}
        alt='product'
      />
    ))}
  </ImageSlickStyle.Slider>
);
