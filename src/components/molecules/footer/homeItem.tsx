import React from 'react';
import { HomeIcon } from '../../atoms/footerItem/footerIcon';
import { View } from 'react-native';
import { HomeText } from '../../atoms/footerItem/footerText';

export const HomeItem = () => {
  return (
    <View>
      <HomeIcon />
      <HomeText />
    </View>
  );
};
