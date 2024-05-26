import React from 'react';
import { View, ViewStyle } from 'react-native';

interface MainTemplateProps {
  children: React.ReactNode;
  templateStyle?: ViewStyle;
}

const MainTemplate: React.FC<MainTemplateProps> = ({
  children,
  templateStyle,
}) => {
  return (
    <View style={templateStyle}>
      <View>{children}</View>
    </View>
  );
};

export default MainTemplate;
