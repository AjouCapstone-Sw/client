/* eslint-disable no-unused-vars */
import { Control, ControllerRenderProps, FieldValues, Path, PathValue } from 'react-hook-form';

export type DateTimePickerProp<T extends FieldValues> = {
  control: Control<T>;
  label: string;
  name: Path<T>;
  className?: string;
};

export type DateTimePickerChildProp<T extends FieldValues> = {
  value: PathValue<T, Path<T>>;
  onChange: (...event: any[]) => void;
} & Pick<DateTimePickerProp<T>, 'label' | 'className'>;
