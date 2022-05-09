import userEvent from '@testing-library/user-event';

import { getMeResponse } from '__mocks__/spotifyWebApi/me/getMe';
import { render, screen } from 'utils/testUtils';

import AuthPage from '..';

describe('AuthPage', () => {
  const setup = () => render(<AuthPage />);

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
});
