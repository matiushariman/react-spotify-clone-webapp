import PersonIcon from '@mui/icons-material/Person';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton, { listItemButtonClasses } from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import SpotifyWhiteLogo from './assets/Spotify_Logo_RGB_White.png';

const DRAWER_WIDTH = 240;

export const Sidebar = () => (
  <Drawer
    sx={{
      width: DRAWER_WIDTH,
      flexShrink: 0,
      [`& .${drawerClasses.paper}`]: {
        width: DRAWER_WIDTH,
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <Toolbar sx={{ justifyContent: 'space-around' }}>
      <img src={SpotifyWhiteLogo} alt="spotify" width={130} height={40} />
    </Toolbar>
    <List>
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
      >
        <ListItemIcon sx={{ color: 'inherit' }}>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            variant: 'body2',
            fontWeight: 700,
          }}
          primary="Profile"
        />
      </ListItemButton>
    </List>
  </Drawer>
);
