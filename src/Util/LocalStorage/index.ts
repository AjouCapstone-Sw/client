export const getUserId = () => {
  const userId = localStorage.getItem('userId');
  return userId;
};

export const setUserId = (userId: string) => {
  localStorage.setItem('userId', userId);
};
