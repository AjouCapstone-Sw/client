import { Control, ControllerRenderProps, FieldValues, Path } from 'react-hook-form';

export type DateTimePickerProp<T extends FieldValues> = {
  control: Control<T>;
  label: string;
  name: Path<T>;
  className?: string;
};

export type DateTimePickerChildProp<T extends FieldValues> = {
  field: ControllerRenderProps<T, Path<T>>;
} & Pick<DateTimePickerProp<T>, 'label' | 'className'>;
