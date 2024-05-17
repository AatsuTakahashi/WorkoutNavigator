import React from 'react';
import { View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface LeftArrowIconProps {
  size: number;
}

export const LeftArrowIcon: React.FC<LeftArrowIconProps> = ({ size }) => {
  return (
    <View>
      <AntDesign name='left' size={size} />
    </View>
  );
};
