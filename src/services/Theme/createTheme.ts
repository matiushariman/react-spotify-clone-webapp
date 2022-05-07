import { createTheme as createMuiTheme, Theme } from '@mui/material/styles';

import type { ThemeModeProps } from 'App/reducer';

const theme = createMuiTheme({});

export const createTheme = (mode: ThemeModeProps): Theme =>
  createMuiTheme({
    custom: {
      background: {
        gradient: 'linear-gradient(200.03deg, #2D9588 -41.04%, #7887B0 100.04%)',
        solid: '#1e1446',
        textColor: '#fff',
      },
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          color: 'default',
          elevation: 0,
          position: 'static',
        },
      },
      MuiButton: {
        defaultProps: {
          color: 'secondary',
          disableElevation: true,
          variant: 'contained',
        },
        styleOverrides: {
          contained: {
            borderRadius: 5,
            minWidth: 200,
            paddingBottom: 10,
            paddingTop: 10,
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: 'md',
        },
        styleOverrides: {
          root: {
            flexGrow: 1,
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: `
          html {
            -webkit-font-smoothing: antialiased;
          }
        `,
      },
      MuiFormControl: {
        defaultProps: {
          fullWidth: true,
        },
      },
      MuiIconButton: {
        defaultProps: {
          color: 'primary',
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          rounded: {
            borderRadius: 5,
          },
        },
      },
      MuiSelect: {
        defaultProps: {
          fullWidth: true,
        },
      },
      MuiTextField: {
        defaultProps: {
          fullWidth: true,
        },
      },
    },
    palette: {
      mode,
      error: {
        main: '#D75A4A',
      },
      primary: {
        main: '#1e1446',
      },
      secondary: {
        main: '#42e190',
      },
      success: {
        main: '#16C09C',
      },
    },
    typography: {
      fontFamily: 'Lato',
      h1: {
        fontSize: '2.25rem',
        fontWeight: 700,
        [theme.breakpoints.down('md')]: {
          fontSize: '1.5rem',
        },
      },
      h2: {
        fontSize: '1.375rem',
        fontWeight: 700,
        [theme.breakpoints.down('md')]: {
          fontSize: '1.125rem',
        },
      },
      h3: {
        fontSize: '1.125rem',
        fontWeight: 700,
      },
    },
  });
