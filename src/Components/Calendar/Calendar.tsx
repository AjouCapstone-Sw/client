import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type CalendarProp<T extends FieldValues> = {
  control: Control<T>;
  label: string;
  name: Path<T>;
};

export const Calendar = <T extends FieldValues>({ control, label, name }: CalendarProp<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onChange, value } }) => (
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          label={label}
          onChange={(date) => {
            onChange(moment(date).format('YYYY-MM-DD'));
          }}
          value={value}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    )}
  />
);
