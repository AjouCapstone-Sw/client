import React, { useEffect, useRef, useState } from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { ProductRegisterForm } from './ProductRegisterPage.type';
import { getRemovedFileList } from './ProductRegisterPage.util';

import { addPriceComma, getBidPrice, removePriceEtc } from '@Util/.';

export const useImagePreviews = (images: FileList) => {
  const [imagePreviews, setImagePreview] = useState<string[]>([]);
  useEffect(() => {
    if (images?.length === 0) return;
    setImagePreview(
      [...images].map((imageFile: Blob | MediaSource) => URL.createObjectURL(imageFile)),
    );
  }, [images]);
  return imagePreviews;
};

export const useImages = (setValue: UseFormSetValue<ProductRegisterForm>) => {
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

  return { imageRef, handleImageAdd, images, handleImageChange, handleImageRemove };
};

export const usePriceFormatting = (
  setValue: UseFormSetValue<ProductRegisterForm>,
  register: UseFormRegister<ProductRegisterForm>,
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
