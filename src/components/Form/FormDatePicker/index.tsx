import MuiDatePicker, { DatePickerProps as MuiDatePickerProps } from '@mui/lab/DatePicker';
import TextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

import type { ControlledComponentProps } from '../types';

export type FormDatePickerProps = ControlledComponentProps & {
  DatePickerProps?: MuiDatePickerProps;
  TextFieldProps?: MuiTextFieldProps;
};

/**
 * the date value is of Dayjs object
 */
export const FormDatePicker = ({
  name,
  control,
  DatePickerProps,
  TextFieldProps,
}: FormDatePickerProps): JSX.Element => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <MuiDatePicker
        {...DatePickerProps}
        renderInput={(props) => <TextField fullWidth {...props} {...TextFieldProps} />}
        value={field.value}
        onChange={(date) => field.onChange(date)}
      />
    )}
  />
);
