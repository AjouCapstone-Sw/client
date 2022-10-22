import { Cart, Person, Home, Video } from '@Components/Svg';

export const FOOTER_DATA = [
  {
    id: 1,
    component: (select: boolean) => <Home className={select ? 'select' : 'unselect'} />,
    title: '홈',
    link: '/',
  },
  {
    id: 2,
    component: (select: boolean) => <Cart className={select ? 'select' : 'unselect'} />,
    title: '장터',
    link: '/list',
  },
  {
    id: 3,
    component: (select: boolean) => <Video className={select ? 'select' : 'unselect'} />,
    title: 'Live',
    link: '/live',
  },
  {
    id: 4,
    component: (select: boolean) => <Person className={select ? 'select' : 'unselect'} />,
    title: '마이페이지',
    link: '/my',
  },
];
