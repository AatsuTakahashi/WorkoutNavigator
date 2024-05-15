import React from 'react';
import { View } from 'react-native';
import { styles } from './MainTemplate.module';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View>{children}</View>
    </View>
  );
};

export default MainTemplate;
