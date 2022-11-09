import { useForm } from 'react-hook-form';
import ReactModal from 'react-modal';

import { SEARCH_MODAL_PROPS } from '../Modal.const';
import SearchModalStyle from './SearchModal.style';
import { SearchModalInput } from './SearchModal.type';

import { useModal } from '@Hook/useModal';

export const SearchModal = () => {
  const { closeModal } = useModal();
  const closeSearchModal = () => closeModal(SearchModal);
  const { register, handleSubmit: handleSearch } = useForm<SearchModalInput>();

  const onSubmit = (data: SearchModalInput) => {
    const { inputValue } = data;
    console.log(inputValue);
  };

  return (
    <ReactModal
      {...SEARCH_MODAL_PROPS}
      onRequestClose={() => closeModal(SearchModal)}
    >
      <SearchModalStyle.SearchModalContainer>
        <SearchModalStyle.SearchBar>
          <form onSubmit={handleSearch(onSubmit)}>
            <input
              placeholder='원하는 물품을 검색해 보세요'
              {...register('inputValue')}
            />
          </form>
          <button
            type='button'
            onClick={closeSearchModal}
          >
            취소
          </button>
        </SearchModalStyle.SearchBar>
      </SearchModalStyle.SearchModalContainer>
    </ReactModal>
  );
};
