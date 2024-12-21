import {PermissionsAndroid, Platform} from 'react-native';

export const requestStoragePermission = async () => {
  try {
    if (Platform.OS === 'android') {
      if (Platform.Version >= 33) {
        // Android 13+ (API 33)
        const readMediaPermission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          {
            title: 'Permissão de acesso a arquivos',
            message:
              'O aplicativo precisa de acesso para salvar arquivos no armazenamento.',
            buttonNeutral: 'Perguntar depois',
            buttonNegative: 'Cancelar',
            buttonPositive: 'OK',
          },
        );
        return readMediaPermission === PermissionsAndroid.RESULTS.GRANTED;
      } else if (Platform.Version >= 30) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.MANAGE_EXTERNAL_STORAGE,
          {
            title: 'Permissão de acesso ao armazenamento',
            message:
              'O aplicativo precisa de acesso ao armazenamento para baixar arquivos.',
            buttonNeutral: 'Perguntar depois',
            buttonNegative: 'Cancelar',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Permissão de acesso ao armazenamento',
            message:
              'O aplicativo precisa de acesso ao armazenamento para baixar arquivos.',
            buttonNeutral: 'Perguntar depois',
            buttonNegative: 'Cancelar',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      }
    } else {
      return true;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};
