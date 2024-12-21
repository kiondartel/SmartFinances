import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Signin from '../screens/Signin';
import Welcome from '../screens/Welcome';
import PdfDisplay from '../screens/PdfDisplay';

export type RootStackParamList = {
  Welcome: undefined;
  Signin: undefined;
  Pdflist: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signin"
        options={{headerShown: false}}
        component={Signin}
      />
      <Stack.Screen
        name="Pdflist"
        options={{headerShown: false}}
        component={PdfDisplay}
      />
    </Stack.Navigator>
  );
}

export type DisplayPdfProps = RootStackParamList['Pdflist'];
