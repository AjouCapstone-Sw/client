import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import { Control, Controller, ControllerRenderProps, FieldValues, Path } from 'react-hook-form';

type CalendarProp<T extends FieldValues> = {
  control: Control<T>;
  label: string;
  name: Path<T>;
};

type CalendarChildProp<T extends FieldValues> = {
  field: ControllerRenderProps<T, Path<T>>;
} & Pick<CalendarProp<T>, 'label'>;

const CalendarChild = <T extends FieldValues>({
  field: { value, onChange },
  label,
}: CalendarChildProp<T>) => (
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
