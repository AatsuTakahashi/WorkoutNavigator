import React from 'react';
import { View } from 'react-native';
import { WorkOutIcon } from '../../atoms/footerItem/FooterIcon';
import { footerStyles } from '../../organisms/footer/Footer.module';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../RootStackParamList/RootStackParamList';
import { WorkOutText } from '../../atoms/footerItem/FooterText';

export const WorkOutItem = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'WorkOut'>>();

  const navigateToWorkOut = () => {
    navigation.navigate('WorkOut');
  };

  return (
    <View style={footerStyles.workOutItem}>
      <WorkOutIcon onPress={() => navigateToWorkOut()} />
      <WorkOutText />
    </View>
  );
};
