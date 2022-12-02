import { FieldErrorsImpl, FieldValues, UseFormRegister, UseFormWatch } from 'react-hook-form';

export type PwRegisterProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  validationErrors: Partial<FieldErrorsImpl<T>>;
  watch: UseFormWatch<T>;
};
