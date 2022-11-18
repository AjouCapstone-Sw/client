/* eslint-disable jsx-a11y/label-has-associated-control */

import { Switch } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import ProductRegisterFormConst from './ProductRegisterForm.const';
import {
  usePriceFormatting,
  useImages,
  useImagePreviews,
  useResetDefaultValue,
} from './ProductRegisterForm.hook';
import ProductRegisterFormStyle from './ProductRegisterForm.style';
import { ProductRegisterFormData, ProductRegisterFormProps } from './ProductRegisterForm.type';

import { Button, ImageSlider, Input, AuctionEditForm, FormErrorMessage } from '@Components/.';
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
        <Input {...register('title', { ...ProductRegisterFormConst.TITLE_VALIDATION_OPTION })} />
        <FormErrorMessage error={registerValidationErrors.title} />

        <label htmlFor='images'>상품 이미지</label>
        <ProductRegisterFormStyle.ImageContainer>
          <AddImage onClick={handleImageAdd} />
          <input
            {...register('images', { ...ProductRegisterFormConst.IMAGES_VALIDATION_OPTION })}
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
        <FormErrorMessage error={registerValidationErrors.images} />

        <label htmlFor='content'>상품 설명</label>
        <ProductRegisterFormStyle.TextArea
          {...register('content', { ...ProductRegisterFormConst.CONTENT_VALIDATION_OPTION })}
        />
        <FormErrorMessage error={registerValidationErrors.content} />

        <label htmlFor='buyNowPrice'>즉시 구매가</label>
        <Input
          {...register('buyNowPrice', {
            ...ProductRegisterFormConst.BUY_NOW_VALIDATION_OPTION,
            onChange: handleBuyNowPriceChange,
          })}
        />
        <FormErrorMessage error={registerValidationErrors.buyNowPrice} />

        <label htmlFor='isAuction'>라이브 경매 진행 여부</label>
        <Switch
          {...register('isAuction')}
          checked={isAuction || false}
        />
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
