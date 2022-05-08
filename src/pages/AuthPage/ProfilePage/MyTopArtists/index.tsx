import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { MyTopArtistsList } from './MyTopArtistsList';
import { getMyTopArtistsRequest } from '../../actions';

export const MyTopArtists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyTopArtistsRequest());
  }, []);

  return (
    <Stack direction="column" spacing={4}>
      <Stack direction="column">
        <Typography variant="h6" fontWeight="bold">
          Top artists this month
        </Typography>
        <Typography variant="caption" sx={{ opacity: 0.6 }}>
          Only visible to you
        </Typography>
      </Stack>
      <Box>
        <MyTopArtistsList />
      </Box>
    </Stack>
  );
};
