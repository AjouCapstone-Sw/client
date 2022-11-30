/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import ReactModal from 'react-modal';

import { MODAL_PROPS } from '../Modal.const';
import { useCloseReview, useHandleScore, useOnSubmit } from './ReviewModal.hook';
import ReviewModalStyle from './ReviewModal.style';
import { ReviewFormData, ReviewModalProps } from './ReviewModal.type';

import { Button } from '@Components/.';
import { makeStar } from '@Util/Star';

export const ReviewModal: React.FC<ReviewModalProps> = ({
  type,
  productId,
  userId,
}: ReviewModalProps) => {
  const handleClose = useCloseReview();
  const {
    register,
    handleSubmit: handleSubmitReview,
    setValue,
  } = useForm<ReviewFormData>({
    defaultValues: { productId, userId },
  });
  const onSubmit = useOnSubmit({ type, closeReviewModal: handleClose });
  const { score, handleScoreChange } = useHandleScore(setValue);

  return (
    <ReactModal
      {...MODAL_PROPS}
      onRequestClose={handleClose}
    >
      <ReviewModalStyle.Container>
        <form>
          <label>평점을 선택해 주세요</label>
          <ReviewModalStyle.ScoreContainer>
            {makeStar({ score, handleScoreChange })}
          </ReviewModalStyle.ScoreContainer>
          <label>후기에 대해서 작성해 주세요</label>
          <ReviewModalStyle.TextArea {...register('review')} />
          <ReviewModalStyle.ButtonContainer>
            <Button onClick={handleClose}>나가기</Button>
            <Button onClick={handleSubmitReview(onSubmit)}>작성 완료</Button>
          </ReviewModalStyle.ButtonContainer>
        </form>
      </ReviewModalStyle.Container>
    </ReactModal>
  );
};
