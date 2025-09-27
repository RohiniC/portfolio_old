import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light1'); // Default theme

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    switch (theme) {
      case 'light1':
        setTheme('light2');
        break;
      case 'light2':
        setTheme('darkA');
        break;
      case 'darkA':
        setTheme('darkB');
        break;
      case 'darkB':
        setTheme('light1');
        break;
      default:
        setTheme('light1');
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
