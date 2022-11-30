import { faHeart, faHeartCrack } from '@fortawesome/free-solid-svg-icons';

import { useLikeIcon } from './LikeIcon.hook';
import { HeartIcon } from './LikeIcon.style';
import { LikeIconProps } from './LikeIcon.type';

export const LikeIcon = ({ productId, like }: LikeIconProps) => {
  const { isLike, handleLike } = useLikeIcon(like, productId);
  const icon = isLike ? faHeart : faHeartCrack;
  return (
    <HeartIcon
      icon={icon}
      className='like-icon'
      onClick={handleLike}
    />
  );
};
