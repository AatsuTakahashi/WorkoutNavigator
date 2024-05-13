import React from 'react';
import { View } from 'react-native';
import { Header } from '../../organisms/header/Header';
import { Footer } from '../../organisms/footer/Footer';
import { styles } from './MainTemplate.module';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View>{children}</View>
      <Footer />
    </View>
  );
};

export default MainTemplate;
