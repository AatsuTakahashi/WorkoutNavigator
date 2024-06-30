import React from 'react';
import { View } from 'react-native';
import { ActivityIcon } from '../../atoms/footerItem/FooterIcon';
import { ActivityText } from '../../atoms/footerItem/FooterText';
import { footerStyles } from '../../organisms/footer/Footer.module';
import { useAppNavigation } from '../../../navigation/Navigation';

export const ActivityItem: React.FC = () => {
  const { navigateToActivity } = useAppNavigation();

  return (
    <View style={footerStyles.ActivityItem}>
      <ActivityIcon onPress={() => navigateToActivity()} />
      <ActivityText />
    </View>
  );
};
