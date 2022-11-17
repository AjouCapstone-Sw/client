import { MSW_MY_INFO, MSW_USER_INFO } from './const';

import { Props } from '@MSW/type';

export const mockGetMyInfo: Props = (req, res, ctx) => res(ctx.json(MSW_MY_INFO));

export const mockGetOtherInfo: Props = (req, res, ctx) => {
  const {
    params: { nickName },
  } = req;
  return res(ctx.json(MSW_USER_INFO[nickName as string]));
};
