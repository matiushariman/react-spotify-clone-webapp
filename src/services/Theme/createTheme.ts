import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#1db954' },
    secondary: { main: '#191414' },
  },
  typography: {
    fontFamily: ['sans-serif', '"Helvetica Neue"', 'Helvetica', 'Arial'].join(','),
  },
  components: {
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
  },
});
