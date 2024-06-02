import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/components/pages/HomePage';
import WorkOutPage from './src/components/pages/WorkOutPage';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/components/organisms/header/Header';
import { Footer } from './src/components/organisms/footer/Footer';
import WorkOutRecordPage from './src/components/pages/WorkOutRecordPage';
import { FormProvider } from './src/context/FormContext';
import DetailTaskPage from './src/components/pages/DetailTaskPage';
import { RootStackParamList } from './src/RootStackParamList/RootStackParamList';
import RootNavigator from './src/components/templates/RootNavigator';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <FormProvider>
      <View style={AppStyles.container}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </View>
    </FormProvider>
  );
}

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
