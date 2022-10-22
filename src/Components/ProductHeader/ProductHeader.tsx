import ProductHeaderStyle from './ProductHeader.style';

import { SearchIcon } from '@Components/Svg';

export const ProductHeader = () => {
  console.log('1');
  return (
    <ProductHeaderStyle.HeaderContainer>
      <SearchIcon />
    </ProductHeaderStyle.HeaderContainer>
  );
};
