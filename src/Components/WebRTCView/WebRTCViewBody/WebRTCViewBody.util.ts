export const getNowPrice = (startPrice: number, currentPrice: number) => {
  if (startPrice > currentPrice) return startPrice;
  return currentPrice;
};
