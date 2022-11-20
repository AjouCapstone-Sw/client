/* eslint-disable no-unused-vars */
import { Control, FieldValues, Path } from 'react-hook-form';

export type AddressModalProps<T extends FieldValues> = {
  control: Control<T, any>;
  name: Path<T>;
};

export type AddressModalChildProps = { onChange: (...event: any[]) => void };
