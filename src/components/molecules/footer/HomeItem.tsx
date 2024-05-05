import React from 'react';
import { HomeIcon } from '../../atoms/footerItem/FooterIcon';
import { View } from 'react-native';
import { HomeText } from '../../atoms/footerItem/FooterText';
import { footerStyles } from '../../organisms/footer/Footer.module';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../RootStackParamList/RootStackParamList';

export const HomeItem = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'Home'>>();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={footerStyles.HomeItem}>
      <HomeIcon onPress={() => navigateToHome()} />
      <HomeText />
    </View>
  );
};
