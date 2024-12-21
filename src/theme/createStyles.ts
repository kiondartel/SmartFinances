// src/theme/createStyles.ts
import { StyleSheet } from 'react-native';
import { lightTheme } from './theme';

type Theme = typeof lightTheme;

let currentTheme: Theme = lightTheme;

export const setTheme = (theme: Theme) => {
  currentTheme = theme;
};

export const createThemedStyles = (styles: (theme: Theme) => any) =>
  StyleSheet.create(styles(currentTheme));
