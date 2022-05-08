import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const UserProfileLoadingSkeleton = () => (
  <Stack direction="row" spacing={2} alignItems="flex-end">
    <Skeleton variant="circular" width={192} height={192} />
    <Stack direction="column" spacing={1}>
      <Skeleton variant="text" width={75} />
      <Skeleton variant="rectangular" width={400} height={100} />
    </Stack>
  </Stack>
);
