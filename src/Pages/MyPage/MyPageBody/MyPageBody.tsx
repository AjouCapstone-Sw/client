import React from 'react';

import { MyPageBodyProps } from '../MyPage.type';
import { getMyPageBodyChildren } from './MyPageBody.util';

export const MyPageBody = ({ bodyDatas }: MyPageBodyProps) => {
  const [item] = bodyDatas;
  const ChildComponent = getMyPageBodyChildren(item);
  // if (bodyDatas.length === 0) return <h1 className='big-empty-text'>텅~</h1>;

  return <>{bodyDatas.map((bodyData) => ChildComponent(bodyData as any))}</>;
};
