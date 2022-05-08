import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import List from '@mui/material/List';

import { SidebarMenuItem } from './SidebarMenuItem';

const SIDEBAR_MENU = [
  {
    label: 'Profile',
    ActiveMenuIcon: <PersonIcon />,
    InactiveMenuIcon: <PersonOutlineOutlinedIcon />,
    url: '/auth/profile',
  },
];

export const SidebarMenu = () => (
  <List>
    {SIDEBAR_MENU.map((menu) => (
      <SidebarMenuItem
        key={menu.label}
        label={menu.label}
        ActiveMenuIcon={menu.ActiveMenuIcon}
        InactiveMenuIcon={menu.InactiveMenuIcon}
        url={menu.url}
      />
    ))}
  </List>
);
