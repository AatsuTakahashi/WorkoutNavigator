import { Pressable, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { footerIconStyles } from './FooterItem.module';
import { PressableProps } from '../../../types/PressableProps';
import React from 'react';

export const WorkOutIcon: React.FC<PressableProps> = ({ onPress }) => {
  return (
    <View style={footerIconStyles.container}>
      <Pressable onPress={onPress}>
        <FontAwesome5 name='list-alt' size={25} />
      </Pressable>
    </View>
  );
};

export const HomeIcon: React.FC<PressableProps> = ({ onPress }) => {
  return (
    <View style={footerIconStyles.container}>
      <Pressable onPress={onPress}>
        <FontAwesome5 name='home' size={25} />
      </Pressable>
    </View>
  );
};

export const ActivityIcon = () => {
  return (
    <View style={footerIconStyles.container}>
      <Feather name='activity' size={25} />
    </View>
  );
};
