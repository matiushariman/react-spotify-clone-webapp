import Container from '@mui/material/Container';

import { Helmet } from 'components/Helmet';
import { UserProfile } from './UserProfile';

const ProfilePage = () => (
  <>
    <Helmet title="My Profile" />
    <Container>
      <UserProfile />
    </Container>
  </>
);

export default ProfilePage;
