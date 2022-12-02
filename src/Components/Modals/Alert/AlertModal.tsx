import { Alert, AlertTitle } from '@mui/material';
import React from 'react';

import { useCloseAlert } from './AlertModal.hook';
import { Snackbar } from './AlertModal.style';
import { AlertModalProps } from './AlertModal.type';

export const AlertModal: React.FC<AlertModalProps> = ({
  message,
  time,
  type,
  title,
}: AlertModalProps) => {
  const handleClose = useCloseAlert();

  return (
    <Snackbar
      autoHideDuration={time}
      open
      onClose={handleClose}
    >
      <Alert
        severity={type}
        onClose={handleClose}
      >
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
};
