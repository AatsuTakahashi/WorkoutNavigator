import React from 'react';
import { RootStackParamList } from '../../RootStackParamList/RootStackParamList';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationState,
} from '@react-navigation/native';
import { Header } from '../organisms/header/Header';
import HomePage from '../pages/HomePage';
import WorkOutPage from '../pages/WorkOutPage';
import WorkOutRecordPage from '../pages/WorkOutRecordPage';
import DetailTaskPage from '../pages/DetailTaskPage';
import { Footer } from '../organisms/footer/Footer';
import ActivityPage from '../pages/ActivityPage';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const state = useNavigationState((state) => state);
  const currentRouteName = state ? state.routes[state.index].name : 'WorkOut';

  return (
    <>
      {currentRouteName !== 'DetailTask' && <Header />}
      <Stack.Navigator initialRouteName='Activity'>
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
          name='Activity'
          component={ActivityPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='WorkOutRecord'
          component={WorkOutRecordPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='DetailTask'
          component={DetailTaskPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <Footer />
    </>
  );
};

export default RootNavigator;
