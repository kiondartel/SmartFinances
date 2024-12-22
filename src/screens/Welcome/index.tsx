import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createThemedStyles} from '../../theme/createStyles';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<any, 'Welcome'>;

const Welcome: React.FC = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          source={require('../../assets/logo.png')}
          resizeMode="contain"
          onError={error => console.log('Erro ao carregar a imagem:', error)}
        />
      </View>
      <Animatable.View
        delay={300}
        animation="fadeInUp"
        style={styles.containerForm}>
        <Text style={styles.title}>
          Monitore, organize seus gastos de qualquer lugar
        </Text>
        <Text style={styles.text}>Faça login para começar</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Welcome;

export const styles = createThemedStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary.t600,
  },
  containerLogo: {
    flex: 2,
    backgroundColor: theme.colors.primary.t600,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  containerForm: {
    flex: 1,
    backgroundColor: theme.colors.mono,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingEnd: '5%',
    paddingStart: '5%',
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.text.t900,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.text.t600,
  },
  button: {
    position: 'absolute',
    backgroundColor: theme.colors.primary.t600,
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: theme.fonts.regular,
    fontSize: 18,
    color: theme.colors.mono,
    fontWeight: 'bold',
  },
}));
