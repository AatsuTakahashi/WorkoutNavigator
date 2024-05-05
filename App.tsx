import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Main from './src/components/templates/App';

export default function App() {
  return (
    <View style={styles.main}>
      <Main />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
