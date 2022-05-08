import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

import { UserProfileLoadingSkeleton } from './UserProfileLoadingSkeleton';
import { UserAvatar } from '../../components/UserAvatar';
import { selectDisplayName, selectNoOfFollowers, selectIsGetMeLoading } from '../../selectors';

export const UserProfile = () => {
  const isLoadingProfile = useSelector(selectIsGetMeLoading);
  const displayName = useSelector(selectDisplayName);
  const noOfFollowers = useSelector(selectNoOfFollowers);

  if (isLoadingProfile) {
    return <UserProfileLoadingSkeleton />;
  }

  return (
    <Stack spacing={4} direction="row" alignItems="flex-end">
      <UserAvatar width={192} height={192} />
      <Stack spacing={1} direction="column">
        <Typography textTransform="uppercase" variant="body2" fontWeight="bold">
          Profile
        </Typography>
        <Typography variant="h2" fontWeight="bold">
          {displayName}
        </Typography>
        <Typography variant="body2">{noOfFollowers} Followers</Typography>
      </Stack>
    </Stack>
  );
};
