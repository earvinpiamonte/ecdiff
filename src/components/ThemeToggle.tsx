import React from 'react';

import { Switch } from '@headlessui/react';

import { ThemeContext } from '../providers/ThemeProvider';

const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const isDark = theme === 'dark';

  const [enabled, setEnabled] = React.useState(isDark);

  const handleChangeTheme = () => {
    setTheme(enabled ? 'light' : 'dark');
  };

  React.useEffect(() => {
    setEnabled(isDark);
  }, [theme]);

  return (
    <Switch
      checked={enabled}
      onChange={handleChangeTheme}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">Enable dark mode</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
  );
};

export default ThemeToggle;
