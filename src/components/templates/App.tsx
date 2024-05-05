import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../organisms/header/header';
import { Footer } from '../organisms/footer/footer';

const Main = () => {
  return (
    <View style={styles.main}>
      <Header />
      <View>
        <Text>Hello</Text>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default Main;
