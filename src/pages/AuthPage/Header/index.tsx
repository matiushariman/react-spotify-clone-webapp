import Skeleton from '@mui/material/Skeleton';
import Toolbar from '@mui/material/Toolbar';
import { useSelector } from 'react-redux';

import { UserMenu } from './UserMenu';
import { selectIsGetMeLoading } from '../selectors';

export const Header = () => {
  const isLoadingProfile = useSelector(selectIsGetMeLoading);

  return (
    <Toolbar sx={{ justifyContent: 'flex-end' }}>
      {isLoadingProfile ? <Skeleton width={100} height={32} /> : <UserMenu />}
    </Toolbar>
  );
};
