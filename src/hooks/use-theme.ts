import React from 'react';

export function useTheme() {
  type ThemeType = 'dark' | 'light';
  const [theme, setTheme] = React.useState<ThemeType>(() => {
    return (localStorage.getItem('theme') ?? 'dark') as ThemeType;
  });

  const toggleTheme = React.useCallback(() => {
    const updateTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(updateTheme);

    localStorage.setItem('theme', updateTheme);
    document.documentElement.setAttribute('class', updateTheme);
  }, [theme]);

  // React.useEffect(() => {
  //   document.documentElement.setAttribute('class', theme);
  //   // if (theme === 'dark') {
  //   //   document.documentElement.classList.add('dark');
  //   //   document.documentElement.classList.remove('light');
  //   // } else {
  //   //   document.documentElement.classList.remove('dark');
  //   //   document.documentElement.classList.add('light');
  //   // }
  // }, [theme]);

  return { toggleTheme, theme };
}
