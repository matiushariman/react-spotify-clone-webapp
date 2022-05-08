import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  custom: {
    background: {
      gradient: 'linear-gradient(rgba(0,0,0,.9) 0,#121212 100%)',
    },
  },
  palette: {
    primary: { main: '#1db954' },
    secondary: { main: '#191414' },
  },
  typography: {
    fontFamily: ['sans-serif', '"Helvetica Neue"', 'Helvetica', 'Arial'].join(','),
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        colorTransparent: ({ theme }) => ({
          borderBottom: `1px solid ${theme.palette.divider}`,
          [theme.breakpoints.up('md')]: {
            paddingTop: 16,
            paddingBottom: 16,
          },
          [theme.breakpoints.down('md')]: {
            paddingTop: 8,
            paddingBottom: 8,
          },
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          borderRadius: 500,
          fontWeight: 'bold',
          letterSpacing: 'normal',
          textTransform: 'uppercase',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '2rem',
          fontWeight: 'bold',
        },
      },
    },
  },
});
