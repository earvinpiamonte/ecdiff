import React from 'react';

import { getChromeData, setChromeData } from '../utils/ChromeStorage';

type ThemeContextTypes = {
  theme: string;
  nextTheme: string;
  setTheme: (theme: string) => void;
};

export const ThemeContext = React.createContext({} as ThemeContextTypes);

let bodyInvisibilityTimeout = setTimeout(() => {});

const ThemeProvider: React.FC<{ defaultTheme?: string }> = ({
  children,
  defaultTheme,
}) => {
  const addDarkClass = () => {
    const rootElementClassList = document.documentElement.classList;

    theme === 'dark'
      ? rootElementClassList.add('dark')
      : rootElementClassList.remove('dark');

    // Remove the body invisibility class if it exists
    bodyInvisibilityTimeout = setTimeout(() => {
      document.body.classList.remove('invisible');
    }, 300);
  };

  const getThemeFromStorage = async () => {
    // Get from chrome storage
    const storedTheme: any = await getChromeData('theme', defaultTheme);
    setTheme(storedTheme);
  };

  const saveThemeToStorage = async () => {
    // Save to chrome storage
    await setChromeData('theme', theme);
  };

  const [theme, setTheme] = React.useState(defaultTheme ?? 'light');
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  React.useEffect(() => {
    getThemeFromStorage();
  }, []);

  React.useEffect(() => {
    addDarkClass();
    saveThemeToStorage();

    return () => {
      clearTimeout(bodyInvisibilityTimeout);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, nextTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
