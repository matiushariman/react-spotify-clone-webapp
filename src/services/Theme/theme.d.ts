import type {
  Theme as DefaultTheme,
  ThemeOptions as DefaultThemeOptions,
} from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Theme extends DefaultTheme {
    custom: {
      background: {
        gradient: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions extends DefaultThemeOptions {
    custom?: {
      background?: {
        gradient?: string;
      };
    };
  }
}
