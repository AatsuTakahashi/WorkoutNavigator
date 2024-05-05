import React from 'react';
import { View } from 'react-native';
import { headerStyles } from './Header.module';
import UserIconElement from '../../molecules/header/UserIconElement';
import Menu from '../../molecules/header/Menu';

export const Header = () => {
  return (
    <View style={headerStyles.header}>
      <View style={headerStyles.container}>
        <UserIconElement />
        <Menu />
      </View>
    </View>
  );
};
