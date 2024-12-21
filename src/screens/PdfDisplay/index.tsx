import React from 'react';
import {View, Button, StyleSheet, Image, ScrollView} from 'react-native';
import {downloadPDF} from '../../utils/dowloadPdf';
import {sharePDF} from '../../utils/sharedPdf';

const PdfDisplay: React.FC = () => {
  const PDF_URL =
    'https://bucket-bulbe-homologacao.s3.us-east-2.amazonaws.com/Test/boletopontual/BL29380057926109000000001182744.pdf';
  const PDF_NAME = 'document.pdf';

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.pdfContainer}>
        <Image
          style={styles.pdfImage}
          source={{uri: PDF_URL}}
          resizeMode="contain"
        />
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button
          title="Baixar PDF"
          onPress={() => downloadPDF(PDF_NAME, PDF_URL)}
        />
        <Button title="Compartilhar PDF" onPress={() => sharePDF(PDF_NAME)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  pdfContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdfImage: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default PdfDisplay;
