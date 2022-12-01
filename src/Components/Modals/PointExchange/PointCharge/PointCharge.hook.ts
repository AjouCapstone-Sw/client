import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PointExchangeModal } from '../PointExchangeModal';
import { postChargePoint } from './PointCharge.util';

import { useModal } from '@Hook/useModal';
import { addPriceComma, getId, isPriceNaN, removePriceEtc } from '@Util/.';

export const usePointCharge = () => {
  const [chargePoint, setChargePoint] = useState<string>('');
  const handlePointChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    if (isPriceNaN(userInput)) return;
    setChargePoint(`${addPriceComma(e.target.value)}원`);
  };

  const handlePointChargeButton = (plusChargePoint: number) => {
    setChargePoint(
      (prevChargePoint) =>
        `${addPriceComma(Number(removePriceEtc(prevChargePoint)) + plusChargePoint)}원`,
    );
  };
  return { chargePoint, handlePointChange, handlePointChargeButton };
};

export const useHandlePointCharge = (chargePoint: string) => {
  const { closeModal } = useModal();
  const navigator = useNavigate();
  const userId = Number(getId()!);

  const closePointChargeModal = () => closeModal(PointExchangeModal as React.FC);

  const handlePointCharge = async () => {
    const convertedChargePoint = Number(removePriceEtc(chargePoint));
    await postChargePoint(userId, convertedChargePoint);
    closePointChargeModal();
    navigator(0);
  };
  return handlePointCharge;
};
