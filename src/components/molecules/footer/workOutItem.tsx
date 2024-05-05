import React from 'react';
import { View } from 'react-native';
import { WorkOutIcon } from '../../atoms/footerItem/FooterIcon';
import { WorkOutText } from '../../atoms/footerItem/FooterText';
import { footerStyles } from '../../organisms/footer/Footer.module';

export const WorkOutItem = () => {
  return (
    <View style={footerStyles.workOutItem}>
      <WorkOutIcon />
      <WorkOutText />
    </View>
  );
};
