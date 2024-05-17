import React from 'react';
import { View } from 'react-native';
import { WorkOutIcon } from '../../atoms/footerItem/FooterIcon';
import { footerStyles } from '../../organisms/footer/Footer.module';
import { WorkOutText } from '../../atoms/footerItem/FooterText';
import { useAppNavigation } from '../../../navigation/Navigation';

export const WorkOutItem: React.FC = () => {
  const { navigateToWorkOut } = useAppNavigation();

  return (
    <View style={footerStyles.workOutItem}>
      <WorkOutIcon onPress={() => navigateToWorkOut()} />
      <WorkOutText />
    </View>
  );
};
