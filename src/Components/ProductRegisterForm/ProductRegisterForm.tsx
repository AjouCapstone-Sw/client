/* eslint-disable jsx-a11y/label-has-associated-control */

import { Switch } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  TITLE_VALIDATION_OPTION,
  IMAGES_VALIDATION_OPTION,
  CONTENT_VALIDATION_OPTION,
  BUY_NOW_VALIDATION_OPTION,
} from './ProductRegisterForm.const';
import {
  usePriceFormatting,
  useImages,
  useImagePreviews,
  useResetDefaultValue,
} from './ProductRegisterForm.hook';
import ProductRegisterFormStyle from './ProductRegisterForm.style';
import { ProductRegisterFormData, ProductRegisterFormProps } from './ProductRegisterForm.type';

import { Button, ImageSlider, Input, AuctionEditForm } from '@Components/.';
import { AddImage } from '@Components/Svg';

export const ProductRegisterForm = ({ onSubmit, defaultValues }: ProductRegisterFormProps) => {
  const navigate = useNavigate();
  const {
    register,
    setValue,
    handleSubmit: handleProductRegisterSubmit,
    formState: { errors: registerValidationErrors },
    control,
    watch,
    reset,
  } = useForm<ProductRegisterFormData>({ defaultValues });

  const { handleBuyNowPriceChange, handleAuctionStartPriceChange } = usePriceFormatting(
    setValue,
    register,
  );

  const isAuction = watch('isAuction');

  const { imageRef, handleImageAdd, handleImageChange, handleImageRemove, images, setImages } =
    useImages(setValue);
  const imagePreviews = useImagePreviews(images);

  useResetDefaultValue(defaultValues, reset, setImages);

  return (
    <ProductRegisterFormStyle.Container>
      <form onSubmit={handleProductRegisterSubmit(onSubmit)}>
        <label htmlFor='title'>상품명</label>
        <Input {...register('title', { ...TITLE_VALIDATION_OPTION })} />
        <ProductRegisterFormStyle.ErrorMsg>
          {registerValidationErrors.title?.message}
        </ProductRegisterFormStyle.ErrorMsg>

        <label htmlFor='images'>상품 이미지</label>
        <ProductRegisterFormStyle.ImageContainer>
          <AddImage onClick={handleImageAdd} />
          <input
            {...register('images', { ...IMAGES_VALIDATION_OPTION })}
            type='file'
            multiple
            accept='image/*'
            ref={imageRef}
            onChange={handleImageChange}
          />
          <ImageSlider
            images={imagePreviews}
            onRemove={handleImageRemove}
          />
        </ProductRegisterFormStyle.ImageContainer>
        <ProductRegisterFormStyle.ErrorMsg>
          {registerValidationErrors.images?.message}
        </ProductRegisterFormStyle.ErrorMsg>

        <label htmlFor='content'>상품 설명</label>
        <ProductRegisterFormStyle.TextArea
          {...register('content', { ...CONTENT_VALIDATION_OPTION })}
        />
        <ProductRegisterFormStyle.ErrorMsg>
          {registerValidationErrors.content?.message}
        </ProductRegisterFormStyle.ErrorMsg>

        <label htmlFor='buyNowPrice'>즉시 구매가</label>
        <Input
          {...register('buyNowPrice', {
            ...BUY_NOW_VALIDATION_OPTION,
            onChange: handleBuyNowPriceChange,
          })}
        />
        <ProductRegisterFormStyle.ErrorMsg>
          {registerValidationErrors.buyNowPrice?.message}
        </ProductRegisterFormStyle.ErrorMsg>

        <label htmlFor='isAuction'>라이브 경매 진행 여부</label>
        <Switch {...register('isAuction')} />
        {isAuction && (
          <AuctionEditForm
            control={control}
            register={register}
            handleAuctionStartPriceChange={handleAuctionStartPriceChange}
          />
        )}

        <div className='register-button-container'>
          <Button onClick={() => navigate(-1)}>취소</Button>
          <Button>작성 완료</Button>
        </div>
      </form>
    </ProductRegisterFormStyle.Container>
  );
};
