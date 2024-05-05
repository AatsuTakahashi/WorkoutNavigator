import React from 'react';
import { HomeIcon } from '../../atoms/footerItem/footerIcon';
import { View } from 'react-native';
import { HomeText } from '../../atoms/footerItem/footerText';
import { footerStyles } from '../../organisms/footer/footer.module';

export const HomeItem = () => {
  return (
    <View style={footerStyles.HomeItem}>
      <HomeIcon />
      <HomeText />
    </View>
  );
};
