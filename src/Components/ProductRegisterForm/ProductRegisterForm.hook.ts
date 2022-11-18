import React, { useEffect, useRef, useState } from 'react';
import { DeepPartial, UseFormRegister, UseFormReset, UseFormSetValue } from 'react-hook-form';

import { ProductRegisterFormData } from './ProductRegisterForm.type';
import { getRemovedFileList } from './ProductRegisterForm.util';

import { addPriceComma, getBidPrice, removePriceEtc } from '@Util/.';

export const useImagePreviews = (images: FileList) => {
  const [imagePreviews, setImagePreview] = useState<string[]>([]);
  useEffect(() => {
    if (!images) return;
    setImagePreview(
      [...images].map((imageFile: Blob | MediaSource) => URL.createObjectURL(imageFile)),
    );
  }, [images]);
  return imagePreviews;
};

export const useImages = (setValue: UseFormSetValue<ProductRegisterFormData>) => {
  const imageRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<FileList>(imageRef.current?.files as FileList);

  useEffect(() => {
    setValue('images', images);
  }, [images]);

  const handleImageAdd = () => imageRef.current?.click();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages(e.target.files as FileList);
  };

  const handleImageRemove = (removeImageIdx: number) => {
    const removedFileList = getRemovedFileList(images, removeImageIdx);
    setImages(removedFileList);
  };

  return { imageRef, handleImageAdd, images, handleImageChange, handleImageRemove, setImages };
};

export const usePriceFormatting = (
  setValue: UseFormSetValue<ProductRegisterFormData>,
  register: UseFormRegister<ProductRegisterFormData>,
) => {
  useEffect(() => {
    register('buyNowPrice', { value: '0원' });
    register('auctionStartPrice', { value: '0원' });
    register('auctionBidPrice', { value: '0원' });
  }, [register]);

  const handleBuyNowPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number.isNaN(Number(removePriceEtc(e.target.value)))) return;

    setValue('buyNowPrice', `${addPriceComma(String(e.target.value))}원`);
  };

  const handleAuctionStartPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('auctionStartPrice', `${addPriceComma(String(e.target.value))}원`);
    setValue('auctionBidPrice', `${addPriceComma(getBidPrice(e.target.value))}원`);
  };

  return { handleBuyNowPriceChange, handleAuctionStartPriceChange };
};

export const useResetDefaultValue = (
  defaultValues: DeepPartial<ProductRegisterFormData>,
  reset: UseFormReset<ProductRegisterFormData>,
  setImages: React.Dispatch<React.SetStateAction<FileList>>,
) => {
  useEffect(() => {
    reset(defaultValues);

    if (defaultValues.images) setImages(defaultValues.images);
  }, [reset, defaultValues]);
};
