import { useQuerySearch } from '@Hook/useQuerySearch';

export const SellerIntroducePage = () => {
  const userId = localStorage.getItem('id');
  const [price] = useQuerySearch(['price']);
  return (
    <div>
      <p>{userId}님 안녕하세요</p>
      <p>오늘 경매 라이브에서 진행하신 물품의 판매가는 {price}입니다</p>
      <p>상품 배송, 등등 안내 ...</p>
    </div>
  );
};
