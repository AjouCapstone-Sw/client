/* eslint-disable jsx-a11y/label-has-associated-control */
import { Switch } from '@mui/material';
import { useForm } from 'react-hook-form';

import { useGetProductDetail } from '..';
import { useIsDefaultAddress, useOnSubmit, useOpenAddressModal } from './AddressRegisterPage.hook';
import AddressRegisterPageStyle from './AddressRegisterPage.style';
import { AddressRegisterForm } from './AddressRegisterPage.type';

import { Button, Input } from '@Components/index';
import { useQuerySearch } from '@Hook/useQuerySearch';
import { addPriceComma } from '@Util/Product';

export const AddressRegisterPage = () => {
  const [price, productId, seller, type, isBuyNow] = useQuerySearch([
    'price',
    'productId',
    'seller',
    'type',
    'buyNow',
  ]);

  const { title, buyNowPrice } = useGetProductDetail(Number(productId!));

  const {
    register,
    control,
    watch,
    setValue,
    handleSubmit: handleAddressSubmit,
  } = useForm<AddressRegisterForm>();

  const defaultAddress = '경기 성남시 분당구 판교역로 4';
  const openAddressModal = useOpenAddressModal(control);
  const { isDefaultAddress, onCheckChange } = useIsDefaultAddress(defaultAddress, setValue);
  const onSubmit = useOnSubmit(seller!, type!, productId!, Boolean(isBuyNow!));
  const newAddress = watch('address');

  return (
    <AddressRegisterPageStyle.Container>
      <AddressRegisterPageStyle.InfoText>
        결제된 포인트는{' '}
        <AddressRegisterPageStyle.Highlight>
          {addPriceComma(Number(price ?? buyNowPrice))}
        </AddressRegisterPageStyle.Highlight>
        원 입니다
      </AddressRegisterPageStyle.InfoText>
      <AddressRegisterPageStyle.InfoText>
        <AddressRegisterPageStyle.Highlight>{title}</AddressRegisterPageStyle.Highlight>에 대한 상품
        수령 주소를 입력해 주세요
      </AddressRegisterPageStyle.InfoText>
      <p>기존 주소지: {defaultAddress}</p>
      <label>기존 주소지 사용</label>
      <Switch
        checked={isDefaultAddress}
        onChange={onCheckChange}
      />
      {!isDefaultAddress && (
        <form>
          <Input
            placeholder='주소 입력'
            {...register('address')}
            onClick={openAddressModal}
            value={newAddress}
          />
        </form>
      )}
      <Button onClick={handleAddressSubmit(onSubmit)}>주소 제출하기</Button>
    </AddressRegisterPageStyle.Container>
  );
};
