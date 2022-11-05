import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Controller, FieldValues } from 'react-hook-form';

import { CalendarChildProp, CalendarProp } from './Calendar.type';

const CalendarChild = <T extends FieldValues>({
  field: { value, onChange },
  label,
}: CalendarChildProp<T>) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      label={label}
      onChange={(date) => {
        onChange(dayjs(date).format('YYYY-MM-DD'));
      }}
      value={value}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
);

export const Calendar = <T extends FieldValues>({ control, label, name }: CalendarProp<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <CalendarChild
        field={field}
        label={label}
      />
    )}
  />
);
