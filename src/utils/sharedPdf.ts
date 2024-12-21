import RNFS from 'react-native-fs';
import Share from 'react-native-share';

export const sharePDF = async (pdfName: string) => {
  const filePath = `${RNFS.DownloadDirectoryPath}/${pdfName}`;

  try {
    const shareOptions = {
      title: 'Compartilhar PDF',
      message: 'Aqui está o arquivo PDF',
      url: `file://${filePath}`,
      type: 'application/pdf',
    };

    await Share.open(shareOptions);
  } catch (error) {
    console.log('Erro ao compartilhar:', error);
  }
};
