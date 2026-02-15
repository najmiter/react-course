import { useTheme } from '@/hooks/use-theme';
import React from 'react';

// 1. create the context
const ThemeContext = React.createContext<ReturnType<typeof useTheme> | null>(null);

// 2. create the provider
export default function ThemeProvider({ children }: React.PropsWithChildren) {
  const theme = useTheme();

  return <ThemeContext value={theme}>{children}</ThemeContext>;
}

// 3. create the consumer hook
// eslint-disable-next-line react-refresh/only-export-components
export function useThemeContext() {
  const data = React.use(ThemeContext);
  if (!data) throw new Error('ThemeContext used outside of the provider');
  return data;
}
