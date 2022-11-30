import { Control, FieldValues, Path } from 'react-hook-form';

export type DropdownProp<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  options: { value: string | number; label: string }[];
  placeholder: string;
  rules: object;
  id?: string;
};
