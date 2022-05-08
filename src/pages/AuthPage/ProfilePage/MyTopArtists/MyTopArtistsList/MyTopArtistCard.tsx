import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import { lighten } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export type MyTopArtistCardProps = {
  externalUrl: string;
  images: ImageObject[];
  name: string;
  type: string;
};

export const MyTopArtistCard = ({ externalUrl, images, name, type }: MyTopArtistCardProps) => {
  // function to open new spotify tab
  const handleOpenArtistOnSpotify = () => {
    window.open(externalUrl, '_blank');
  };

  return (
    <Card
      onClick={handleOpenArtistOnSpotify}
      role="button"
      elevation={0}
      sx={{
        transition: '0.4s',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: lighten('#181818', 0.2),
        },
      }}
    >
      <CardMedia component="img" height={140} image={images[0].url} alt="image" />
      <CardContent>
        <Stack direction="column">
          <Typography fontWeight="bold" noWrap>
            {name}
          </Typography>
          <Typography textTransform="capitalize" sx={{ opacity: 0.6 }}>
            {type}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
