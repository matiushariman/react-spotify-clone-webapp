import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';

import { configureStore, PreloadedState } from 'configureStore';

import { Providers } from '../Providers';

import type { To } from 'history';
import type { ReactElement, ComponentType } from 'react';

export type AllTheProvidersProps = {
  children: ReactElement;
};

export type RenderOptions = {
  preloadedState?: PreloadedState;
  route?: To;
};

const customRender = (ui: ReactElement, { preloadedState, route }: RenderOptions = {}) => {
  const { store, history } = configureStore(preloadedState);

  if (route) {
    history.push(route);
  }

  const AllTheProviders = ({ children }: AllTheProvidersProps) => (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Providers>{children}</Providers>
      </HistoryRouter>
    </Provider>
  );

  return render(ui, { wrapper: AllTheProviders as ComponentType });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
