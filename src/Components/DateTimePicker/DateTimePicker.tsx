import TextField from '@mui/material/TextField';
import { LocalizationProvider, DateTimePicker as MDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Controller, FieldValues } from 'react-hook-form';

import { DateTimePickerChildProp, DateTimePickerProp } from './DateTimePicker.type';

const DateTimePickerChild = <T extends FieldValues>(props: DateTimePickerChildProp<T>) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <MDateTimePicker
      {...props}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
);

export const DateTimePicker = <T extends FieldValues>({
  control,
  name,
  ...rest
}: DateTimePickerProp<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { value, onChange } }) => (
      <DateTimePickerChild
        {...rest}
        value={value}
        onChange={(date) => {
          onChange(dayjs(date).format('YYYY-MM-DD hh:mm'));
        }}
      />
    )}
  />
);
