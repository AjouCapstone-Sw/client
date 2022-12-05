import { useGetProductInfo } from './SellerIntroducePage.hook';
import SellerIntroducePageStyle from './SellerIntroducePage.style';

import { useMovePage } from '@Hook/useMovePage';
import { useQuerySearch } from '@Hook/useQuerySearch';
import { getId, getUserId } from '@Util/LocalStorage';
import { addPriceComma } from '@Util/Product';

export const SellerIntroducePage = () => {
  const userNickName = getUserId();
  const userId = getId();
  const [price, productId] = useQuerySearch(['price', 'productId']);
  const productInfo = useGetProductInfo(Number(productId), Number(userId));
  const [image] = productInfo.productImages;
  const [goMain, goInvoice] = useMovePage(['/', 'invoice']) as (() => void)[];
  return (
    <SellerIntroducePageStyle.Container>
      <SellerIntroducePageStyle.ImageContainer>
        <img
          src={image}
          alt='상품이미지'
        />
        <div>
          <p>상품명</p>
          <SellerIntroducePageStyle.Week>{productInfo.title}</SellerIntroducePageStyle.Week>
        </div>
      </SellerIntroducePageStyle.ImageContainer>
      <div>
        <div>
          <SellerIntroducePageStyle.Strong>{userNickName}</SellerIntroducePageStyle.Strong>
          <span> 님 안녕하세요</span>
        </div>
        <span>경매에서 진행하신 물품의 판매가는</span>
        <p>
          <SellerIntroducePageStyle.Strong>
            {addPriceComma(Number(price))}
          </SellerIntroducePageStyle.Strong>
          원 입니다.
        </p>
      </div>
      <SellerIntroducePageStyle.ButtonContainer>
        <button
          type='button'
          onClick={goInvoice}
        >
          운송장 등록하기
        </button>
        <button
          type='button'
          onClick={goMain}
        >
          다음에 등록하기
        </button>
      </SellerIntroducePageStyle.ButtonContainer>
    </SellerIntroducePageStyle.Container>
  );
};
