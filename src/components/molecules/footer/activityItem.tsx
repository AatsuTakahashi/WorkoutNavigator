import React from 'react';
import { View } from 'react-native';
import { ActivityIcon } from '../../atoms/footerItem/footerIcon';
import { ActivityText } from '../../atoms/footerItem/footerText';
import { footerStyles } from '../../organisms/footer/footer.module';

export const ActivityItem = () => {
  return (
    <View style={footerStyles.ActivityItem}>
      <ActivityIcon />
      <ActivityText />
    </View>
  );
};
