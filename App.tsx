import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import {enableScreens} from 'react-native-screens';
import {ThemeProvider, useTheme} from './src/theme/theme';
import {createThemedStyles} from './src/theme/createStyles';

enableScreens();

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent(): React.JSX.Element {
  const {colors} = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.primary.t600}]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primary.t600}
      />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;

const styles = createThemedStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary.t600,
  },
}));
