import React from 'react';
import { View } from 'react-native';
import { ActivityIcon } from '../../atoms/footerItem/FooterIcon';
import { ActivityText } from '../../atoms/footerItem/FooterText';
import { footerStyles } from '../../organisms/footer/Footer.module';

export const ActivityItem = () => {
  return (
    <View style={footerStyles.ActivityItem}>
      <ActivityIcon />
      <ActivityText />
    </View>
  );
};
