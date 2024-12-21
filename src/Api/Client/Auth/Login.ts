import {Alert} from 'react-native';

export const Login = async () => {
  try {
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'eve.holt@reqres.in',
        password: 'pistol',
      }),
    });

    return response;
  } catch (error) {
    Alert.alert('Erro', 'Não foi possível conectar ao servidor');
  }
};
