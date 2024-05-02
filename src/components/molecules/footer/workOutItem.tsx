import React from 'react';
import { Text, View } from 'react-native';
import { WorkOutIcon } from '../../atoms/footerItem/footerIcon';
import { WorkOutText } from '../../atoms/footerItem/footerText';

export const WorkOutItem = () => {
  return (
    <View>
      <WorkOutIcon />
      <WorkOutText />
    </View>
  );
};
