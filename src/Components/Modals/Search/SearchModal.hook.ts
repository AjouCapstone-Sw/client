import { useNavigate } from 'react-router-dom';

import { SearchModal } from './SearchModal';
import { SearchModalInput } from './SearchModal.type';

import { useModal } from '@Hook/useModal';

export const useSearchModal = () => {
  const navigator = useNavigate();

  const { closeModal } = useModal();

  const closeSearchModal = () => closeModal(SearchModal);

  const onSubmit = (data: SearchModalInput) => {
    const { inputValue } = data;
    if (inputValue !== '') navigator(`/list?keyword=${inputValue}`);
    closeSearchModal();
  };

  return { onSubmit, closeSearchModal };
};
