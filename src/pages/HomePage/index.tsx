import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Helmet } from 'components/Helmet';

import { Header } from './Header';

const SCOPE = [
  'user-read-private',
  'user-read-email',
  'user-read-recently-played',
  'user-top-read',
  'user-follow-read',
  'user-follow-modify',
  'playlist-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
];

const LOGIN_URL = `https://accounts.spotify.com/authorize?client_id=${
  process.env.REACT_APP_CLIENT_ID
}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${SCOPE.join(' ')}&response_type=code`;

const HomePage = () => {
  // function to open Spotify Auth page
  const handleRedirectToSpotify: () => void = () => {
    window.open(LOGIN_URL, '_self');
  };

  return (
    <>
      <Helmet title="Home" />
      <Header />
      <Container
        sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-around', flexGrow: 1 }}
      >
        <Box>
          <Stack direction="column" spacing={4}>
            <Typography variant="h1" align="center">
              React Spotify Clone Webapp
            </Typography>
            <Box display="inline-flex" justifyContent="space-around">
              <Button onClick={handleRedirectToSpotify} size="large">
                Log in to Spotify
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
