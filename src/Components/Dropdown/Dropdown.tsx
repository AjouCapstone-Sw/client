import { Controller, FieldValues } from 'react-hook-form';
import ReactDropdown from 'react-select';
import styled from 'styled-components';

import { DropdownProp } from './Dropdown.type';

const SDropdown = styled(ReactDropdown)`
  width: 100%;
`;

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
      <SDropdown
        options={options}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    )}
  />
);
