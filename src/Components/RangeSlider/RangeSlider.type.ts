import { SliderProps } from '@mui/material';
import { Control, ControllerRenderProps, FieldValues, Path } from 'react-hook-form';

export type RangeSliderProp<T extends FieldValues> = {
  control: Control<T>;
  className?: string;
  name: Path<T>;
  props: SliderProps;
};

export type RangeSliderChildProp<T extends FieldValues> = {
  field: ControllerRenderProps<T, Path<T>>;
} & Pick<RangeSliderProp<T>, 'className'>;
