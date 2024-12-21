import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { setTheme } from './createStyles';
export const lightTheme = {
  colors: {
    primary: '#38A69D',
    secondary: '#FF6347',
    background: '#F5F5F5',
    text: '#a1a1a1',
    accent: '#FFD700',
    mono: '#FFF',
  },
  fonts: {
    regular: 'Poppins',
    light: 'Poppins-Light',
    medium: 'Poppins-Medium',
  },
};

export const darkTheme = {
  colors: {
    primary: '#1C1C1E',
    secondary: '#FF6347',
    background: '#000000',
    text: '#FFFFFF',
    accent: '#FFD700',
    mono: '#FFF',
  },
  fonts: {
    regular: 'poppins',
    light: 'poppins-light',
    medium: 'poppins-medium',
  },
};



const ThemeContext = createContext(lightTheme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);