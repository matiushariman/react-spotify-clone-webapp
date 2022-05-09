import { rest } from 'msw';

export const GET_ME_PATH = 'https://api.spotify.com/v1/me';
export const getMeResponse = {
  country: 'SG',
  display_name: 'MHN',
  email: 'mhn@gmail.com',
  explicit_content: {
    filter_enabled: false,
    filter_locked: false,
  },
  external_urls: {
    spotify: 'https://open.spotify.com/user/matiushariman',
  },
  followers: {
    href: null,
    total: 21,
  },
  href: 'https://api.spotify.com/v1/users/matiushariman',
  id: 'mhn',
  images: [
    {
      height: null,
      url: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10203018924387262&height=300&width=300&ext=1654615080&hash=AeSMwlC1_AhMMF0Qvnk',
      width: null,
    },
  ],
  product: 'premium',
  type: 'user',
  uri: 'spotify:user:mhn',
};

export const meHandlers = [
  rest.get(GET_ME_PATH, (req, res, ctx) =>
    res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(getMeResponse),
    ),
  ),
];
