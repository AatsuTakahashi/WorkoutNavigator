import { Image, View } from 'react-native';
import initialIcon from '../../../assets/unknownPersonIcon.png';
import { headerStyles } from '../../organisms/header/Header.module';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';

export const UserIcon = () => {
  return (
    <View>
      <Image source={initialIcon} style={headerStyles.userIcon} />
    </View>
  );
};

export const MenuIcon = () => {
  return (
    <View>
      <Feather name='menu' size={50} />
    </View>
  );
};
