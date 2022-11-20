import { useParams } from 'react-router-dom';

export const useProductId = () => {
  const { productId: param } = useParams();
  const productId = Number(param);
  return productId;
};
