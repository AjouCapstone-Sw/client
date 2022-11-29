import { FieldValues, Path } from 'react-hook-form';

import { FormErrorMessage, Input } from '..';
import { PASSWORD_VALIDATION_OPTION } from './PwRegister.const';
import { PwRegisterProps } from './PwRegister.type';

export const PwRegister = <T extends FieldValues>({
  register,
  validationErrors,
  watch,
}: PwRegisterProps<T>) => (
  <>
    <Input
      placeholder='비밀번호'
      type='password'
      {...register('password' as Path<T>, PASSWORD_VALIDATION_OPTION)}
    />
    <FormErrorMessage error={validationErrors.password as any} />
    <Input
      placeholder='비밀번호 확인'
      type='password'
      {...register('passwordValidate' as Path<T>, {
        required: '필수 응답 항목입니다.',
        validate: (val: string) =>
          watch('password' as Path<T>) === val || '비밀번호가 일치하지 않습니다',
      })}
    />
    <FormErrorMessage error={validationErrors.passwordValidate as any} />
  </>
);
