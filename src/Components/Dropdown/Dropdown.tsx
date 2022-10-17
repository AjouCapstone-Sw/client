import { Controller, FieldValues } from 'react-hook-form';

import DropdownStyle from './Dropdown.style';
import { DropdownProp } from './Dropdown.type';

export const Dropdown = <T extends FieldValues>({
  control,
  name,
  options,
  placeholder,
  rules,
}: DropdownProp<T>) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({ field: { onChange, value } }) => (
      <DropdownStyle.SDropdown
        options={options}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    )}
  />
);
