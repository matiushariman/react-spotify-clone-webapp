import { themeMode } from 'App/reducer';
import { selectThemeMode } from 'App/selectors';
import { useSelector } from 'hooks/useSelector';

export type UseDarkModeProps = {
  isDarkMode: boolean;
};

export const useDarkMode = (): UseDarkModeProps => {
  const mode = useSelector(selectThemeMode);
  const isDarkMode = mode === themeMode.dark;

  return { isDarkMode };
};
