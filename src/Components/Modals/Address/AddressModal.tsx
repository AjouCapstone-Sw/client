/* eslint-disable no-use-before-define */
import React from 'react';
import PostCode, { Address } from 'react-daum-postcode';
import { Controller, FieldValues } from 'react-hook-form';
import ReactModal from 'react-modal';

import { SEARCH_MODAL_PROPS } from '../Modal.const';
import AddressModalStyle from './AddressModal.style';
import { AddressModalChildProps, AddressModalProps } from './AddressModal.type';

import { useModal } from '@Hook/useModal';

const AddressModalChild = ({ onChange }: AddressModalChildProps) => {
  const { closeModal } = useModal();

  const closeAddressModal = () => closeModal(AddressModal as React.FC);

  const onComplete = (data: Address) => {
    onChange(data.address);
    closeAddressModal();
  };

  return <PostCode onComplete={onComplete} />;
};

export const AddressModal = <T extends FieldValues>({ control, name }: AddressModalProps<T>) => {
  const { closeModal } = useModal();

  const closeAddressModal = () => closeModal(AddressModal as React.FC);

  return (
    <ReactModal
      {...SEARCH_MODAL_PROPS}
      onRequestClose={closeAddressModal}
    >
      <AddressModalStyle.AddressModalContainer>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange } }) => <AddressModalChild onChange={onChange} />}
        />
      </AddressModalStyle.AddressModalContainer>
    </ReactModal>
  );
};
