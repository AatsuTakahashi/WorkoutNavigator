import React from 'react';
import { HomeIcon } from '../../atoms/footerItem/FooterIcon';
import { View } from 'react-native';
import { HomeText } from '../../atoms/footerItem/FooterText';
import { footerStyles } from '../../organisms/footer/Footer.module';

export const HomeItem = () => {
  return (
    <View style={footerStyles.HomeItem}>
      <HomeIcon />
      <HomeText />
    </View>
  );
};
