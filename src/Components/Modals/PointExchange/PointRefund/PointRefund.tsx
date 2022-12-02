import { POINT_CHARGE_BUTTON } from '../PointCharge/PointCharge.const';
import { useHandlePointChange, usePointExchange } from '../PointExchangeModal.hook';
import PointRefundStyle from './PointRefund.style';

import { Input, Button } from '@Components/.';
import { LogoImage } from '@Components/Svg';

export const PointRefund = () => {
  const {
    chargePoint: refundPoint,
    handlePointChange,
    handlePointChargeButton,
  } = usePointExchange();

  const handlePointChangeClick = useHandlePointChange(refundPoint, false);
  return (
    <PointRefundStyle.Container>
      <PointRefundStyle.Title>
        <LogoImage />
        <p>현실 돈으로</p>
      </PointRefundStyle.Title>

      <Input
        value={refundPoint}
        onChange={handlePointChange}
        placeholder='환전할 금액을 입력해주세요'
      />
      <PointRefundStyle.ChargePriceButtonContainer>
        {POINT_CHARGE_BUTTON.map(({ id, text, plusChargePoint }) => (
          <Button
            key={id}
            onClick={() => handlePointChargeButton(plusChargePoint)}
          >
            {text}
          </Button>
        ))}
      </PointRefundStyle.ChargePriceButtonContainer>
      <Button
        className='point-refund-button'
        onClick={handlePointChangeClick}
      >
        {refundPoint} 환전하기
      </Button>
    </PointRefundStyle.Container>
  );
};
