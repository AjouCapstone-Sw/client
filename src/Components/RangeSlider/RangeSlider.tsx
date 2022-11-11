import Slider from '@mui/material/Slider';
import { Controller, FieldValues } from 'react-hook-form';

import { RangeSliderChildProp, RangeSliderProp } from './RangeSlider.type';

const RangeSliderChild = <T extends FieldValues>({
  props,
  className,
  field: { onChange, value, ...field },
}: RangeSliderChildProp<T>) => (
  <Slider
    {...props}
    className={className}
    onChange={onChange}
    {...field}
  />
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
        props={props}
        className={className}
        field={field}
      />
    )}
  />
);
