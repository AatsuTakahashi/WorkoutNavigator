import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/components/pages/HomePage';
import WorkOutPage from './src/components/pages/WorkOutPage';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/components/organisms/header/Header';
import { Footer } from './src/components/organisms/footer/Footer';
import WorkOutRecordPage from './src/components/pages/WorkOutRecordPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={AppStyles.container}>
      <Header />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='WorkOutRecord'>
          <Stack.Screen
            name='Home'
            component={HomePage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='WorkOut'
            component={WorkOutPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='WorkOutRecord'
            component={WorkOutRecordPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </View>
  );
}

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
