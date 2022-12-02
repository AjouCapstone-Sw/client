import { FORM_DEFAULT_VALUE } from './ProductRegisterPage.const';
import { useOnSubmit } from './ProductRegisterPage.hook';

import { ProductRegisterForm } from '@Components/.';

export const ProductReigsterPage = () => {
  const onSubmit = useOnSubmit();
  return (
    <ProductRegisterForm
      onSubmit={onSubmit}
      defaultValues={FORM_DEFAULT_VALUE}
    />
  );
};
