import ListItemIcon, { ListItemIconProps } from '@mui/material/ListItemIcon';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';

export type UserMenuItemProps = MenuItemProps & {
  icon: ListItemIconProps['children'];
};

export const UserMenuItem = ({ onClick, icon, children, ...rest }: UserMenuItemProps) => (
  <MenuItem
    {...rest}
    onClick={onClick}
    sx={(theme) => ({
      color: theme.palette.common.white,
      fontSize: '0.75rem',
      opacity: 0.6,
      transition: '0.4s',
      '&:hover': {
        opacity: 1,
      },
    })}
  >
    <ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon>
    {children}
  </MenuItem>
);
