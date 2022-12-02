import { AlertColor } from '@mui/material';

export type AlertModalProps = {
  message: string;
  time: number;
  type: AlertColor;
  title: string;
};
