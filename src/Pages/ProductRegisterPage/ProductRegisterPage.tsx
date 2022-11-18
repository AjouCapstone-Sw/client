import { FORM_DEFAULT_VALUE } from './ProductRegisterPage.const';

import { ProductRegisterForm } from '@Components/.';
import { ProductRegisterFormData } from '@Components/ProductRegisterForm/ProductRegisterForm.type';

export const ProductReigsterPage = () => {
  const onSubmit = (data: ProductRegisterFormData) => {
    console.log(data);
  };

  return (
    <ProductRegisterForm
      onSubmit={onSubmit}
      defaultValues={FORM_DEFAULT_VALUE}
    />
  );
};
