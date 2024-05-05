import React from 'react';
import { View } from 'react-native';
import { WorkOutIcon } from '../../atoms/footerItem/footerIcon';
import { WorkOutText } from '../../atoms/footerItem/footerText';
import { footerStyles } from '../../organisms/footer/footer.module';

export const WorkOutItem = () => {
  return (
    <View style={footerStyles.workOutItem}>
      <WorkOutIcon />
      <WorkOutText />
    </View>
  );
};
