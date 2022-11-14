import Slider from '@mui/material/Slider';
import { Controller, FieldValues } from 'react-hook-form';

import { RangeSliderChildProp, RangeSliderProp } from './RangeSlider.type';

const RangeSliderChild = <T extends FieldValues>(props: RangeSliderChildProp<T>) => (
  <Slider {...props} />
);

export const RangeSlider = <T extends FieldValues>({
  control,
  name,
  props,
  className,
}: RangeSliderProp<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <RangeSliderChild
        {...props}
        className={className}
        field={field}
      />
    )}
  />
);
