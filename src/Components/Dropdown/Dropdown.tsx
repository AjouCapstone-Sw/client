import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import ReactDropdown from 'react-select';
import styled from 'styled-components';

type DropdownProp<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  options: { value: string; label: string }[];
  placeholder: string;
  rules: object;
};

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
