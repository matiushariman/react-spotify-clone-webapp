import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Helmet } from 'components/Helmet';

import { Header } from './Header';

const HomePage = () => (
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
            <Button size="large">Log in to Spotify</Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  </>
);

export default HomePage;
