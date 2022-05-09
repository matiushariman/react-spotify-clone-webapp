import userEvent from '@testing-library/user-event';
import { Routes, Route } from 'react-router-dom';

import { getMeResponse } from '__mocks__/spotifyWebApi/me/getMe';
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
});
