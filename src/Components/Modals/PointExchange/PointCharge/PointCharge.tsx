import { useHandlePointChange, usePointExchange } from '../PointExchangeModal.hook';
import { POINT_CHARGE_BUTTON } from './PointCharge.const';
import PointChargeStyle from './PointCharge.style';

import { Button, Input } from '@Components/.';
import { LogoImage } from '@Components/Svg';

export const PointCharge = () => {
  const { chargePoint, handlePointChange, handlePointChargeButton } = usePointExchange();
  const handlePointCharge = useHandlePointChange(chargePoint, true);

  return (
    <PointChargeStyle.Container>
      <PointChargeStyle.Title>
        <LogoImage />
        <p>개러지마켓 포인트로</p>
      </PointChargeStyle.Title>

      <Input
        value={chargePoint}
        onChange={handlePointChange}
        placeholder='충전할 금액을 입력해주세요'
      />
      <PointChargeStyle.ChargePriceButtonContainer>
        {POINT_CHARGE_BUTTON.map(({ id, text, plusChargePoint }) => (
          <Button
            key={id}
            onClick={() => handlePointChargeButton(plusChargePoint)}
          >
            {text}
          </Button>
        ))}
      </PointChargeStyle.ChargePriceButtonContainer>
      <Button
        className='point-charge-button'
        onClick={handlePointCharge}
      >
        {chargePoint} 충전하기
      </Button>
    </PointChargeStyle.Container>
  );
};
