import { Navigate } from 'react-router-dom';

import { IncomePageProps } from './IncomePage.type';

import { getUserId } from '@Util/LocalStorage';

export const IncomePage = ({ component: Component }: IncomePageProps) => {
  const user = getUserId();
  return <>{user ? <Navigate to='/' /> : <Component />} </>;
};
