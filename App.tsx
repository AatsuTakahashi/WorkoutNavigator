import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/App';
import { Header } from './src/components/molecules/header/header';

export default function App() {
  return (
    <View style={styles.main}>
      <Header />
      <Home />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
