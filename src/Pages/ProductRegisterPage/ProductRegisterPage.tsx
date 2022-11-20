import { FORM_DEFAULT_VALUE } from './ProductRegisterPage.const';
import { onSubmit } from './ProductRegisterPage.util';

import { ProductRegisterForm } from '@Components/.';

export const ProductReigsterPage = () => (
  <ProductRegisterForm
    onSubmit={onSubmit}
    defaultValues={FORM_DEFAULT_VALUE}
  />
);
