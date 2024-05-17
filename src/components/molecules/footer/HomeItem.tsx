import React from 'react';
import { HomeIcon } from '../../atoms/footerItem/FooterIcon';
import { View } from 'react-native';
import { HomeText } from '../../atoms/footerItem/FooterText';
import { footerStyles } from '../../organisms/footer/Footer.module';
import { useAppNavigation } from '../../../navigation/Navigation';

export const HomeItem: React.FC = () => {
  const { navigateToHome } = useAppNavigation();

  return (
    <View style={footerStyles.HomeItem}>
      <HomeIcon onPress={() => navigateToHome()} />
      <HomeText />
    </View>
  );
};
