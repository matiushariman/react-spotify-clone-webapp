import LogoutIcon from '@mui/icons-material/Logout';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import Menu from '@mui/material/Menu';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { UserMenuItem } from './UserMenuItem';
import { UserAvatar } from '../components/UserAvatar';
import { selectDisplayName, selectExternalUrl } from '../selectors';

export const UserMenu = () => {
  const displayName = useSelector(selectDisplayName);
  const externalUrl = useSelector(selectExternalUrl);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenExternalurl = () => {
    if (externalUrl !== null) {
      window.open(externalUrl, '_blank');
    }
  };

  return (
    <>
      <Button
        size="small"
        color="secondary"
        startIcon={<UserAvatar />}
        id="user-menu-button"
        aria-controls={open ? 'user-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpenMenu}
      >
        {displayName}
      </Button>
      <Menu
        id="user-menu"
        aria-label="user menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'user-menu-button',
        }}
        PaperProps={{
          sx: (theme) => ({
            backgroundColor: theme.palette.secondary.main,
          }),
        }}
      >
        <UserMenuItem
          disabled={externalUrl === null}
          onClick={handleOpenExternalurl}
          icon={<OpenInNewIcon />}
        >
          Profile
        </UserMenuItem>
        <Divider />
        <UserMenuItem onClick={handleCloseMenu} icon={<LogoutIcon />}>
          Log out
        </UserMenuItem>
      </Menu>
    </>
  );
};
