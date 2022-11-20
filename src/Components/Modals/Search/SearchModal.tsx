import { useForm } from 'react-hook-form';
import ReactModal from 'react-modal';

import { SEARCH_MODAL_PROPS } from '../Modal.const';
import { useSearchModal } from './SearchModal.hook';
import SearchModalStyle from './SearchModal.style';
import { SearchModalInput } from './SearchModal.type';

export const SearchModal = () => {
  const { register, handleSubmit: handleSearch } = useForm<SearchModalInput>();
  const { onSubmit, closeSearchModal } = useSearchModal();

  return (
    <ReactModal
      {...SEARCH_MODAL_PROPS}
      onRequestClose={closeSearchModal}
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
