import TextField from '@mui/material/TextField';
import { LocalizationProvider, DateTimePicker as MDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Controller, FieldValues } from 'react-hook-form';

import { DateTimePickerChildProp, DateTimePickerProp } from './DateTimePicker.type';

const DateTimePickerChild = <T extends FieldValues>({
  field: { value, onChange },
  label,
  className,
}: DateTimePickerChildProp<T>) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <MDateTimePicker
      label={label}
      onChange={(date) => {
        onChange(dayjs(date).format('YYYY-MM-DD hh:mm'));
      }}
      value={value}
      renderInput={(params) => <TextField {...params} />}
      className={className}
    />
  </LocalizationProvider>
);

export const DateTimePicker = <T extends FieldValues>({
  control,
  label,
  name,
  className,
}: DateTimePickerProp<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <DateTimePickerChild
        field={field}
        label={label}
        className={className}
      />
    )}
  />
);
