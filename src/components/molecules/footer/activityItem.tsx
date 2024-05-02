import React from 'react';
import { View } from 'react-native';
import { ActivityIcon } from '../../atoms/footerItem/footerIcon';
import { ActivityText } from '../../atoms/footerItem/footerText';

export const ActivityItem = () => {
  return (
    <View>
      <ActivityIcon />
      <ActivityText />
    </View>
  );
};
