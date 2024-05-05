import React from 'react';
import { View } from 'react-native';
import { MenuIcon } from '../../atoms/headerItem/HeaderIcon';
import { headerStyles } from '../../organisms/header/Header.module';

const Menu = () => {
  return (
    <View style={headerStyles.menuIcon}>
      <MenuIcon />
    </View>
  );
};

export default Menu;
