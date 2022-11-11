import { faXmark } from '@fortawesome/free-solid-svg-icons';

import ImageSliderStyle from './ImageSlider.style';
import { ImageSliderProps } from './ImageSlider.type';

export const ImageSlider = ({ images, onRemove }: ImageSliderProps) => (
  <ImageSliderStyle.Container>
    {images.map((image, imageIdx) => (
      <div
        className='image-slider-content-container'
        key={image}
      >
        <img
          src={image}
          alt='preview_image'
        />
        <ImageSliderStyle.CancleButton
          icon={faXmark}
          onClick={() => onRemove(imageIdx)}
        />
      </div>
    ))}
  </ImageSliderStyle.Container>
);
