import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';

import SpotifyLogoBlack from './assets/Spotify_Logo_RGB_Black.png';

import type { Theme } from '@mui/material/styles';

export const Header = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const imgSize = isDesktop ? { width: 182, height: 56 } : { width: 136, height: 42 };

  return (
    <AppBar color="transparent" position="static">
      <Toolbar sx={{ justifyContent: 'space-around' }}>
        <img
          src={SpotifyLogoBlack}
          alt="spotify logo"
          width={imgSize.width}
          height={imgSize.height}
        />
      </Toolbar>
    </AppBar>
  );
};
