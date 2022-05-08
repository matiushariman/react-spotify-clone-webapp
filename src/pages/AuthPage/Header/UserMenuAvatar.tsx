import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';

import { selectUserImage } from '../selectors';

export const UserMenuAvatar = () => {
  const userImage = useSelector(selectUserImage);

  if (userImage !== null) {
    return <Avatar src={userImage} alt="user image" />;
  }

  return (
    <Avatar>
      <AccountCircleIcon />
    </Avatar>
  );
};
