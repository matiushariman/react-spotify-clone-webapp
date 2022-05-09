import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

import { MyTopArtistCard } from './MyTopArtistCard';
import { selectIsLoadingMyTopArtists, selectMyTopArtists } from '../../../selectors';

export const MyTopArtistsList = () => {
  const isLoadingMyTopArtists = useSelector(selectIsLoadingMyTopArtists);
  const myTopArtists = useSelector(selectMyTopArtists);

  if (isLoadingMyTopArtists) {
    return null;
  }

  if (myTopArtists.length === 0) {
    return <Typography align="center">You currently don&apos;t have any top artists.</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {myTopArtists.slice(0, 4).map((artist) => (
        <Grid item xs={12} md={3} key={artist.id}>
          <MyTopArtistCard
            externalUrl={artist.external_urls.spotify}
            name={artist.name}
            images={artist.images}
            type={artist.type}
          />
        </Grid>
      ))}
    </Grid>
  );
};
