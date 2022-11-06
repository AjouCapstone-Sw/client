import styled from 'styled-components';

import { UserCircle as SUserCircle } from '@Components/Svg';

const ImgBox = styled.div`
  height: 500px;
  max-width: 650px;
  margin: auto;
  margin-top: 20px;
`;

const ProductContainer = styled.div`
  position: relative;
  margin: auto;
  max-width: 650px;
  width: 90%;
  overflow-y: scroll;
`;
const SellerInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px auto;
  ::after {
    content: '';
    position: absolute;
    margin-top: 68px;
    display: block;
    width: 100%;
    border-bottom: 1px solid #9b9a97;
  }
`;

const UserCircle = styled(SUserCircle)`
  width: 40px;
  height: 40px;
`;

const UserName = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-left: 8px;
`;

const ReviewContainer = styled.div`
  position: absolute;
  right: 0;

  p + p {
    margin-top: 8px;
  }
`;

const ReviewAnchor = styled.p`
  opacity: 0.7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 16px;
    height: 16px;
    margin-left: 10px;
  }
`;
const ProductTitle = styled.p`
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.base};
`;

const ProductText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 16px 0px;
`;

const ProductHighlightText = styled(ProductText)`
  font-weight: ${({ theme }) => theme.fontWeight.base};
  margin: 8px 0px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  border-radius: 16px;
  display: flex;
  bottom: 0;
  margin-top: 48px;

  button {
    margin: 0.5px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  span {
    margin-left: 8px;
  }
`;

export default {
  ProductContainer,
  ImgBox,
  SellerInfoContainer,
  ProductTitle,
  ProductText,
  ProductHighlightText,
  UserCircle,
  UserName,
  ReviewContainer,
  ReviewAnchor,
  ButtonContainer,
};
