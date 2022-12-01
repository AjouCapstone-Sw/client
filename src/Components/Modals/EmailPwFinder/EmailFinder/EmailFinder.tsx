/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useHandleOnsubmit } from './EmailFinder.hook';
import EmailFinderStyle from './EmailFinder.style';
import { EmailFinderForm } from './EmailFinder.type';

import { Input, Calendar, Button } from '@Components/.';

export const EmailFinder = () => {
  const { register, control, handleSubmit: handleFindEmailSubmit } = useForm<EmailFinderForm>();

  const [email, setEmail] = useState<string>('');
  const handleSubmit = useHandleOnsubmit(setEmail);
  return (
    <EmailFinderStyle.Container onSubmit={handleFindEmailSubmit(handleSubmit)}>
      <EmailFinderStyle.EmailResContainer>
        {email && (
          <p>
            <p>이메일 찾기 결과:</p>
            <span className='finded-email'>{email}</span>
          </p>
        )}
      </EmailFinderStyle.EmailResContainer>
      <label>닉네임</label>
      <Input {...register('nickName')} />
      <label>생년월일</label>
      <Calendar
        control={control}
        name='birth'
        label='생년월일'
      />
      <Button>이메일 찾기</Button>
    </EmailFinderStyle.Container>
  );
};
