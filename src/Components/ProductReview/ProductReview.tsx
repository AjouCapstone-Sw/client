import ProductReviewStyle from './ProductReview.style';

import { productReviewType } from '@Pages/MyPage/MyPage.type';
import { makeStar } from '@Util/Star';

export const ProductReview = ({
  nickName,
  review,
  score,
  createdAt,
  productImage,
}: productReviewType) => (
  <ProductReviewStyle.Container>
    <div>
      <img
        src={productImage}
        alt='상품 이미지'
      />
    </div>
    <ProductReviewStyle.TextContainer>
      <ProductReviewStyle.ReviewInfoContainer>
        <span>{nickName}</span>
        <div>
          <span>{makeStar({ score })}</span>
          <span>{createdAt}</span>
        </div>
      </ProductReviewStyle.ReviewInfoContainer>
      <pre>{review}</pre>
    </ProductReviewStyle.TextContainer>
  </ProductReviewStyle.Container>
);
