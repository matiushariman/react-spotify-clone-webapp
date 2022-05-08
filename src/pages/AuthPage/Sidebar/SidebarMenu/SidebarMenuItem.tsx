import ListItemButton, { listItemButtonClasses } from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useLocation, useNavigate } from 'react-router-dom';

export type SidebarMenuItemProps = {
  label: string;
  ActiveMenuIcon: JSX.Element;
  InactiveMenuIcon: JSX.Element;
  url: string;
};

export const SidebarMenuItem = ({
  label,
  ActiveMenuIcon,
  InactiveMenuIcon,
  url,
}: SidebarMenuItemProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const selected = location.pathname === url;

  // function to handle route navigation
  const handleNavigateView = () => {
    navigate(url);
  };

  return (
    <ListItemButton
      sx={{
        opacity: 0.6,
        transition: '0.4s',
        '&:hover': {
          opacity: 1,
        },
        [`&.${listItemButtonClasses.selected}`]: {
          backgroundColor: 'transparent',
          opacity: 1,
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      }}
      selected={selected}
      onClick={handleNavigateView}
    >
      <ListItemIcon sx={{ color: 'inherit' }}>
        {selected ? ActiveMenuIcon : InactiveMenuIcon}
      </ListItemIcon>
      <ListItemText
        primaryTypographyProps={{
          variant: 'body2',
          fontWeight: 700,
        }}
        primary={label}
      />
    </ListItemButton>
  );
};
