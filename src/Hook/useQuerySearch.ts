import { useLocation } from 'react-router-dom';

export const useQuerySearch = (searchQueries: string[]) => {
  const { search } = useLocation();
  const queries = new URLSearchParams(search);
  return searchQueries.map((query) => queries.get(query));
};
