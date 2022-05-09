import { rest } from 'msw';
import { meHandlers } from './spotifyWebApi/me/getMe';

import type { SubmitCredentialRequestProps } from 'api/exampleApi';

export const handlers = [
  rest.post('/login', (req: { body: SubmitCredentialRequestProps }, res, ctx) =>
    res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({ success: true }),
    ),
  ),
  ...meHandlers,
];
