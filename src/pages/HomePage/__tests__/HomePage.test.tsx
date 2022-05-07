import userEvent from '@testing-library/user-event';

import { render, screen } from 'utils/testUtils';

import HomePage from '..';

describe('HomePage', () => {
  const setup = () => render(<HomePage />);

  describe('DESCRIBE_TEST_1', () => {
    // TODO: update this test case
    test('TEST_CASE_1', async () => {
      setup();

      const logInToSpotifyBtn = await screen.findByRole('button', { name: /log in/i });
      userEvent.click(logInToSpotifyBtn);
    });
  });
});
