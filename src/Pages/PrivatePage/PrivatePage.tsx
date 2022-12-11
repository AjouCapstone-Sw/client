import { Navigate } from 'react-router-dom';

import { PrivatePageProps } from './PrivatePage.type';

import { getUserId } from '@Util/LocalStorage';

export const PrivatePage = ({ component: Component }: PrivatePageProps) => {
  const user = getUserId();
  return <>{!user ? <Navigate to='/login' /> : <Component />} </>;
};
