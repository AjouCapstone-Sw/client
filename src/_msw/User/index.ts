import { rest } from 'msw';

import { mockGetMyInfo, mockGetOtherInfo } from './handler';

export const UserInfoHandler = [
  rest.get('/api/v1/info', mockGetMyInfo),
  rest.get('/api/v1/info/:nickName', mockGetOtherInfo),
];
