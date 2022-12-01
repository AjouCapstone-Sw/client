import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postChangePoint } from './PointCharge/PointCharge.util';
import { PointExchangeModal } from './PointExchangeModal';

import { useModal } from '@Hook/useModal';
import { isPriceNaN, addPriceComma, removePriceEtc, getId } from '@Util/.';

export const useClosePointModal = () => {
  const { closeModal } = useModal();
  const closeReviewModal = () => closeModal(PointExchangeModal as React.FC);
  return closeReviewModal;
};

export const usePointExchangeSelect = () => {
  const [isChargeOrRefund, setIsChargeOrRefund] = useState<'charge' | 'refund'>('charge');
  const handleChargeOpen = () => setIsChargeOrRefund('charge');
  const handleRefundOpen = () => setIsChargeOrRefund('refund');

  return { isChargeOrRefund, handleChargeOpen, handleRefundOpen };
};

export const usePointExchange = () => {
  const [chargePoint, setChargePoint] = useState<string>('');
  const handlePointChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    if (isPriceNaN(userInput)) return;
    setChargePoint(`${addPriceComma(removePriceEtc(e.target.value))}원`);
  };

  const handlePointChargeButton = (plusChargePoint: number) => {
    setChargePoint(
      (prevChargePoint) =>
        `${addPriceComma(Number(removePriceEtc(prevChargePoint)) + plusChargePoint)}원`,
    );
  };
  return { chargePoint, handlePointChange, handlePointChargeButton };
};

export const useHandlePointChange = (changePoint: string, isCharge: boolean) => {
  const { closeModal } = useModal();
  const navigator = useNavigate();
  const userId = Number(getId()!);

  const closePointChargeModal = () => closeModal(PointExchangeModal as React.FC);

  const handlePointChangeClick = async () => {
    const convertedChargePoint = isCharge
      ? Number(removePriceEtc(changePoint))
      : -Number(removePriceEtc(changePoint));
    await postChangePoint(userId, convertedChargePoint);
    closePointChargeModal();
    navigator(0);
  };
  return handlePointChangeClick;
};
