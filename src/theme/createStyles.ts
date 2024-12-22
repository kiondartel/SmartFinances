import {StyleSheet} from 'react-native';
import {Theme, lightTheme} from './theme';

let currentTheme: Theme = lightTheme;

export const setTheme = (theme: Theme) => {
  currentTheme = theme;
};

export const createThemedStyles = <T extends StyleSheet.NamedStyles<any>>(
  styles: (theme: Theme) => T,
): T => {
  return StyleSheet.create(styles(currentTheme)) as T;
};
