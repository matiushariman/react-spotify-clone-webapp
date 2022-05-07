import AdapterDayjs from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import { selectThemeMode } from 'App/selectors';
import { useSelector } from 'hooks';

import { createTheme } from './createTheme';

import type { ReactNode } from 'react';

export type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
  const mode = useSelector(selectThemeMode);
  const theme = createTheme(mode);

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};
