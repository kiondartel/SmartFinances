import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Icon from '../Icons';
import {useTheme} from '../../theme/theme';
import {createThemedStyles} from '../../theme/createStyles';

const Header: React.FC = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          height={30}
          width={20}
          primary={colors.mono}
          source={'Arrowleft'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = createThemedStyles(theme => ({
  container: {
    paddingHorizontal: 13,
    paddingVertical: 10,
    backgroundColor: theme.colors.primary.t700,
  },
}));
