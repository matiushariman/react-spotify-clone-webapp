import { render, screen, RenderOptions } from 'utils/testUtils';

import App from '..';

describe('App', () => {
  const setup = (renderOptions?: RenderOptions) => render(<App />, renderOptions);

  it('renders home page upon landing', () => {
    setup();

    const appTitle = screen.getByText(/react spotify/i);
    expect(appTitle).toBeInTheDocument();
  });

  it('redirect to profile page if accessToken is set', async () => {
    setup({ route: '/#access_token=abcd' });

    const profilePage = await screen.findByText(/profile/i);
    expect(profilePage).toBeInTheDocument();
  });

  it('redirect back to home page from protected route if accessToken is not set', async () => {
    setup({ route: '/auth/profile' });

    const appTitle = screen.getByText(/react spotify/i);
    expect(appTitle).toBeInTheDocument();
  });

  it('render protected route if accessToken is set', async () => {
    setup({
      preloadedState: {
        app: {
          accessToken: 'abcd',
        },
      },
      route: '/auth/profile',
    });

    const profilePage = await screen.findByText(/profile/i);
    expect(profilePage).toBeInTheDocument();
  });
});
