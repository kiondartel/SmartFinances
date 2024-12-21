import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {RootStackParamList} from '../../routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Login} from '../../Api/Client/Auth/Login';
// import { Container } from './styles';

const Signin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSignIn = async () => {
    const data = await Login();
    if (data?.ok) {
      navigation.navigate('Pdflist');
    } else {
      Alert.alert('Error ao logar');
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}>
        <Text style={styles.message}>Bem vindo</Text>
      </Animatable.View>
      <Animatable.View
        animation="fadeInUp"
        delay={500}
        style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite um email..."
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Sua senha"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.register}>
          <Text style={styles.registerText}>Não possui conta? Cadastre-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a68d',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {fontSize: 20, marginTop: 28, fontFamily: 'poppins-light'},
  input: {borderBottomWidth: 1, height: 40, marginBottom: 12, fontSize: 16},
  button: {
    backgroundColor: '#38a68d',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  register: {
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: '#a1a1a1',
  },
});
