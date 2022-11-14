/* eslint-disable jsx-a11y/label-has-associated-control */
import { Switch } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  BUY_NOW_VALIDATION_OPTION,
  CONTENT_VALIDATION_OPTION,
  IMAGES_VALIDATION_OPTION,
  SLIDER_PROPS,
  TITLE_VALIDATION_OPTION,
} from './ProductRegisterPage.const';
import { usePriceFormatting, useImages, useImagePreviews } from './ProductRegisterPage.hook';
import ProductRegisterPageStyle from './ProductRegisterPage.style';
import { ProductRegisterForm } from './ProductRegisterPage.type';

import { Button, ImageSlider, Input, DateTimePicker, RangeSlider } from '@Components/.';
import { AddImage } from '@Components/Svg';

export const ProductReigsterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    setValue,
    handleSubmit: handleProductRegisterSubmit,
    formState: { errors: registerValidationErrors },
    control,

    watch,
  } = useForm<ProductRegisterForm>({ defaultValues: { buyNowPrice: '0' } });

  const { handleBuyNowPriceChange, handleAuctionStartPriceChange } = usePriceFormatting(
    setValue,
    register,
  );

  const isAuction = watch('isAuction');

  const { imageRef, handleImageAdd, handleImageChange, handleImageRemove, images } =
    useImages(setValue);

  const imagePreviews = useImagePreviews(images);

  const onSubmit = (data: ProductRegisterForm) => {
    console.log(data);
  };

  return (
    <ProductRegisterPageStyle.Container>
      <form onSubmit={handleProductRegisterSubmit(onSubmit)}>
        <label htmlFor='title'>상품명</label>
        <Input {...register('title', { ...TITLE_VALIDATION_OPTION })} />
        <ProductRegisterPageStyle.ErrorMsg>
          {registerValidationErrors.title?.message}
        </ProductRegisterPageStyle.ErrorMsg>

        <label htmlFor='images'>상품 이미지</label>
        <ProductRegisterPageStyle.ImageContainer>
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
        </ProductRegisterPageStyle.ImageContainer>
        <ProductRegisterPageStyle.ErrorMsg>
          {registerValidationErrors.images?.message}
        </ProductRegisterPageStyle.ErrorMsg>

        <label htmlFor='content'>상품 설명</label>
        <ProductRegisterPageStyle.TextArea
          {...register('content', { ...CONTENT_VALIDATION_OPTION })}
        />
        <ProductRegisterPageStyle.ErrorMsg>
          {registerValidationErrors.content?.message}
        </ProductRegisterPageStyle.ErrorMsg>

        <label htmlFor='buyNowPrice'>즉시 구매가</label>
        <Input
          {...register('buyNowPrice', {
            ...BUY_NOW_VALIDATION_OPTION,
            onChange: handleBuyNowPriceChange,
          })}
        />
        <ProductRegisterPageStyle.ErrorMsg>
          {registerValidationErrors.buyNowPrice?.message}
        </ProductRegisterPageStyle.ErrorMsg>

        <label htmlFor='isAuction'>라이브 경매 진행 여부</label>
        <Switch {...register('isAuction')} />
        {isAuction && (
          <>
            <label>경매 시작가</label>
            <Input
              {...register('auctionStartPrice', {
                onChange: handleAuctionStartPriceChange,
              })}
            />
            <label>경매 진행 호가</label>
            <Input
              {...register('auctionBidPrice')}
              disabled
            />
            <div>
              <label>경매 시작 시간</label>
              <DateTimePicker
                className='register-date-time-picker'
                control={control}
                label='시작시간'
                name='auctionStartTime'
              />
              <label className='register-sldier-label'>경매 기간</label>
              <RangeSlider
                props={SLIDER_PROPS}
                control={control}
                className='register-slider'
                name='auctionDuration'
              />
            </div>
          </>
        )}

        <div className='register-button-container'>
          <Button onClick={() => navigate(-1)}>취소</Button>
          <Button>작성 완료</Button>
        </div>
      </form>
    </ProductRegisterPageStyle.Container>
  );
};
