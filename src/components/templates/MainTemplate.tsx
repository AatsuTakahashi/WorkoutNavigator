import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from '../organisms/header/Header';
import { Footer } from '../organisms/footer/Footer';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View>{children}</View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default MainTemplate;
