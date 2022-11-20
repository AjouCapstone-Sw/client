/* eslint-disable no-unused-vars */
import { SliderProps } from '@mui/material';
import { Control, FieldValues, Path, PathValue } from 'react-hook-form';

export type RangeSliderProp<T extends FieldValues> = {
  control: Control<T>;
  className?: string;
  name: Path<T>;
  props: SliderProps;
};

export type RangeSliderChildProp<T extends FieldValues> = {
  // value: PathValue<T, Path<T>>;
  onChange: (...event: any[]) => void;
} & Pick<RangeSliderProp<T>, 'className'>;
