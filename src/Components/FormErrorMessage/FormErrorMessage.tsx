import { FieldError } from 'react-hook-form';

import { ErrorMsg } from './FormErrorMessage.style';

export const FormErrorMessage = ({ error }: { error?: FieldError }) => (
  <ErrorMsg>{error?.message}</ErrorMsg>
);
