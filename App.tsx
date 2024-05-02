import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/App';
import { Header } from './src/components/organisms/header/header';
import { Footer } from './src/components/organisms/footer/footer';

export default function App() {
  return (
    <View style={styles.main}>
      <Header />
      <Home />
      <Footer />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
