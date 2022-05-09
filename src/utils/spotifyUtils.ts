import SpotifyWebApi from 'spotify-web-api-js';

export const initializeSpotify = (accessToken: string) => {
  const Spotify = new SpotifyWebApi();

  Spotify.setAccessToken(accessToken);

  return Spotify;
};
