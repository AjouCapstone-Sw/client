import React from 'react';

import { MyPageBodyProps } from '../MyPage.type';
import { getMyPageBodyChildren } from './MyPageBody.util';

export const MyPageBody = ({ bodyDatas }: MyPageBodyProps) => {
  if (bodyDatas.length === 0) return <h1>텅~</h1>;
  const [item] = bodyDatas;
  const ChildComponent = getMyPageBodyChildren(item);
  return <>{bodyDatas.map((bodyData) => ChildComponent(bodyData as any))}</>;
};
