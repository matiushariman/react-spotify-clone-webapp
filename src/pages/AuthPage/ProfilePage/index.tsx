import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { Helmet } from 'components/Helmet';
import { MyTopArtists } from './MyTopArtists';
import { UserProfile } from './UserProfile';

const ProfilePage = () => (
  <>
    <Helmet title="My Profile" />
    <Container>
      <Stack direction="column" spacing={8}>
        <UserProfile />
        <MyTopArtists />
      </Stack>
    </Container>
  </>
);

export default ProfilePage;
