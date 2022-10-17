import { Control, ControllerRenderProps, FieldValues, Path } from 'react-hook-form';

export type CalendarProp<T extends FieldValues> = {
  control: Control<T>;
  label: string;
  name: Path<T>;
};

export type CalendarChildProp<T extends FieldValues> = {
  field: ControllerRenderProps<T, Path<T>>;
} & Pick<CalendarProp<T>, 'label'>;
