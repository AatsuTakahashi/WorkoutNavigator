import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Home from './src/App';
import { Header } from './src/components/molecules/header/header';

export default function App() {
  return (
    <View>
      <Home />
      <StatusBar style='auto' />
    </View>
  );
}
