import Drawer, { drawerClasses } from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';

import SpotifyWhiteLogo from './assets/Spotify_Logo_RGB_White.png';
import { SidebarMenu } from './SidebarMenu';

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
    <SidebarMenu />
  </Drawer>
);
