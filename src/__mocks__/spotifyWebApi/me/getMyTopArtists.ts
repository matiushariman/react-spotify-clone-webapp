import { rest } from 'msw';

export const GET_MY_TOP_ARTISTS_PATH = 'https://api.spotify.com/v1/me/top/artists';
export const getMyTopArtistsResponse = {
  items: [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/4phGZZrJZRo4ElhRtViYdl',
      },
      followers: {
        href: null,
        total: 6641053,
      },
      genres: ['acoustic pop', 'neo mellow', 'pop', 'pop rock'],
      href: 'https://api.spotify.com/v1/artists/4phGZZrJZRo4ElhRtViYdl',
      id: '4phGZZrJZRo4ElhRtViYdl',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5ebce8d5be6690c6964069ab8e0',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab67616100005174ce8d5be6690c6964069ab8e0',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f178ce8d5be6690c6964069ab8e0',
          width: 160,
        },
      ],
      name: 'Jason Mraz',
      popularity: 75,
      type: 'artist',
      uri: 'spotify:artist:4phGZZrJZRo4ElhRtViYdl',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/2kmqC9MlfEgzrf2l58vHnK',
      },
      followers: {
        href: null,
        total: 779,
      },
      genres: [],
      href: 'https://api.spotify.com/v1/artists/2kmqC9MlfEgzrf2l58vHnK',
      id: '2kmqC9MlfEgzrf2l58vHnK',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2734ba4c32d0da2c108660550df',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e024ba4c32d0da2c108660550df',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048514ba4c32d0da2c108660550df',
          width: 64,
        },
      ],
      name: 'Evening Chillout Playlist',
      popularity: 27,
      type: 'artist',
      uri: 'spotify:artist:2kmqC9MlfEgzrf2l58vHnK',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/5Z1CCuBsyhEHngq3U5IraY',
      },
      followers: {
        href: null,
        total: 2858750,
      },
      genres: ['boy band', 'dance pop', 'europop'],
      href: 'https://api.spotify.com/v1/artists/5Z1CCuBsyhEHngq3U5IraY',
      id: '5Z1CCuBsyhEHngq3U5IraY',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5ebceead049d538f0b5087041dd',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab67616100005174ceead049d538f0b5087041dd',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f178ceead049d538f0b5087041dd',
          width: 160,
        },
      ],
      name: 'Westlife',
      popularity: 71,
      type: 'artist',
      uri: 'spotify:artist:5Z1CCuBsyhEHngq3U5IraY',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/0du5cEVh5yTK9QJze8zA0C',
      },
      followers: {
        href: null,
        total: 40247454,
      },
      genres: ['dance pop', 'pop'],
      href: 'https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C',
      id: '0du5cEVh5yTK9QJze8zA0C',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab67616100005174c36dd9eb55fb0db4911f25dd',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f178c36dd9eb55fb0db4911f25dd',
          width: 160,
        },
      ],
      name: 'Bruno Mars',
      popularity: 90,
      type: 'artist',
      uri: 'spotify:artist:0du5cEVh5yTK9QJze8zA0C',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/4aXXDj9aZnlshx7mzj3W1N',
      },
      followers: {
        href: null,
        total: 522408,
      },
      genres: ['hollywood', 'show tunes'],
      href: 'https://api.spotify.com/v1/artists/4aXXDj9aZnlshx7mzj3W1N',
      id: '4aXXDj9aZnlshx7mzj3W1N',
      images: [
        {
          height: 1000,
          url: 'https://i.scdn.co/image/84dc87cca456089fc5cfa2d7593d9d960ca4553f',
          width: 1000,
        },
        {
          height: 640,
          url: 'https://i.scdn.co/image/d96d04e545d45bab308e6738010fe06d0ba61aac',
          width: 640,
        },
        {
          height: 200,
          url: 'https://i.scdn.co/image/f1eabec743f61a0a6197426e4114a0baec6f84a0',
          width: 200,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/9a2842c6035165a615b50c8aed217b58699f174d',
          width: 64,
        },
      ],
      name: 'Lin-Manuel Miranda',
      popularity: 76,
      type: 'artist',
      uri: 'spotify:artist:4aXXDj9aZnlshx7mzj3W1N',
    },
  ],
  total: 50,
  limit: 20,
  offset: 0,
  previous: null,
  href: 'https://api.spotify.com/v1/me/top/artists',
  next: 'https://api.spotify.com/v1/me/top/artists?limit=20&offset=20',
};

export const getMyTopArtistsHandler = [
  rest.get(GET_MY_TOP_ARTISTS_PATH, (req, res, ctx) =>
    res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(getMyTopArtistsResponse),
    ),
  ),
];
