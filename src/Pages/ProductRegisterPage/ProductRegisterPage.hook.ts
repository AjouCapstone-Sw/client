import React, { useEffect, useRef, useState } from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { getRemovedFileList } from './ProductPage.util';
import { ProductRegisterForm } from './ProductRegisterPage.type';

import { addPriceComma, getBidPrice, removePriceEtc } from '@Util/.';

const useImagePreviews = (images: FileList) => {
  const [imagePreviews, setImagePreview] = useState<string[]>([]);
  useEffect(() => {
    if (images?.length > 0) {
      setImagePreview(
        [...images].map((imageFile: Blob | MediaSource) => URL.createObjectURL(imageFile)),
      );
    }
  }, [images]);
  return imagePreviews;
};

const useImageSetValues = (images: FileList, setValue: UseFormSetValue<ProductRegisterForm>) => {
  useEffect(() => {
    setValue('images', images);
  }, [images]);
};

export const useImages = (setValue: UseFormSetValue<ProductRegisterForm>) => {
  const imageRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<FileList>(imageRef.current?.files as FileList);
  const imagePreviews = useImagePreviews(images);

  useImageSetValues(images, setValue);

  const handleImageAdd = () => imageRef.current?.click();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages(e.target.files as FileList);
  };

  const handleImageRemove = (removeImageIdx: number) => {
    const removedFileList = getRemovedFileList(images, removeImageIdx);
    setImages(removedFileList);
  };

  return { imageRef, handleImageAdd, images, handleImageChange, handleImageRemove, imagePreviews };
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
    console.log(Number.isNaN(removePriceEtc(e.target.value)));
    if (Number.isNaN(removePriceEtc(e.target.value))) return;

    setValue('buyNowPrice', `${addPriceComma(String(e.target.value))}원`);
  };

  const handleAuctionStartPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('auctionStartPrice', `${addPriceComma(String(e.target.value))}원`);
    setValue('auctionBidPrice', `${addPriceComma(getBidPrice(e.target.value))}원`);
  };

  return { handleBuyNowPriceChange, handleAuctionStartPriceChange };
};
