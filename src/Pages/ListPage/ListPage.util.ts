/* eslint-disable no-unused-vars */
export const getTransCategoryId = (categoryId: string) => {
  if (categoryId === '') return 1;
  const [_, category] = categoryId.split('?');
  return Number(category);
};
