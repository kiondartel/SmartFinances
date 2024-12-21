import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Header: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#38a68d',
  },
});
