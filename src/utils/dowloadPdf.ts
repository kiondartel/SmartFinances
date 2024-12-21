import {Alert, Platform} from 'react-native';
import {requestStoragePermission} from './permissions';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'react-native-blob-util';

export const downloadPDF = async (pdfName: string, pdfUrl: string) => {
  const hasPermission = await requestStoragePermission();
  if (!hasPermission) {
    Alert.alert(
      'Permissão negada',
      'Você precisa conceder permissão de armazenamento para baixar o arquivo.',
    );
    return;
  }

  const filePath =
    Platform.OS === 'ios'
      ? `${RNFS.DocumentDirectoryPath}/${pdfName}`
      : `${RNFS.DownloadDirectoryPath}/${pdfName}`;

  RNFetchBlob.config({
    path: filePath,
    fileCache: true,
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      title: 'Baixando PDF',
      description: 'O PDF está sendo baixado...',
      mime: 'application/pdf',
      mediaScannable: true,
      path: filePath,
    },
  })
    .fetch('GET', pdfUrl)
    .then(res => {
      Alert.alert('Download concluído', `Arquivo salvo em: ${res.path()}`);
    })
    .catch(error => {
      console.log(error);
      Alert.alert('Erro', 'Ocorreu um erro ao baixar o arquivo.');
    });
};
