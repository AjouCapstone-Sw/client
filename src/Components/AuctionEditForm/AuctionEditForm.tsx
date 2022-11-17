/* eslint-disable jsx-a11y/label-has-associated-control */
import { SLIDER_PROPS } from './AuctionEditForm.const';
import { AuctionEditFormProps } from './AuctionEditForm.type';

import { DateTimePicker, Input, RangeSlider } from '@Components/.';

export const AuctionEditForm = ({
  control,
  register,
  handleAuctionStartPriceChange,
}: AuctionEditFormProps) => (
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
);
