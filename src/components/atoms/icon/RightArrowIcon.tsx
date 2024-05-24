import React from 'react';
import { View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface RightArrowIconProps {
  size: number;
}

export const RightArrowIcon: React.FC<RightArrowIconProps> = ({ size }) => {
  return (
    <View>
      <AntDesign name='right' size={size} />
    </View>
  );
};
