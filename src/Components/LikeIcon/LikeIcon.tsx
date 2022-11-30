import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { useLikeIcon } from './LikeIcon.hook';
import { HeartIcon } from './LikeIcon.style';
import { LikeIconProps } from './LikeIcon.type';

export const LikeIcon = ({ productId, like }: LikeIconProps) => {
  const { isLike, handleLike } = useLikeIcon(like, productId);
  return (
    <HeartIcon
      icon={faHeart}
      className={isLike ? '' : ''}
      onClick={handleLike}
    />
  );
};
