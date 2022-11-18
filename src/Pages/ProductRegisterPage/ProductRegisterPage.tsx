/* eslint-disable jsx-a11y/label-has-associated-control */
import { Switch } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  BUY_NOW_VALIDATION_OPTION,
  DESCRIPTION_VALIDATION_OPTION,
  IMAGES_VALIDATION_OPTION,
  TITLE_VALIDATION_OPTION,
} from './ProductRegisterPage.const';
import { usePriceFormatting, useImages, useImagePreviews } from './ProductRegisterPage.hook';
import ProductRegisterPageStyle from './ProductRegisterPage.style';
import { ProductRegisterForm } from './ProductRegisterPage.type';
import { makeAuctionProduct, makeNotAuctionProduct, makeProduct } from './ProductRegisterPage.util';

import { Button, ImageSlider, Input, AuctionEditForm, FormErrorMessage } from '@Components/.';
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
    // data에 userId 넣어줘야함
    // images 뽑아서 s3에 넣어서 그 url 넣어줘야함
    // auctionDuration이 안뽑힘 undefined
    const body = isAuction ? makeAuctionProduct(data) : makeNotAuctionProduct(data);
    makeProduct(body).then(() => navigate(-1));
  };

  return (
    <ProductRegisterPageStyle.Container>
      <form onSubmit={handleProductRegisterSubmit(onSubmit)}>
        <label htmlFor='title'>상품명</label>
        <Input {...register('title', { ...TITLE_VALIDATION_OPTION })} />
        <FormErrorMessage error={registerValidationErrors.title} />

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
        <FormErrorMessage error={registerValidationErrors.images} />

        <label htmlFor='description'>상품 설명</label>
        <ProductRegisterPageStyle.TextArea
          {...register('description', { ...DESCRIPTION_VALIDATION_OPTION })}
        />
        <FormErrorMessage error={registerValidationErrors.description} />

        <label htmlFor='buyNowPrice'>즉시 구매가</label>
        <Input
          {...register('buyNowPrice', {
            ...BUY_NOW_VALIDATION_OPTION,
            onChange: handleBuyNowPriceChange,
          })}
        />
        <FormErrorMessage error={registerValidationErrors.buyNowPrice} />

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
    </ProductRegisterPageStyle.Container>
  );
};
