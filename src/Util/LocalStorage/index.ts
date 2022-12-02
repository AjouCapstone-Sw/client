export const getUserId = () => {
  const userId = sessionStorage.getItem('userId');
  return userId;
};

export const getId = () => {
  const id = sessionStorage.getItem('id');
  return id;
};

export const setUserId = (userId: string) => {
  sessionStorage.setItem('userId', userId);
};

export const setId = (id: string) => {
  sessionStorage.setItem('id', id);
};
