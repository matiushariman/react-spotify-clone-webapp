import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { Routes, Route } from 'react-router-dom';

import { server } from '__mocks__/server';
import { getMeResponse } from '__mocks__/spotifyWebApi/me/getMe';
import {
  getMyTopArtistsResponse,
  GET_MY_TOP_ARTISTS_PATH,
} from '__mocks__/spotifyWebApi/me/getMyTopArtists';
import { render, screen } from 'utils/testUtils';

import AuthPage from '..';
import ProfilePage from '../ProfilePage';

describe('AuthPage', () => {
  const setup = () =>
    render(
      <Routes>
        <Route element={<AuthPage />} path="auth">
          <Route element={<ProfilePage />} path="profile" />
        </Route>
      </Routes>,
      {
        route: '/auth/profile',
      },
    );

  describe('Header', () => {
    test('open user menu when clicking on user menu button', async () => {
      setup();

      const userMenuBtn = await screen.findByRole('button', {
        name: new RegExp(getMeResponse.display_name, 'i'),
      });
      userEvent.click(userMenuBtn);

      const userMenu = await screen.findByRole('presentation', { name: /user/i });

      expect(userMenu).toBeInTheDocument();
    });
  });

  describe('Sidebar', () => {
    test('profile is set as active menu item upon landing', async () => {
      setup();

      const profileMenuBtn = await screen.findByRole('button', { name: /profile/i });
      expect(profileMenuBtn).toHaveStyle('opacity: 1');
    });
  });

  describe('ProfilePage', () => {
    describe('UserProfile', () => {
      test('Display user profile information', async () => {
        setup();

        // cause avatar is displayed twice
        const avatar = await screen.findAllByAltText(/user image/i);

        expect(avatar).toHaveLength(2);

        // cause displayName is displayed twice
        const displayName = await screen.findAllByText(new RegExp(getMeResponse.display_name, 'i'));

        expect(displayName).toHaveLength(2);

        const noOfFollowers = await screen.findByText(
          new RegExp(`${getMeResponse.followers.total} followers`, 'i'),
        );

        expect(noOfFollowers).toBeInTheDocument();
      });
    });

    describe('MyTopArtists', () => {
      test('display my top artists if data exists', async () => {
        setup();

        const myTopArtists = await screen.findAllByRole('button', { name: /view artist/i });
        expect(myTopArtists).toHaveLength(4);
      });

      test('display no data text if data does not exist', async () => {
        const response = {
          ...getMyTopArtistsResponse,
          items: [],
          total: 0,
        };
        server.use(
          rest.get(GET_MY_TOP_ARTISTS_PATH, (req, res, ctx) =>
            res(
              // Respond with a 200 status code
              ctx.status(200),
              ctx.json(response),
            ),
          ),
        );

        setup();

        const noArtistText = await screen.findByText(
          new RegExp("You currently don't have any top artists.", 'i'),
        );

        expect(noArtistText).toBeInTheDocument();
      });
    });
  });
});
