import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/components/pages/HomePage';
import WorkOutPage from './src/components/pages/WorkOutPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WorkOut'>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
