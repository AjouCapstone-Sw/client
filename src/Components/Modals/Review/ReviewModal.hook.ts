import React, { useState } from 'react';
import { FieldValues, UseFormSetValue, Path } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ReviewModal } from './ReviewModal';
import { ReviewFormData, ReviewModalProps } from './ReviewModal.type';
import { createAuctionReview, createBuyReview } from './ReviewModal.util';

import { useModal } from '@Hook/useModal';

export const useCloseReview = () => {
  const { closeModal } = useModal();
  const closeReviewModal = () => closeModal(ReviewModal as React.FC);
  return closeReviewModal;
};

export const useOnSubmit = ({
  type,
  closeReviewModal,
}: Pick<ReviewModalProps, 'type'> & { closeReviewModal: () => void }) => {
  const navigator = useNavigate();
  const onSubmit = (data: ReviewFormData) => {
    if (type === 'auction') createAuctionReview(data);
    if (type === 'buy') createBuyReview(data);
    closeReviewModal();
    navigator('/');
  };
  return onSubmit;
};

export const useHandleScore = <T extends FieldValues>(setValue: UseFormSetValue<T>) => {
  const [score, setScore] = useState<number>(0);

  const handleScoreChange = (idx: number) => {
    setScore(idx);
    setValue('score' as Path<T>, idx as any);
  };

  return { score, handleScoreChange };
};
