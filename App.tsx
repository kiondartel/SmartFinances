import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import {enableScreens} from 'react-native-screens';
import { ThemeProvider, useTheme } from './src/theme/theme';

enableScreens();

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent(): React.JSX.Element {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.primary }]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38A69D',
  },
});
