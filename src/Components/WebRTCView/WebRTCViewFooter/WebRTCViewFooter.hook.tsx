import { useForm } from 'react-hook-form';

import { AuctionChatInput } from './WebRTCViewFooter.type';
import { handleChatMessageSend } from './WebRTCViewFooter.util';

const NICKNAME = 'yj';

export const useSendChatMessage = () => {
  const { register, handleSubmit, resetField } = useForm<AuctionChatInput>();
  const onSubmitCallback = handleSubmit(
    handleChatMessageSend(NICKNAME, () => resetField('message')),
  );

  return {
    register: register('message'),
    handleSubmit: onSubmitCallback,
  };
};
