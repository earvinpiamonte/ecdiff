import React from 'react';

import { getChromeData, setChromeData } from '../utils/ChromeStorage';

type ThemeContextTypes = {
  theme: string;
  nextTheme: string;
  setTheme: (theme: string) => void;
};

export const ThemeContext = React.createContext({} as ThemeContextTypes);

const ThemeProvider: React.FC<{ defaultTheme?: string }> = ({
  children,
  defaultTheme,
}) => {
  const addDarkClass = () => {
    const rootElementClassList = document.documentElement.classList;

    theme === 'dark'
      ? rootElementClassList.add('dark')
      : rootElementClassList.remove('dark');
  };

  const getThemeFromStorage = async () => {
    // Get from chrome storage
    const storedTheme: any = await getChromeData('theme', defaultTheme);
    setTheme(storedTheme);
    console.log({ storedTheme });
  };

  const saveThemeToStorage = async () => {
    // Save to chrome storage
    await setChromeData('theme', theme);
    console.log({ theme });
  };

  const [theme, setTheme] = React.useState(defaultTheme ?? 'light');
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  React.useEffect(() => {
    getThemeFromStorage();
  }, []);

  React.useEffect(() => {
    addDarkClass();
    saveThemeToStorage();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, nextTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
