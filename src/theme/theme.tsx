import React, {createContext, useContext, ReactNode, useEffect} from 'react';
import {setTheme} from './createStyles';
export type Theme = {
  colors: {
    primary: {
      t50: string;
      t100: string;
      t200: string;
      t300: string;
      t400: string;
      t500: string;
      t600: string;
      t700: string;
      t800: string;
      t900: string;
    };
    secondary: string;
    background: string;
    text: {
      t50: string;
      t100: string;
      t150: string;
      t200: string;
      t300: string;
      t400: string;
      t500: string;
      t600: string;
      t700: string;
      t800: string;
      t900: string;
    };
    accent: string;
    mono: string;
  };
  fonts: {
    regular: string;
    light: string;
    medium: string;
  };
};

export const lightTheme: Theme = {
  colors: {
    primary: {
      t50: '#E9FBF2',
      t100: '#D4F7E6',
      t200: '#A9EFCC',
      t300: '#7EE7B3',
      t400: '#53DF99',
      t500: '#26D07C',
      t600: '#38A69D',
      t700: '#38a68d',
      t800: '#105633',
      t900: '#082B1A',
    },
    secondary: '#FF6347',
    background: '#F5F5F5',
    text: {
      t50: '#F6F9F9',
      t100: '#E1E6EA',
      t150: '#D1D9E0',
      t200: '#C2CCD6',
      t300: '#A4B3C1',
      t400: '#8699AC',
      t500: '#678098',
      t600: '#536679',
      t700: '#3E4D5B',
      t800: '#29333D',
      t900: '#151A1E',
    },
    accent: '#FFD700',
    mono: '#FFF',
  },
  fonts: {
    regular: 'Poppins',
    light: 'Poppins-Light',
    medium: 'Poppins-Medium',
  },
};

const ThemeContext = createContext(lightTheme);

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const theme = lightTheme;

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
