import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';

import { selectUserImage } from '../../selectors';

export type UserAvatarProps = {
  height?: HTMLImageElement['height'];
  width?: HTMLImageElement['width'];
};

export const UserAvatar = ({ width, height }: UserAvatarProps) => {
  const userImage = useSelector(selectUserImage);
  const imageSize = width && height ? { width, height } : {};

  if (userImage !== null) {
    return <Avatar src={userImage} alt="user image" sx={imageSize} />;
  }

  return (
    <Avatar>
      <AccountCircleIcon />
    </Avatar>
  );
};
