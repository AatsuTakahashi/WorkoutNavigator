import React from 'react';
import { View } from 'react-native';
import { UserIcon } from '../../atoms/headerItem/HeaderIcon';
import { headerStyles } from '../../organisms/header/Header.module';

const UserIconElement = () => {
  return (
    <View style={headerStyles.userIcon}>
      <UserIcon />
    </View>
  );
};

export default UserIconElement;
