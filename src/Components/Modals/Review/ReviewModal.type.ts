export type ReviewModalProps = {
  productId: number;
  type: 'auction' | 'buy';
  userId: string;
};

export type ReviewFormData = {
  userId: string;
  productId: number;
  review: string;
  score: number;
};
